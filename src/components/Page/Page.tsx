import * as React from "react";
import { useState } from "react";
import "./page.scss";

export interface Props {
  children?: React.ReactNode;
  title: string;
  color?: string;
  width?: number;
}

export default ({ width, children, color = "gray" }: Props) => {
  console.log("children", children);
  return (
    <div
      className="page"
      style={{ backgroundColor: `${color}`, width: `${width && width}px` }}
    >
      {children}
    </div>
  );
};
