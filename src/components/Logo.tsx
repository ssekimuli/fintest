import type { CSSProperties, FC } from "react";
import logoImg from "../assets/logo.png";
import logoTransparentImg from "../assets/logo-transparent.png";

export interface LogoProps {
  /** Explicit height in pixels or CSS string (e.g. 54, '54px', '3.5rem') */
  height?: number | string;
  /** Explicit width in pixels or CSS string (e.g. 'auto', 180, '100%') */
  width?: number | string;
  /** Maximum height constraint (e.g. '100%', 80) */
  maxHeight?: number | string;
  /** Maximum width constraint */
  maxWidth?: number | string;
  /** Whether to use the transparent background version of the logo */
  transparent?: boolean;
  /**
   * Wrap with a subtle, clean white badge for optimal contrast on dark backgrounds
   * Default: true when light={true} or header/footer dark context
   */
  badge?: boolean;
  /** Light/dark variant flag for theme consistency */
  light?: boolean;
  /** Custom CSS classes for the outer wrapper/link */
  className?: string;
  /** Custom CSS classes directly on the img tag */
  imageClassName?: string;
  /** Custom inline style for the outer container */
  style?: CSSProperties;
  /** Custom inline style for the img element */
  imageStyle?: CSSProperties;
  /** Accessible alt text */
  alt?: string;
  /** Link destination (defaults to '/') */
  href?: string;
  /** Custom image source override if needed */
  src?: string;
}

const formatSize = (value?: number | string): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

export const Logo: FC<LogoProps> = ({
  height = 54,
  width = "auto",
  maxHeight,
  maxWidth = "100%",
  transparent = false,
  badge = true,
  light = false,
  className = "",
  imageClassName = "",
  style,
  imageStyle,
  alt = "Titanium Financial Consultancy Co. Ltd - Journey to Financial Freedom",
  href = "/",
  src,
}) => {
  const chosenSrc = src || (transparent ? logoTransparentImg : logoImg);

  const formattedHeight = formatSize(height);
  const formattedWidth = formatSize(width);
  const formattedMaxHeight = formatSize(maxHeight);
  const formattedMaxWidth = formatSize(maxWidth);

  const containerStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
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
    <a
      href={href}
      className={`logo ${badge ? "logo--badge" : ""} ${light ? "logo--light" : ""} ${className}`.trim()}
      style={containerStyles}
      aria-label={alt}
    >
      <div className={badge ? "logo__badge-wrapper" : "logo__image-wrapper"}>
        <img
          src={chosenSrc}
          alt={alt}
          className={`logo__image ${imageClassName}`.trim()}
          style={imgStyles}
          loading="eager"
        />
      </div>
    </a>
  );
};

export default Logo;
