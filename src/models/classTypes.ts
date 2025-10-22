// サーヴァントクラスの定数定義
export const ClassType = {
  Saber: 1,
  Archer: 2,
  Lancer: 3,
  Rider: 4,
  Caster: 5,
  Assassin: 6,
  Berserker: 7,
  Shielder: 8,
  Ruler: 9,
  Avenger: 11,
  Alterego: 10,
  Beast: 33,
  Foreigner: 25,
  MoonCancer: 23,
  Pretender: 28,
} as const;

// サーヴァントクラスの型定義
export type ClassTypeValue = (typeof ClassType)[keyof typeof ClassType];

// サーヴァントクラスの表示名マッピング
export const classTypeNames = {
  [ClassType.Saber]: "セイバー",
  [ClassType.Archer]: "アーチャー",
  [ClassType.Lancer]: "ランサー",
  [ClassType.Rider]: "ライダー",
  [ClassType.Caster]: "キャスター",
  [ClassType.Assassin]: "アサシン",
  [ClassType.Berserker]: "バーサーカー",
  [ClassType.Shielder]: "シールダー",
  [ClassType.Ruler]: "ルーラー",
  [ClassType.Avenger]: "アヴェンジャー",
  [ClassType.Alterego]: "アルターエゴ",
  [ClassType.Beast]: "ビースト",
  [ClassType.Foreigner]: "フォーリナー",
  [ClassType.MoonCancer]: "ムーンキャンサー",
  [ClassType.Pretender]: "プリテンダー",
} as const;

// サーヴァントクラス名を取得するヘルパー関数
export const getClassTypeName = (classId: number): string => {
  return classTypeNames[classId as ClassTypeValue];
};
