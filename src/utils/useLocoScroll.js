import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.07,
      multiplier: 1,
      class: "is-reveal"
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [start]);
}
