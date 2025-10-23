import type { ProfileQuizResponse } from "@/hooks/useFetchQuizProfile";

type ProfileSectionProps = {
  baseProfile: NonNullable<ProfileQuizResponse["baseProfile"]>;
};

export default function ProfileSection({ baseProfile }: ProfileSectionProps) {
  if (!baseProfile?.comment?.trim()) {
    return null;
  }

  const condMessage = baseProfile.condMessage?.trim();

  return (
    <section className="relative overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60 p-5 sm:p-6 shadow-sm">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 h-full w-24 bg-sky-100/30 blur-2xl"
      />
      <div className="relative space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-sky-900">
            プロフィール
          </h3>
          {condMessage && (
            <span className="inline-flex items-center rounded-full bg-sky-200 px-3 py-1 text-[11px] font-semibold tracking-wide text-sky-800">
              {condMessage}
            </span>
          )}
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-gray-800">
          {baseProfile.comment.trim()}
        </p>
      </div>
    </section>
  );
}
