import { Colors } from "@tokens";
import { FunctionalComponent } from "preact";
import { Size } from "../typography";
import { LinkBox } from "./link.styles";

/** Добавляет base URL (для GitHub Pages и т.п.) к внутренним путям вида /path */
export function withBase(href: string | undefined): string | undefined {
  if (href == null || typeof href !== "string") return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/";
  if (base === "/" || base === "") return href;
  const baseTrimmed = base.endsWith("/") ? base.slice(0, -1) : base;
  return baseTrimmed + href;
}

interface LinkProps {
  className?: string;
  size: Size;
  color?: Colors;
}

export const Link: FunctionalComponent<HTMLAnchorElement & LinkProps> = ({
  size,
  color = "content-primary",
  children,
  className,
  href,
  ...props
}) => {
  return (
    <LinkBox $size={size} $color={color} className={className} href={withBase(href)} {...props}>
      {children}
    </LinkBox>
  );
};
