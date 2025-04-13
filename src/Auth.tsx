import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export const Auth = () => {
  return (
    <Authenticator signUpAttributes={["nickname"]}>
      {({ signOut, user }) => {
        return (
          <div>
            <UserDetails />
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => signOut?.()}>sign out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

const UserDetails = () => {
  const [nickName, setNickName] = useState<string>();

  useEffect(() => {
    async function getUserData() {
      const userData = await fetchUserAttributes();
      setNickName(userData.nickname);
    }

    getUserData();
  }, []);

  return (
    <div>
      <h1>Hello {nickName}</h1>
    </div>
  );
};
