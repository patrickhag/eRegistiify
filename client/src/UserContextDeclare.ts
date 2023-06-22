import { createContext } from "react";
import { User } from "./UserContext";

export const userContext = createContext<{
  userInfo: User | undefined;
  setUserInfo:
    | React.Dispatch<React.SetStateAction<User | undefined>>
    | undefined;
}>({
  userInfo: {
    id: undefined,
    status: undefined,
    email: undefined,
  },
  setUserInfo: null,
});
