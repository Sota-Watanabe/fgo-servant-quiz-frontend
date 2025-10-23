const UNKNOWN_LABEL = "不明";

export const PersonalityType = {
  Good: "good",
  Evil: "evil",
  Balanced: "balanced",
  Summer: "summer",
  Madness: "madness",
  Bride: "bride",
} as const;

export type PersonalityTypeValue =
  (typeof PersonalityType)[keyof typeof PersonalityType];

export const personalityLabels: Record<PersonalityTypeValue, string> = {
  [PersonalityType.Good]: "善",
  [PersonalityType.Evil]: "悪",
  [PersonalityType.Balanced]: "中庸",
  [PersonalityType.Summer]: "夏",
  [PersonalityType.Madness]: "狂",
  [PersonalityType.Bride]: "花嫁",
};

export const getPersonalityLabel = (personality?: string | null): string => {
  console.log("al", personality);
  if (!personality) return UNKNOWN_LABEL;

  const normalized = personality.toLowerCase() as PersonalityTypeValue;

  return personalityLabels[normalized] ?? UNKNOWN_LABEL;
};
