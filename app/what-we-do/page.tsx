import WhatWeDoHero from "@/components/sections/what-we-do/WhatWeDoHero";
import WhatWeDoServices from "@/components/sections/what-we-do/WhatWeDoServices";
import GlobalSummits from "@/components/sections/what-we-do/GlobalSummits";
import WhatWeDeliver from "@/components/sections/what-we-do/WhatWeDeliver";
import SummitProcess from "@/components/sections/what-we-do/SummitProcess";
import StrategicPartnerships from "@/components/sections/what-we-do/StrategicPartnerships";

export default function WhatWeDoPage() {
  return (
    <main className="bg-white text-navy">
      <WhatWeDoHero />

      <WhatWeDoServices />

      <GlobalSummits />

      <WhatWeDeliver />

      <SummitProcess />

      <StrategicPartnerships />
    </main>
  );
}