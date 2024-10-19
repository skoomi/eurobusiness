import { useAuthService } from "../../../services/AuthService";
import MySimpleButton from "../../MySimpleButton";

export default function Logout() {
  const { logout } = useAuthService();

  return (
    <>
      <MySimpleButton
        onClick={() => {
          logout();
        }}
        text="Wyloguj się"
      />
    </>
  );
}
