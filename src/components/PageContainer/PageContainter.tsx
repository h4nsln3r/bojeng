import * as React from "react";
import { useState } from "react";
import Page from "../Page/Page";

import "./pagecontainer.scss";

export interface Props {
  children: React.ReactNode;
  direction: string;
  width?: number;
  translate: any;
}

export default ({ direction, children, width, translate }: Props) => {
  return (
    <div
      style={{
        width: `${width && width}px`,
        transform: `translateX(-${translate}px)`,
      }}
      className={`pagecontainer pagecontainer--${direction}`}
    >
      {children}
    </div>
  );
};
