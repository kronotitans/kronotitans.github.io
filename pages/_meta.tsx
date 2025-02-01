import { Globe, Home } from "lucide-react";
const iconStyle = {
  width: "1rem",
  display: "inline",
  verticalAlign: "-0.4rem",
};

const meta = {
  index: {
    title: (
      <>
        <Home style={iconStyle} /> Home
      </>
    ),
    type: "page",
  },
  whitepaper: {
    title: "Whitepaper",
    type: "page",
  },
  website: {
    title: (
      <>
        <Globe style={iconStyle} /> Website ↗
      </>
    ),
    type: "page",
    href: "https://kronotitans.com",
    newWindow: true,
  },
  twitter: {
    title: <>Twitter ↗</>,
    type: "page",
    href: "https://x.com/KronoTitans",
    newWindow: true,
  },
  telegram: {
    title: <>Telegram ↗</>,
    type: "page",
    href: "https://t.me/KronoTitansHQ",
    newWindow: true,
  },
  sponsors: {
    title: <>For Sponsors ↗</>,
    type: "page",
    href: "https://t.me/KVX_Sponsors",
    newWindow: true,
  },
};

export default meta;
