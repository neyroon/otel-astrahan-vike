import { PickHouse } from "@components/pick-house";
import { Section } from "@components/section";
import pickHouseImage from "../assets/pick-house-image.webp";

export const PickHouseBlock = () => {
  return (
    <Section>
      <PickHouse imageLink={pickHouseImage} />
    </Section>
  );
};
