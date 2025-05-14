import { ReactNode } from "react";

type Props2 = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header1({ image, children }: Props2) {
  return (
    <header>
      <img {...image} />
      {/* <img src={image.src} alt={image.alt} /> */}
      <p>{children}</p>
    </header>
  );
}
