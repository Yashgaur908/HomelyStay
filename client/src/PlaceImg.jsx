import { config } from "./App";
const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }

  return (
    <img
      src={`${config.backend}/` + place.photos[index]}
      alt="photos"
      className={className}
    />
  );
};

export default PlaceImg;
