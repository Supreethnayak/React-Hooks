import { useContext } from "react";
import { userInfoContext, userRoleContext } from "../App";
export default function ComponentE() {
  const user = useContext(userInfoContext);
  const role = useContext(userRoleContext);
  return (
    <>
      <h1>
        name is {user}, user role is {role}
      </h1>
    </>
  );
}
