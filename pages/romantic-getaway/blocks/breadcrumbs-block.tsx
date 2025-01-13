import { Breadcrumbs } from "@components/breadcrumbs";
import breadcrumbsImage from "../assets/breadcrumbs-image.jpeg";

export const BreadcrumbsBlock = () => {
  return (
    <Breadcrumbs
      currentPageText="Романтический отдых"
      imageLink1x={breadcrumbsImage}
      imageLink2x={breadcrumbsImage}
    />
  );
};
