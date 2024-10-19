import { useNavigate } from "react-router-dom";
import MySimpleButton from "../../MySimpleButton";

export default function Play() {
  const navigate = useNavigate();

  return (
    <>
      <MySimpleButton
        onClick={() => {
          navigate("/game");
        }}
        text="Graj"
      />
    </>
  );
}
