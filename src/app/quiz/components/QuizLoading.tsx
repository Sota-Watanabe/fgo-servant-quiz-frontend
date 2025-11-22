"use client";

import PageLayout from "@/app/components/PageLayout";

type QuizLoadingProps = {
  title: string;
  message: string;
};

export default function QuizLoading({ title, message }: QuizLoadingProps) {
  return (
    <PageLayout>
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            {title}
          </h2>
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
            <p className="text-gray-500 text-base sm:text-lg">{message}</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

