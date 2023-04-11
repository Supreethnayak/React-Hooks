import { userInfoContext } from "../App";
import { userRoleContext } from "../App";
export default function ComponentE() {
  return (
    <>
      <userInfoContext.Consumer>
        {(user) => {
          return (
            <userRoleContext.Consumer>
              {(role) => {
                return (
                  <h1>
                    user name is {user}, user role is {role}
                  </h1>
                );
              }}
            </userRoleContext.Consumer>
          );
        }}
      </userInfoContext.Consumer>
    </>
  );
}
