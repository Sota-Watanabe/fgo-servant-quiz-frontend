type StatusEntry = {
  key: string;
  label: string;
  value: string | number;
};

type StatusSectionProps = {
  entries: StatusEntry[];
};

export default function StatusSection({ entries }: StatusSectionProps) {
  if (!entries.length) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/60 p-4 sm:p-5 shadow-sm">
      <h3 className="text-sm sm:text-base font-semibold text-indigo-900">
        ステータス
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {entries.map(({ key, label, value }) => (
          <div
            key={key}
            className="rounded-xl border border-indigo-100 bg-white/70 px-3 py-3 text-center"
          >
            <dt className="text-xs font-medium uppercase tracking-wide text-indigo-600">
              {label}
            </dt>
            <dd className="mt-1 text-base font-bold text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
