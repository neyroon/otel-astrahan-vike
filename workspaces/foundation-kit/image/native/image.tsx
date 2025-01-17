import { FunctionComponent } from "react";
import Parallax from "simple-parallax-js";
import { Image, Picture, Source } from "./image.styles";
import { LinkToImage, NativeImageProps } from "./types";

export const NativeImage: FunctionComponent<NativeImageProps> = ({
  className,
  sources,
  src,
  ...attr
}) => {
  if (src) {
    return (
      <Parallax scale={1.5}>
        <Image loading="lazy" className={className} src={src} {...attr} />
      </Parallax>
    );
  }

  if (sources && sources.length <= 1 && sources.length > 0) {
    return (
      <Parallax scale={1.5}>
        <Image
          loading="lazy"
          className={className}
          src={sources[0]}
          {...attr}
        />
      </Parallax>
    );
  }

  if (sources) {
    const sourceSet = sources.map(
      (source: LinkToImage, idx) => `${source} ${idx + 1}x`
    );

    return (
      <Picture className={className}>
        <Source srcSet={sourceSet.join(",")} />
        <Image
          loading="lazy"
          src={sources[0] || sources[1]}
          alt="Фон"
          {...attr}
        />
      </Picture>
    );
  }

  return <Image loading="lazy" className={className} {...attr} />;
};

export default NativeImage;
