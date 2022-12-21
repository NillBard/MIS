import { useEffect } from "react";
import { mediaApi } from "../store/media/mediaApi";
import { userApi } from "../store/user/userApi";

export default function Wrapper({ children }) {
  const [authUser] = userApi.useAuthenticateMutation();
  const [authMedia] = mediaApi.useAuthenticateMediaMutation();

  const authHandler = async () => {
    await authUser();
    await authMedia();
  };

  useEffect(() => {
    authHandler();
  }, []);
  return <>{children}</>;
}
