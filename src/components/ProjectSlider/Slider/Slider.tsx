import * as React from "react";
import { useState } from "react";
import Page from "../../Page/Page";
import PageContainter from "../../PageContainer/PageContainter";

import "./slider.scss";

export interface Props {
  children?: React.ReactNode;
  width?: number;
}

export default ({ children, width }: Props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth() * 2,
    transition: 0.65,
  });

  const { translate, transition, activeSlide } = state;

  //   const firstSlide = activeSlide === 0;
  //   const lastSlide = activeSlide === images.length - 1;

  const nextPage = () => {
    // setState({
    //   ...state,
    //   translate:
    //     activeSlide === images.length - 1
    //       ? 0 * getWidth()
    //       : (activeSlide + 1) * getWidth(),
    //   activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1,
    // });
  };

  const prevPage = () => {
    // setState({
    //   ...state,
    //   translate:
    //     activeSlide === 0
    //       ? (images.length - 1) * getWidth()
    //       : (activeSlide - 1) * getWidth(),
    //   activeSlide: activeSlide === 0 ? images.length - 1 : activeSlide - 1,
    // });
  };

  // const setPage = (dot: any) => {
  //   setState({
  //     ...state,
  //     translate: dot * getWidth(),
  //     activeSlide: dot,
  //   });
  // };

  const Pages = [
    {
      title: "Home",
      color: "green",
    },
    {
      title: "About",
      color: "blue",
    },
    {
      title: "Work",
      color: "gray",
    },
    {
      title: "Free",
      color: "yellow",
    },
  ];

  return (
    <div className={`slider`}>
      <PageContainter
        width={getWidth() * 3}
        translate={state.translate}
        direction="horizontal"
      >
        <Page width={getWidth()} title={"Test"} color="yellow" />
        <Page width={getWidth()} title={"Test"} color="purple" />
        <Page width={getWidth()} title={"Test"} color="gray" />
      </PageContainter>
    </div>
  );
};
