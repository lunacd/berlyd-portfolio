/**
 * Made by Haowen Liu in 2021
 * Component for creating images that displays texts when hovered.
 */

import { getRemHeight, Height } from "../../utils/global_types";
import HoverableImage from "./HoverableImage";

interface HoverableImageListProps {
  images: string[];
  imagesHidden: string[];
  captions: string[];
  height: Height;
}

const HoverableImageList: React.FC<HoverableImageListProps> = (props) => {
  return (
    <div
      className={`h-auto md:${getRemHeight(
        props.height
      )} flex flex-col md:flex-row`}
    >
      {props.images.map((image, index) => (
        <div
          className={`flex-grow ${getRemHeight(
            props.height
          )} mx-16 mb-8 md:mx-0 md:mb-0 md:h-auto`}
          key={index}
        >
          <HoverableImage
            image={image}
            imageHidden={props.imagesHidden[index]}
            caption={props.captions[index]}
          ></HoverableImage>
        </div>
      ))}
    </div>
  );
};

export default HoverableImageList;
