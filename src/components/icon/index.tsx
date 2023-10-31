// Ionic Icon component
import React from "react";
import { IonIcon } from "@ionic/react";
import { Color } from "@ionic/core";

import "./index.css";

interface IconProps {
  name: string;
  color?: Color;
  size?: "large" | "small";
  rounded?: boolean;
  style?: React.CSSProperties;
}

export const PuIcon: React.FC<IconProps> = ({
  name,
  color,
  size,
  rounded,
  style,
}) => {
  return (
    <div className={`pu-icon ${rounded && "rounded"}`} style={style}>
      <IonIcon size={size} color={color} icon={name}></IonIcon>
    </div>
  );
};
