import React, { useState } from "react";
import { motion } from "framer-motion";

import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { getClassNames } from "lib/getClassNames";

export const ActionBoxContainer: React.FC<{}> = () => {
  const [cta, setCta] = useState<"signUp" | "logIn">("signUp");

  const signUpButtonClassNames = getClassNames({
    "home-page-hero-cta-switch-button": {
      active: cta === "signUp",
    },
  });
  const logInButtonClassNames = getClassNames({
    "home-page-hero-cta-switch-button": {
      active: cta === "logIn",
    },
  });

  return (
    <motion.div
      className="home-page-hero-cta-area"
      animate={{ opacity: [0, 1] }}
    >
      <div className="home-page-hero-cta-switch">
        <div
          className={signUpButtonClassNames}
          onClick={() => setCta("signUp")}
        >
          Sign Up
        </div>
        <div className={logInButtonClassNames} onClick={() => setCta("logIn")}>
          Log In
        </div>
      </div>
      {cta === "signUp" ? <SignUp /> : <LogIn />}
    </motion.div>
  );
};
