type RelatedInfoEntry = {
  label: string;
  value: string | number;
};

type RelatedInfoSectionProps = {
  entries: RelatedInfoEntry[];
};

export default function RelatedInfoSection({
  entries,
}: RelatedInfoSectionProps) {
  if (!entries.length) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-4 sm:p-5 shadow-sm">
      <h3 className="text-sm sm:text-base font-semibold text-amber-900">
        関連情報
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {entries.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-amber-100 bg-white/70 px-3 py-3 text-center"
          >
            <dt className="text-xs font-medium uppercase tracking-wide text-amber-600">
              {label}
            </dt>
            <dd className="mt-1 text-sm sm:text-base font-semibold text-gray-900">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
