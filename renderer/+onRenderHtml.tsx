// https://vike.dev/onRenderHtml
export default onRenderHtml;

import renderToString from "preact-render-to-string";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { cssFonts } from "../workspaces/fonts";
import { globalStyles } from "./globalStyles";
import logoUrl from "./logo.svg";
import { PageShell } from "./PageShell";

async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vike.dev/head
  const { documentProps } = pageContext;
  const title =
    (documentProps && documentProps.title) ||
    "Эко-отель River&Fish: база отдыха на Нижней Волге в Астраханской области";
  const desc =
    (documentProps && documentProps.description) ||
    "Официальный сайт парк-отеля River&Fish. Отдых с семьей и друзьями в живописных местах: рыбалка, охота, прогулки по лесу, прокат лодок, услуги егеря и т.д. Комфортабельные домики, чистый воздух и единение с природой.";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:title" content="${title}" />
        <title>${title}</title>
        <style type="text/css">${cssFonts}</style>
        <style type="text/css">${globalStyles}</style>
        
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
