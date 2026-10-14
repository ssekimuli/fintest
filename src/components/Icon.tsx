import { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "building"
  | "calculator"
  | "check"
  | "document"
  | "download"
  | "eye"
  | "headset"
  | "instagram"
  | "ledger"
  | "mail"
  | "menu"
  | "phone"
  | "pin"
  | "shield"
  | "target";

export const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  eye: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4M8 9h1m6 0h1M8 13h1m6 0h1M2 21h20" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  document: (
    <>
      <path d="M6 2h8l4 4v16H6zM14 2v5h5" />
      <path d="M9 13h6M9 17h6M9 9h1" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1zM20 14h-3v6h2a1 1 0 0 0 1-1z" />
      <path d="M17 20c0 1.1-2.2 2-5 2" />
    </>
  ),
  ledger: (
    <>
      <path d="M4 4h16v16H4zM8 2v4M16 2v4M4 9h16" />
      <path d="M8 13h3M8 17h8M15 13h1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C9.7 20.5 3.5 14.3 3 6a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.8 3.2 8 7.5 9.5 4.3-1.5 7.5-4.7 7.5-9.5V6z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3M21 12h-3M12 21v-3M3 12h3" />
    </>
  ),
};

export default function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}
