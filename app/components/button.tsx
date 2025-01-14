import * as React from "react";

import styles from "./button.module.scss";

export function IconButton(props: {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "primary" | "second" | "danger";
  style?: object;
  text?: string;
  block?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={
        styles["icon-button"] +
        ` ${props.bordered && styles.border} ${props.shadow && styles.shadow} ${
          props.block && styles.block
        } ${props.className ?? ""} clickable ${styles[props.type ?? ""]}`
      }
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
      role="button"
      style={props.style}
    >
      {props.icon && (
        <div
          className={
            styles["icon-button-icon"] +
            ` ${props.type === "primary" && "no-dark"}`
          }
        >
          {props.icon}
        </div>
      )}

      {props.text && (
        <div className={styles["icon-button-text"]}>{props.text}</div>
      )}
    </button>
  );
}

// export function Button(props: {
//   onClick?: () => void;
// }) {
//   return (
//     <button>

//     </button>
//   )
// }
