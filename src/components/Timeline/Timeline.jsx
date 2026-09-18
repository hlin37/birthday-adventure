// import React from "react";
// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Timeline.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function Timeline({ achievements }) {
//   const ref = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const track = ref.current.querySelector(".timeline-track");
//       const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

//       gsap.to(track, {
//         x: () => -getDistance(),
//         ease: "none",
//         scrollTrigger: {
//           trigger: ref.current,
//           pin: true,
//           scrub: 1,
//           end: () => `+=${getDistance() + window.innerHeight * 0.7}`,
//           invalidateOnRefresh: true
//         }
//       });
//     }, ref);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="timeline-section" ref={ref}>
//       <div className="timeline-intro">
//         <p className="eyebrow">Chapter two</p>
//         <h2>Look how far<br />you&apos;ve come.</h2>
//         <p>Every chapter is something worth celebrating.</p>
//       </div>

//       <div className="timeline-track">
//         <div className="timeline-line" />
//         {achievements.map((item, index) => (
//           <article className="achievement-card" key={`${item.year}-${index}`}>
//             <div className="achievement-photo">
//               <div className="placeholder"></div>
//               <img src={item.image} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} />
//             </div>
//             <div className="achievement-info">
//               <span>{item.year}</span>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline({ achievements }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = ref.current.querySelector(".timeline-track");
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          scrub: 1,
          end: () => `+=${getDistance() + window.innerHeight * 0.7}`,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-section" ref={ref}>
      <div className="timeline-intro">
        <p className="eyebrow">Chapter two</p>
        <h2>
          Look how far you have come.
        </h2>
        <p>Every chapter is something worth celebrating.</p>
      </div>

      <div className="timeline-track">
        <div className="timeline-line" />
        {achievements.map((item, index) => (
          <article
            className="achievement-card"
            key={`${item.year}-${index}`}
          >
            <div className="achievement-photo">
              <div className="placeholder"></div>
              <img
                src={item.image}
                alt=""
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="achievement-info">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}