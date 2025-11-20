import DynamicQuizHead from "@/app/quiz/components/DynamicQuizHead";
import { pageDescription, pageTitle } from "./page";

export default function Head() {
  return (
    <DynamicQuizHead
      title={pageTitle}
      description={pageDescription}
      path="/quiz/skill"
      quizType="skill"
    />
  );
}
