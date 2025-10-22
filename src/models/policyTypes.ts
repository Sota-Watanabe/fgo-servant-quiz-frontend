const UNKNOWN_LABEL = "不明";

export const PolicyType = {
  Lawful: "lawful",
  Neutral: "neutral",
  Chaotic: "chaotic",
} as const;

export type PolicyTypeValue = (typeof PolicyType)[keyof typeof PolicyType];

export const policyLabels: Record<PolicyTypeValue, string> = {
  [PolicyType.Lawful]: "秩序",
  [PolicyType.Neutral]: "中庸",
  [PolicyType.Chaotic]: "混沌",
};

export const getPolicyLabel = (policy?: string | null): string => {
  if (!policy) return UNKNOWN_LABEL;

  const normalized = policy.toLowerCase() as PolicyTypeValue;

  return policyLabels[normalized] ?? UNKNOWN_LABEL;
};
