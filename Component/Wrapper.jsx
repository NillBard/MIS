import { useEffect } from "react";
import { useAuthenticateMediaMutation } from "../store/media/mediaApi";
import { userApi } from "../store/user/userApi";

export default function Wrapper({ children }) {
  const [authMedia] = useAuthenticateMediaMutation();

  const authHandler = async () => {
    await authMedia();
  };

  useEffect(() => {
    authHandler();
  }, []);
  return <>{children}</>;
}
