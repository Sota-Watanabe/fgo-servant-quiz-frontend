/**
 * 旧来の `useApi` エントリポイント。
 * 個別フックへリファクタリング後も既存コードから移行しやすいよう、
 * 同名エクスポートをまとめて再公開する。
 */
export {
  useFetchQuizSkill,
  type SkillQuizResponse,
} from "./useFetchQuizSkill";

export {
  useFetchQuizProfile,
  type ProfileQuizResponse,
} from "./useFetchQuizProfile";

export {
  useFetchServantsOption as useFetchServantsOptions,
  type ServantsOptionsResponse,
} from "./useFetchServantsOption";
