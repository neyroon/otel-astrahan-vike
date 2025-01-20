import { AboutBlock } from "./blocks/about-block";
import { AccommodationBlock } from "./blocks/accommodation-block";
import { AdressBlock } from "./blocks/adress-block";
import { FooterBlock } from "./blocks/footer-block";
import { HeaderBlock } from "./blocks/header-block";
import { PickHouseBlock } from "./blocks/pick-house-block";
import { PosterBlock } from "./blocks/poster-block";
import { ReservationBlock } from "./blocks/reservation-block";
import { ReviewsBlock } from "./blocks/reviews-block";
import { ServiceBlock } from "./blocks/service-block";
import { SpecialBlock } from "./blocks/special-block";

export default Page;

function Page() {
  return (
    <>
      <HeaderBlock />
      <ReservationBlock />
      <AboutBlock />
      <AccommodationBlock />
      <ServiceBlock />
      <PickHouseBlock />
      <SpecialBlock />
      <PosterBlock />
      <AdressBlock />
      <ReviewsBlock />
      <FooterBlock />
      {/* <StubBlock /> */}
    </>
  );
}
