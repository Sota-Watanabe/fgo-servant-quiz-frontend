// API リクエスト・レスポンスの型定義

export type Servant = {
  name: string;
  ruby: string;
  classId: number;
};

export type Skill = {
  name: string;
  ruby: string;
  details: string[];
  skillNumbers: number;
  priorities: number;
};

export type Treasure = {
  name: string;
  ruby: string;
  cardId: number;
};

// スキルクイズのAPIレスポンス
export type SkillQuizResponse = {
  servant: Servant;
  skills: Skill[];
  treasure: Treasure[];
};
