import type { CSSProperties, FC } from "react";
import { Link } from "react-router";
import { LOGO_DARK_NAV, LOGO_LIGHT_BG } from "../assets/logoData";

export interface LogoProps {
  /** Explicit height in pixels or CSS string (e.g. 56, '56px', '3.5rem') */
  height?: number | string;
  /** Explicit width in pixels or CSS string (e.g. 'auto', 180, '100%') */
  width?: number | string;
  /** Maximum height constraint */
  maxHeight?: number | string;
  /** Maximum width constraint */
  maxWidth?: number | string;
  /**
   * Theme mode:
   * - 'dark' (default): For dark navbar and footer (crisp white typography on transparent bg)
   * - 'light': For light backgrounds (authentic dark navy typography on transparent bg)
   */
  theme?: "dark" | "light";
  /** Optional badge wrapper (default: false, renders seamless transparent logo) */
  badge?: boolean;
  /** Compatibility with light prop */
  light?: boolean;
  /** Custom CSS classes for the link wrapper */
  className?: string;
  /** Custom CSS classes directly on the img tag */
  imageClassName?: string;
  /** Custom inline style for the link wrapper */
  style?: CSSProperties;
  /** Custom inline style for the img element */
  imageStyle?: CSSProperties;
  /** Accessible alt text */
  alt?: string;
  /** Link destination (defaults to '/') */
  href?: string;
  /** Custom image source override if needed */
  src?: string;
  /** Responsive navigation support: switches to light-bg logo on mobile (<900px) */
  responsiveNav?: boolean;
}

const formatSize = (value?: number | string): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

export const Logo: FC<LogoProps> = ({
  height = 56,
  width = "auto",
  maxHeight,
  maxWidth = "100%",
  theme = "dark",
  badge = false,
  light = false,
  responsiveNav = false,
  className = "",
  imageClassName = "",
  style,
  imageStyle,
  alt = "Titanium Financial Consultancy",
  href = "/",
  src,
}) => {
  // Determine image source based on theme/props
  let chosenSrc = src;
  if (!chosenSrc) {
    if (theme === "light" && !light) {
      chosenSrc = LOGO_LIGHT_BG;
    } else {
      // Default to dark nav theme (crisp white typography, works on dark nav & dark footer)
      chosenSrc = LOGO_DARK_NAV;
    }
  }

  const formattedHeight = formatSize(height);
  const formattedWidth = formatSize(width);
  const formattedMaxHeight = formatSize(maxHeight);
  const formattedMaxWidth = formatSize(maxWidth);

  const containerStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    flexShrink: 0,
    ...style,
  };

  const imgStyles: CSSProperties = {
    height: formattedHeight,
    width: formattedWidth,
    maxHeight: formattedMaxHeight,
    maxWidth: formattedMaxWidth,
    objectFit: "contain",
    display: "block",
    ...imageStyle,
  };

  return (
    <Link
      to={href}
      className={`logo ${badge ? "logo--badge" : ""} ${className}`.trim()}
      style={containerStyles}
      aria-label="Titanium Financial Consultancy Co. Ltd - Journey to Financial Freedom"
    >
      {responsiveNav ? (
        <picture>
          <source media="(max-width: 900px)" srcSet={LOGO_LIGHT_BG} />
          <img
            src={chosenSrc}
            alt={alt}
            className={`logo__image ${imageClassName}`.trim()}
            style={imgStyles}
            loading="eager"
            decoding="sync"
          />
        </picture>
      ) : (
        <img
          src={chosenSrc}
          alt={alt}
          className={`logo__image ${imageClassName}`.trim()}
          style={imgStyles}
          loading="eager"
          decoding="sync"
        />
      )}
    </Link>
  );
};

export default Logo;
