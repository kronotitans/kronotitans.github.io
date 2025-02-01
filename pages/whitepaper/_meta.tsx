import { Gamepad2, BookOpen, Scale, Share2, Map, Coins } from "lucide-react";

const iconStyle = {
  width: "1rem",
  display: "inline",
};

const meta = {
  introduction: {
    title: (
      <>
        <BookOpen style={iconStyle} /> &nbsp; Introduction
      </>
    ),
  },
  "game-concept": {
    title: (
      <>
        <Gamepad2 style={iconStyle} /> &nbsp; Game Concept
      </>
    ),
  },
  "legal-disclaimer": {
    title: (
      <>
        <Scale style={iconStyle} /> &nbsp; Legal Disclaimer
      </>
    ),
  },
  "official-channels": {
    title: (
      <>
        <Share2 style={iconStyle} /> &nbsp; Official Channels
      </>
    ),
  },
  roadmap: {
    title: (
      <>
        <Map style={iconStyle} /> &nbsp; Roadmap
      </>
    ),
  },
  tokenomics: {
    title: (
      <>
        <Coins style={iconStyle} /> &nbsp; Tokenomics
      </>
    ),
  },
};

export default meta;
