import { Breadcrumbs } from "@components/breadcrumbs";
import breadcrumbsImage from "../assets/water.webp";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="Рыбалка"
      imageLink1x={breadcrumbsImage}
      imageLink2x={breadcrumbsImage}
    />
  );
};
