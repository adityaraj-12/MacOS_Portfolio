import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "../store/window";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="preview p-4 bg-white max-h-[70vh] overflow-auto">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-auto object-contain" />
        ) : (
          <p className="text-sm text-gray-500">No image available</p>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;
