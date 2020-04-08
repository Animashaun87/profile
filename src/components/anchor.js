import React from "react";
import { Icon } from "antd";
import colors from "../utils/colors";

function Anchor() {
  return (
    <>
      <a
        href="http://github.com/animashaun87"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          type="github"
          style={{
            fontSize: 25,
            color: colors.dark
          }}
        />
      </a>
      <a
        href="http://medium.com/@animashaunbidemi07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          type="medium"
          style={{
            fontSize: 25,
            paddingLeft: 20,
            color: colors.dark
          }}
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          type="twitter"
          style={{
            fontSize: 25,
            paddingLeft: 20,
            color: colors.dark
          }}
        />
      </a>
    </>
  );
}

export default Anchor;
