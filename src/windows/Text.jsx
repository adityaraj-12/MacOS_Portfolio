import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
 
  return ( 
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6 bg-white">
        <div className="flex items-start gap-6">
          {image && (
            <img src={image} alt={name} className="w-28 h-28 object-cover rounded-md" />
          )}
          <div className="flex-1">
            {subtitle && <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>}

            <div className="space-y-3 text-sm text-gray-700">
              {Array.isArray(description) && description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
