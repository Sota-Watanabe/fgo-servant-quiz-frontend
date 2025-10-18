import { components } from "@/types/api";

type Skill = components["schemas"]["Skill"];

/**
 * 表示用のスキルデータを処理する
 * num毎に最適なスキルを保持（priorityが高いものを優先）し、
 * num順でソートして最大3つまで返す
 */
export const getDisplaySkills = (skills: Skill[] | undefined): Skill[] => {
  if (!skills) return [];

  return skills
    .reduce((acc, skill) => {
      // num毎に最適なスキルを保持（priorityが高いものを優先）
      const existingSkill = acc.find((s) => s.num === skill.num);
      
      if (!existingSkill) {
        // 同じnumのスキルがまだない場合は追加
        acc.push(skill);
      } else {
        // 既に同じnumのスキルがある場合、priorityを比較
        const existingIndex = acc.findIndex((s) => s.num === skill.num);
        if (skill.priority > existingSkill.priority) {
          // より高いpriorityの場合は置き換え
          acc[existingIndex] = skill;
        }
      }
      
      return acc;
    }, [] as Skill[])
    .sort((a, b) => {
      // まずnum順でソート
      if (a.num !== b.num) {
        return a.num - b.num;
      }
      // numが同じ場合はpriorityの降順でソート（高い方が優先）
      return b.priority - a.priority;
    })
    .slice(0, 3); // 3つだけ表示
};
