import { CardService } from "@components/card-service";
import { CardServiceLayout } from "@components/card-service-layout";
import { Section } from "@components/section";
import cardService1 from "../assets/card-service-1.webp";
import cardService2 from "../assets/card-service-2.webp";
import cardService3 from "../assets/card-service-3.webp";
import cardService4 from "../assets/card-service-4.webp";

export const ServiceBlock = () => {
  return (
    <Section title="Услуги">
      <CardServiceLayout>
        <CardService
          imageLink1x={cardService1}
          imageLink2x={cardService1}
          title="Охота"
          // subtitle="Вы сможете поохотиться на фазанов, уток, гусей, косуль и кабанов"
          subtitle="Вы сможете поохотиться"
        />
        <CardService
          imageLink1x={cardService2}
          imageLink2x={cardService2}
          title="Рыбалка"
          subtitle="Здесь вы сможете поймать трофейные экземпляры и насладиться красотой природы"
        />
        <CardService
          imageLink1x={cardService3}
          imageLink2x={cardService3}
          title="Аренда лодок"
          subtitle="Мы предлагает Вам современные лодки для комфортных прогулок по реке."
        />
        <CardService
          imageLink1x={cardService4}
          imageLink2x={cardService4}
          title="Романтический отдых"
          subtitle="погрузитесь в атмосферу романтики и спокойствия, которую мы создадим специально для вас!"
        />
      </CardServiceLayout>
    </Section>
  );
};
