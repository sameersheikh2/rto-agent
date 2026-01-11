import {
  FaCarSide,
  FaClipboardList,
  FaGlobeAsia,
  FaIdCardAlt,
  FaMoneyCheckAlt,
  FaRegCheckCircle,
  FaRoute,
  FaStamp,
} from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney, GiSteeringWheel } from "react-icons/gi";
import {
  MdAssignmentTurnedIn,
  MdDirectionsCarFilled,
  MdHistoryToggleOff,
} from "react-icons/md";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../context/LanguageContext";

const iconMap = [
  FaIdCardAlt,
  MdHistoryToggleOff,
  MdDirectionsCarFilled,
  FaRoute,
  FaGlobeAsia,
  FaRegCheckCircle,
  FaMoneyCheckAlt,
  GiPayMoney,
  FaStamp,
  FaClipboardList,
  GiReceiveMoney,
  FaCarSide,
  GiSteeringWheel,
];

function Services() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 text-slate-900 dark:text-slate-100">
      <SectionHeader
        eyebrow={t.nav.services}
        title={t.services.title}
        subtitle=""
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.list.map((item, idx) => (
          <ServiceCard
            key={item.title}
            icon={iconMap[idx % iconMap.length]}
            title={item.title}
            desc={item.desc}
            delay={idx * 0.05}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
