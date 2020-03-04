import React from "react";
import { motion } from "framer-motion";
import { User } from "./User/User";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC<{}> = () => {
  return (
    <>
      <motion.header
        initial={{ y: "-70px" }}
        animate={{ y: ["-70px", "0px"] }}
        transition={{ duration: 0.5 }}
        className="app-header-container"
      >
        <div className="app-header-content">
          <Logo />
          <Navigation />
          <User />
        </div>
      </motion.header>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        transition={{ delay: 0.5 }}
        className="app-header-stripe"
      />
    </>
  );
};
