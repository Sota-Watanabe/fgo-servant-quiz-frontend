// カードタイプの定数定義
export const CardType = {
  Arts: 1,
  Buster: 2,
  Quick: 3,
} as const;

// カードタイプの型定義
export type CardTypeValue = (typeof CardType)[keyof typeof CardType];

// カードタイプの表示名マッピング
export const cardTypeNames = {
  [CardType.Arts]: "アーツ",
  [CardType.Buster]: "バスター",
  [CardType.Quick]: "クイック",
} as const;

// カードタイプ名を取得するヘルパー関数
export const getCardTypeName = (cardId: number): string => {
  return cardTypeNames[cardId as CardTypeValue];
};
