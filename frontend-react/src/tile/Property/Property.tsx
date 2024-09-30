import styles from "./Property.module.css";

const colorMap: { [key: string]: string } = {
  Ateny: "yellow",
  Saloniki: "yellow",
  Madryt: "red",
  Sewilla: "red",
  // Add more name-color pairs as needed
};

type PropertyProps = {
  name?: string;
};
function Property({ name }: PropertyProps) {
  const backgroundColor = name ? colorMap[name] || "grey" : "grey";
  return (
    <div>
      <div
        className="border-solid border-b-4 border-black h-8 bg-orange-600"
        style={{ backgroundColor }}
      ></div>
      <div>{name}</div>
    </div>
  );
}
export default Property;
