import React from "react";
import { Icon } from "antd";
import colors from "./colors";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.dark,
        marginTop: "5%"
      }}
    >
      <Icon type="loading" style={{ fontSize: 50, color: colors.pink }} spin />
    </div>
  );
};

export default Loader;
