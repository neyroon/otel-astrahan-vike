import { Breadcrumbs } from "@components/breadcrumbs";
import breadcrumbsImage from "../../fishing/assets/water.webp";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="О нашей базе"
      imageLink1x={breadcrumbsImage}
      imageLink2x={breadcrumbsImage}
    />
  );
};
