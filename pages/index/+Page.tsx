export default Page;

import { Typography } from "../../workspaces/foundation-kit";
import { Counter } from "./Counter";

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Typography size="big-text">from typo</Typography>
        </li>
      </ul>
    </>
  );
}
