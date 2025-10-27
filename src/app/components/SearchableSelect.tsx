"use client";

import { useState, useRef, useEffect } from "react";
import { getClassTypeName } from "@/models/classTypes";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";

type ServantOption = ServantsOptionsResponse["options"][number];

interface SearchableSelectProps {
  options: ServantOption[];
  value: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "サーヴァント名（第一再臨）",
  disabled = false,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toCaseFold = (text: string) =>
    text.normalize("NFKC").toLocaleLowerCase("en-US");

  // 選択されたサーヴァントを取得
  const selectedServant = options.find((option) => option.id === value);

  // ひらがなをカタカナに変換する関数
  const hiraganaToKatakana = (str: string) => {
    return str.replace(/[\u3041-\u3096]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
  };

  // カタカナをひらがなに変換する関数
  const katakanaToHiragana = (str: string) => {
    return str.replace(/[\u30a1-\u30f6]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60)
    );
  };

  // 検索でフィルタリングされた選択肢
  const filteredOptions = options.filter((option) => {
    const searchLower = toCaseFold(searchTerm);

    // 検索対象のテキストを正規化（・を含む部分マッチング対応）
    const normalizeText = (text: string) => {
      return toCaseFold(text)
        .replace(/・/g, "") // 中黒を削除
        .replace(/\s+/g, ""); // 空白を削除
    };

    const normalizedSearch = normalizeText(searchLower);
    const normalizedName = normalizeText(option.name);
    const normalizedOriginalName = option.originalOverwriteName
      ? normalizeText(option.originalOverwriteName)
      : "";

    // ひらがな・カタカナ相互変換した検索文字列
    const searchHiragana = katakanaToHiragana(normalizedSearch);
    const searchKatakana = hiraganaToKatakana(normalizedSearch);
    const nameHiragana = katakanaToHiragana(normalizedName);
    const nameKatakana = hiraganaToKatakana(normalizedName);
    const originalNameHiragana = normalizedOriginalName
      ? katakanaToHiragana(normalizedOriginalName)
      : "";
    const originalNameKatakana = normalizedOriginalName
      ? hiraganaToKatakana(normalizedOriginalName)
      : "";

    return (
      // 元の検索（完全一致優先）
      toCaseFold(option.name).includes(searchLower) ||
      (option.originalOverwriteName &&
        toCaseFold(option.originalOverwriteName).includes(searchLower)) ||
      // 正規化された検索（・や空白を無視した部分マッチ）
      normalizedName.includes(normalizedSearch) ||
      (normalizedOriginalName &&
        normalizedOriginalName.includes(normalizedSearch)) ||
      // ひらがな・カタカナ相互変換検索
      nameHiragana.includes(searchHiragana) ||
      nameKatakana.includes(searchKatakana) ||
      nameHiragana.includes(searchKatakana) ||
      nameKatakana.includes(searchHiragana) ||
      (originalNameHiragana && originalNameHiragana.includes(searchHiragana)) ||
      (originalNameKatakana && originalNameKatakana.includes(searchKatakana)) ||
      (originalNameHiragana && originalNameHiragana.includes(searchKatakana)) ||
      (originalNameKatakana && originalNameKatakana.includes(searchHiragana))
    );
  });

  // ドロップダウンを開く
  const openDropdown = () => {
    if (!disabled) {
      setIsOpen(true);
      setSearchTerm("");
      setHighlightedIndex(-1);
    }
  };

  // ドロップダウンを閉じる
  const closeDropdown = () => {
    setIsOpen(false);
    setSearchTerm("");
    setHighlightedIndex(-1);
  };

  // 選択肢を選択
  const selectOption = (option: ServantOption) => {
    onChange(option.id);
    closeDropdown();
  };

  // キーボード操作の処理
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown();
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeDropdown();
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredOptions.length
        ) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        break;
    }
  };

  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // ハイライトされた選択肢をスクロールして表示
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0) {
      const highlightedElement = dropdownRef.current?.children[
        highlightedIndex + 1
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  // フォーカス時にドロップダウンを開く
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* メインの入力エリア */}
      <div
        className={`w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base cursor-pointer transition-colors ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
        }`}
        onClick={openDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        {isOpen ? (
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="サーヴァント名で検索..."
            className="w-full outline-none bg-transparent text-gray-900 placeholder:text-gray-500"
            disabled={disabled}
          />
        ) : (
          <div
            className={`${selectedServant ? "text-gray-900" : "text-gray-500"}`}
          >
            {selectedServant
              ? `${selectedServant.name} (${getClassTypeName(
                  selectedServant.classId
                )})`
              : placeholder}
          </div>
        )}

        {/* ドロップダウン矢印 */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* ドロップダウンメニュー */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-100 overflow-y-auto">
          {/* 検索結果の件数表示 */}
          <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-200 bg-gray-50">
            {filteredOptions.length} 件の候補
          </div>

          {filteredOptions.length === 0 ? (
            <div className="px-3 py-4 text-gray-500 text-center">
              該当するサーヴァントが見つかりません
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.id}
                className={`group flex items-center px-8 py-3 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                  index === highlightedIndex
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-50 text-gray-900"
                } ${
                  value === option.id
                    ? "bg-blue-100 text-blue-800 font-medium"
                    : ""
                }`}
                onClick={() => selectOption(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 group-hover:border-gray-300">
                  <img
                    src={option.face}
                    alt={`${option.name}のアイコン`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="ml-6 min-w-0">
                  <div className="truncate font-medium">{option.name}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
