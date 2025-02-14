import { Breadcrumbs } from "@components/breadcrumbs";
import breadcrumbsImage1x from "../../fishing/assets/water.webp";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="Аренда лодок"
      imageLink1x={breadcrumbsImage1x}
      imageLink2x={breadcrumbsImage1x}
    />
  );
};
