import { AdressBlock } from "../index/blocks/adress-block";
import { FooterBlock } from "../index/blocks/footer-block";
import { HeaderBlock } from "../index/blocks/header-block";
import { BreadcrumbsBlock } from "./blocks/breadcrumbs-block";
import { ReservationWidgetBlock } from "./blocks/reservation-widget-block";

export default Page;

function Page() {
  return (
    <>
      <HeaderBlock />
      <BreadcrumbsBlock />
      <ReservationWidgetBlock />
      <AdressBlock />
      <FooterBlock />
    </>
  );
}
