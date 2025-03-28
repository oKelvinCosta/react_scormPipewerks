import React from "react";

export default function CssJavascript() {
  return <div style={styles.overlay}>teste</div>;
}
const styles = {
  overlay: {
    color: "blue",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid lightgray",
    borderTop: "5px solid blue",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#555",
  },
};
