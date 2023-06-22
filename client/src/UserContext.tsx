import { useState } from "react";
import { userContext } from "./UserContextDeclare";

export type User = {
  status?: string;
  email?: string;
  id?: string;
};
export function UserContextProvider({ children }: { children: JSX.Element }) {
  const [userInfo, setUserInfo] = useState<User>();
  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
}
