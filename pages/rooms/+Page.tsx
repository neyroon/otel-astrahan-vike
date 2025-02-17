import { AdressBlock } from "../index/blocks/adress-block";
import { FooterBlock } from "../index/blocks/footer-block";
import { HeaderBlock } from "../index/blocks/header-block";
import { ReviewsBlock } from "../index/blocks/reviews-block";
import { BannerStaticBlock } from "./blocks/banner-static-block";
import { BreadcrumbsBlock } from "./blocks/breadcrumbs-block";
import { RoomsBigBlock } from "./blocks/rooms-big-block";
import { RoomsSmallBlock } from "./blocks/rooms-small-block";

export default Page;

function Page() {
  return (
    <>
      <HeaderBlock />
      <BreadcrumbsBlock />
      <RoomsBigBlock />
      <BannerStaticBlock />
      {/* <RoomsSmallBlock /> */}
      <AdressBlock />
      <ReviewsBlock />
      <FooterBlock />
    </>
  );
}
