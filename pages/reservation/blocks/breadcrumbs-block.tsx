import { Breadcrumbs } from "@components/breadcrumbs";
import breadcrumbsImage from "../../about/assets/breadcrumbs-image.webp";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="Онлайн бронирование"
      imageLink1x={breadcrumbsImage}
      imageLink2x={breadcrumbsImage}
    />
  );
};
