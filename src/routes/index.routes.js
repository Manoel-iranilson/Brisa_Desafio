import React, { useEffect, useState } from "react";
import { UseAuth } from "../contexts/Auth";
import AuthRoutes from "./Auth.Routes";
import TabsRoutes from "./TopTabs.routes";

const Routes = () => {
  const [isToken, setIsToken] = useState(false);
  const { token } = UseAuth();

  useEffect(() => {
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [token]);

  return isToken === true ? <TabsRoutes /> : <AuthRoutes />;
};

export default Routes;
