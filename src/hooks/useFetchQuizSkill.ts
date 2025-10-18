import { useQuery } from "@tanstack/react-query";
import { SkillQuizResponse } from "@/types/api";

const fetchQuizData = async (): Promise<SkillQuizResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1234';
  const response = await fetch(`${apiUrl}/quiz/skill`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const useFetchQuizSkill = (questionCount: number = 0) => {
  return useQuery({
    queryKey: ["/quiz/skill", questionCount],
    queryFn: fetchQuizData,
  });
};
