import { PageContextProvider } from "./usePageContext";

export { PageShell };

const PageShell = function ({ children, pageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  );
};
