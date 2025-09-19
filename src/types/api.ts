// API リクエスト・レスポンスの型定義

export type Servant = {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  ruby: string;
  classId: number;
  rarity: number;
};

export type NoblePhantasm = {
  id: number;
  num: number;
  card: string;
  name: string;
  originalName: string;
  ruby: string;
  icon: string;
  rank: string;
  type: string;
  effectFlags: string[];
  detail: string;
  unmodifiedDetail: string;
};

export type Skill = {
  id: number;
  num: number;
  name: string;
  originalName: string;
  ruby: string;
  detail: string;
  unmodifiedDetail: string;
  type: string;
  priority: number;
  icon: string;
};

// スキルクイズのAPIレスポンス（ServantDetailGetResponseDtoに対応）
export type SkillQuizResponse = {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  ruby: string;
  classId: number;
  rarity: number;
  noblePhantasms: NoblePhantasm[];
  skills: Skill[];
};
