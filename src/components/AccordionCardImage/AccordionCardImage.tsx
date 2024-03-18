import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface AccordionCardImageProps {
  img: string;
  name: string;
  hashUrl: string;
  hasUrl: string;
}

const AccordionCardImage = ({
  img,
  name,
  hashUrl,
  hasUrl,
}: AccordionCardImageProps): React.ReactElement => {
  const [loadedImage, setLoadedImage] = useState(false);

  useEffect(() => {
    const jsImg = new Image();
    jsImg.onload = () => {
      setLoadedImage(true);
    };
    jsImg.src = img;
  }, [img]);

  const urlStyles: { [key: string]: string } = {
    true: "aspect-video transition-all object-center object-cover",
    false: "aspect-video transition-all object-center object-cover row-end-1",
  };

  return (
    <div className="h-full block aspect-video">
      <Blurhash
        style={{
          display: loadedImage ? "none" : "block",
          opacity: loadedImage ? "0" : "1",
          aspectRatio: "initial",
          transition: "opacity 0.5, display 0.5s",
        }}
        className={urlStyles[hasUrl]}
        hash={hashUrl}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <img
        style={{
          display: loadedImage ? "block" : "none",
          transition: "opacity 0.5, display 0.5s",
        }}
        src={img}
        loading="lazy"
        alt={`${name} preview with link`}
        className={urlStyles[hasUrl]}
      />
    </div>
  );
};

export default AccordionCardImage;
