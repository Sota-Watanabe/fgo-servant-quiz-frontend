import { components } from "@/types/api";

type ProfileStats = Pick<
  components["schemas"]["ServantProfileGetResponseDto"],
  "cv" | "illustrator"
>;

type RelatedInfoSectionProps = {
  relatedInfo: ProfileStats;
};

export default function RelatedInfoSection({
  relatedInfo,
}: RelatedInfoSectionProps) {
  return (
    <section className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-4 sm:p-5 shadow-sm">
      <h3 className="text-sm sm:text-base font-semibold text-amber-900">
        関連情報
      </h3>
      <dl className="mt-3 flex flex-wrap gap-3">
        <div
          key={relatedInfo.cv}
          className="inline-flex flex-col items-center rounded-xl border border-amber-100 bg-white/70 px-3 py-3 text-center"
        >
          <dt className="text-xs font-medium uppercase tracking-wide text-amber-600">
            CV
          </dt>
          <dd className="mt-1 text-sm sm:text-base font-semibold text-gray-900">
            {relatedInfo.cv}
          </dd>
        </div>
        <div
          key={relatedInfo.illustrator}
          className="inline-flex flex-col items-center rounded-xl border border-amber-100 bg-white/70 px-3 py-3 text-center"
        >
          <dt className="text-xs font-medium uppercase tracking-wide text-amber-600">
            イラストレーター
          </dt>
          <dd className="mt-1 text-sm sm:text-base font-semibold text-gray-900">
            {relatedInfo.illustrator}
          </dd>
        </div>
      </dl>
    </section>
  );
}
