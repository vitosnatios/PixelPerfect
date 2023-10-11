"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import Button from "./Button";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("jwt", { sameSite: "none", secure: true });
    router.refresh();
  };
  return (
    <Button
      style={{
        width: "70px",
        background: "none",
      }}
      title="Sair"
      onClick={handleLogout}
    >
      <BiLogOut
        style={{
          color: "var(--primary-color)",
        }}
        size={30}
      />
    </Button>
  );
};

export default LogoutButton;
