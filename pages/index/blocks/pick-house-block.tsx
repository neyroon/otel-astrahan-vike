import { PickHouse } from "@components/pick-house";
import { Section } from "@components/section";
import pickHouseImage from "../assets/pick-house-image.webp";

export const PickHouseBlock = () => {
  return (
    <Section title="Выберите дом на генплане">
      <PickHouse imageLink={pickHouseImage} />
    </Section>
  );
};
