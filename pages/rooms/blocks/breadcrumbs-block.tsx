import { Breadcrumbs } from "@components/breadcrumbs";
import {
  default as breadcrumbsImage1x,
  default as breadcrumbsImage2x,
} from "../assets/breadcrumbs-image.png";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="Каталог домов"
      imageLink1x={breadcrumbsImage1x}
      imageLink2x={breadcrumbsImage2x}
    />
  );
};
