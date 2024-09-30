import { useEffect, useState } from "react";
import "./App.css";

interface Field {
  id: number;
  name: string;
  orderNumber: number;
}
function App() {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    console.log("fetchFields");
    const fetchFields = async () => {
      const response = await fetch("http://localhost:80/fields");
      const fields = (await response.json()) as Field[];
      setFields(fields);
    };

    fetchFields();
  }, []);

  //TODO: Przerobić z wykorzystaniem stałych typu render(BOTTOM_ROW)
  const renderFields = (from: number, to: number, reversed: boolean) => {
    const fieldsToRender = [];

    for (let i = from; i < to; i++) {
      const field = fields.find((field) => field.orderNumber == i);
      if (field) {
        fieldsToRender.push(
          <div>
            {field.orderNumber} {field.name}
          </div>
        );
      }
    }
    return <>{reversed ? fieldsToRender.reverse() : fieldsToRender}</>;
  };
  return (
    <>
      <div className="left">
        <p>left</p>
      </div>

      <div className="right">right</div>

      <div className="center">
        <div className="board">
          <div className="corner">
            <div>21</div>
          </div>

          <div className="row row-horizontal row-bottom">
            {renderFields(2, 11, true)}
          </div>
          <div className="corner">
            <div>31</div>
          </div>
          <div className="row row-vertical row-left">
            {renderFields(12, 21, true)}
          </div>
          <div className="corner">
            <div>11</div>
          </div>
          <div className="row row-horizontal row-top">
            {renderFields(22, 31, false)}
          </div>
          <div className="corner">
            <div>1</div>
          </div>
          <div className="row row-vertical row-right">
            {renderFields(32, 41, false)}
          </div>
          <div className="board-center"></div>
        </div>
      </div>
    </>
  );
}

export default App;
