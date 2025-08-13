import React from "react";
import "../../styles/floatingbubble.css";

export default function floatingBubble(props) {
  return <div className={`position-absolute  ${props.class} bubble`}></div>;
}
