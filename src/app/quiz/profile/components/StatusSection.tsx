import { getPolicyLabel } from "@/models/policyTypes";
import { getPersonalityLabel } from "@/models/personalityTypes";
import { components } from "@/types/api";

type ProfileStats =
  components["schemas"]["ServantProfileGetResponseDto"]["stats"];

type StatusSectionProps = {
  stats: ProfileStats;
};

export default function StatusSection({ stats }: StatusSectionProps) {
  const {
    strength,
    endurance,
    agility,
    magic,
    luck,
    np,
    policy,
    personality,
    // deity,
  } = stats;

  return (
    <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/60 p-4 sm:p-5 shadow-sm">
      <h3 className="text-sm sm:text-base font-semibold text-indigo-900">
        ステータス
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {StatusBlock("筋力", strength)}
        {StatusBlock("耐久", endurance)}
        {StatusBlock("敏捷", agility)}
        {StatusBlock("魔力", magic)}
        {StatusBlock("幸運", luck)}
        {StatusBlock("宝具", np)}
        {StatusBlock(
          "属性",
          `${getPolicyLabel(policy)}・${getPersonalityLabel(personality)}`
        )}
        {/* {StatusBlock("神性", deity)} */}
      </dl>
    </section>
  );
}

const StatusBlock = (statusKey: string, statusValue: string) => {
  const displayValue = statusValue === "None" ? "-" : statusValue;
  return (
    <div className="rounded-xl border border-indigo-100 bg-white/70 px-3 py-3 text-center">
      <dt className="text-xs font-medium uppercase tracking-wide text-indigo-600">
        {statusKey}
      </dt>
      <dd className="mt-1 text-base font-bold text-gray-900">{displayValue}</dd>
    </div>
  );
};
