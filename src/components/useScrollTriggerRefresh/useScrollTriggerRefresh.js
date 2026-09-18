// useScrollTriggerRefresh.js
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollTriggerRefresh(deps = []) {
  useEffect(() => {
    let timer;

    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    };

    const images = Array.from(document.images);
    images.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", refresh);
      img.addEventListener("error", refresh);
    });

    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    refresh(); // catch anything already complete

    return () => {
      clearTimeout(timer);
      images.forEach((img) => {
        img.removeEventListener("load", refresh);
        img.removeEventListener("error", refresh);
      });
      window.removeEventListener("load", refresh);
    };
  }, deps);
}