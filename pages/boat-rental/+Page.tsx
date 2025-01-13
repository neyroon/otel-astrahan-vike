import { AdressBlock } from "../index/blocks/adress-block";
import { FooterBlock } from "../index/blocks/footer-block";
import { HeaderBlock } from "../index/blocks/header-block";
import { ReviewsBlock } from "../index/blocks/reviews-block";
import { BoatsSmallBlock } from "./blocks/boats-small-block";
import { BreadcrumbsBlock } from "./blocks/breadcrumbs-block";

export default Page;

function Page() {
  return (
    <>
      <HeaderBlock />
      <BreadcrumbsBlock />
      <BoatsSmallBlock />
      <AdressBlock />
      <ReviewsBlock />
      <FooterBlock />
    </>
  );
}
