import Property from "./Property/Property.tsx";
import Corner from "./Corner/Corner.tsx";

type tileType = "P" | "CORNER";
type TileProps = {
  type: tileType;
  name?: string;
};
function Tile({ type, name }: TileProps) {
  const createTile = (type: tileType, name?: string) => {
    switch (type) {
      case "P":
        return (
          <div className="property">
            <Property name={name}></Property>
          </div>
        );
      case "CORNER":
        return (
          <div className="corner">
            <Corner></Corner>
          </div>
        );
      default:
        return <span>{name}</span>;
    }
  };

  return createTile(type, name);
}

export default Tile;
