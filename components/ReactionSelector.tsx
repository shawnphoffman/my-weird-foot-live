import React from "react";
import walter from "./images/walter.png";
import foot from "./images/foot.png";
import bologna from "./images/bologna_basic.png";
import brick from "./images/brick.png";
import finn from "./images/finn.png";
import high_potion from "./images/high_potion.png";
import jetli from "./images/jetli.png";
import luna from "./images/luna.png";
import mushu from "./images/mushu.png";
import worm from "./images/worm.png";
import walter_jam from "./images/Animated/walter_jam.gif";
import { StaticImageData } from "next/image";

type Props = {
  setReaction: (reaction: string) => void;
};

export default function ReactionSelector({ setReaction }: Props) {
  const styles = {
    boxShadow:
      "0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  return (
    <div
      className="px-2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full"
      style={styles}
      onPointerMove={(e) => e.stopPropagation()}
    >
      <ReactionButton reaction="👍" onSelect={setReaction} />
      <ReactionButton reaction="🔥" onSelect={setReaction} />
      {/* <ReactionButton reaction="😍" onSelect={setReaction} /> */}
      {/* <ReactionButton reaction="👀" onSelect={setReaction} /> */}
      {/* <ReactionButton reaction="😱" onSelect={setReaction} /> */}
      {/* <ReactionButton reaction="🙁" onSelect={setReaction} /> */}
      <ImageButton image={walter} onSelect={setReaction} />
      <ImageButton image={foot} onSelect={setReaction} />
      <ImageButton image={bologna} onSelect={setReaction} />
      <ImageButton image={brick} onSelect={setReaction} />
      <ImageButton image={finn} onSelect={setReaction} />
      <ImageButton image={high_potion} onSelect={setReaction} />
      <ImageButton image={jetli} onSelect={setReaction} />
      <ImageButton image={luna} onSelect={setReaction} />
      <ImageButton image={mushu} onSelect={setReaction} />
      <ImageButton image={worm} onSelect={setReaction} />
      <ImageButton image={walter_jam} onSelect={setReaction} />
    </div>
  );
}

type ReactionButtonProps = {
  reaction: string;
  onSelect: (reaction: string) => void;
};

function ReactionButton({ reaction, onSelect }: ReactionButtonProps) {
  return (
    <button
      className="p-2 text-xl transition-transform transform select-none hover:scale-150 focus:scale-150 focus:outline-none"
      onPointerDown={() => onSelect(reaction)}
    >
      {reaction}
    </button>
  );
}

type ImageButtonProps = {
  image: StaticImageData;
  onSelect: (reaction: string) => void;
};

function ImageButton({ image, onSelect }: ImageButtonProps) {
  return (
    <button
      className="p-2 text-xl transition-transform transform select-none hover:scale-150 focus:scale-150 focus:outline-none"
      onPointerDown={() => onSelect(image.src)}
    >
      <img className="w-4 h-4" src={image.src} alt="" />
    </button>
  );
}
