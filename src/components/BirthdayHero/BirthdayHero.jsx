// // import React from "react";
// // import { useLayoutEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import "./BirthdayHero.css";

// // export default function BirthdayHero() {
// //   const ref = useRef(null);

// //   useLayoutEffect(() => {
// //     const ctx = gsap.context(() => {
// //       gsap.from(".hero-copy > *", {
// //         y: 30,
// //         opacity: 0,
// //         duration: 1.2,
// //         stagger: .15,
// //         ease: "power3.out"
// //       });
// //       gsap.to(".hero-orb", {
// //         y: -20,
// //         duration: 4,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: "sine.inOut"
// //       });
// //     }, ref);
// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section className="story-section birthday-hero" ref={ref}>
// //       <div className="hero-orb" />
// //       <div className="hero-copy">
// //         <p className="eyebrow">September 28</p>
// //         <h1>Happy Birthday,<br />my love.</h1>
// //         <p>A little adventure awaits.</p>
// //       </div>
// //       <div className="scroll-cue">keep going ↓</div>
// //     </section>
// //   );
// // }


// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./BirthdayHero.css";

// export default function BirthdayHero() {
//   const ref = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const photos = gsap.utils.toArray(".hero-photo");
//       const copy = gsap.utils.toArray(".hero-copy > *");

//       /*
//        * ---------------------------------------------------------
//        * INITIAL PHOTO STATE
//        * ---------------------------------------------------------
//        *
//        * Each side enters from a slightly different direction.
//        * The rotation makes the photos feel more organic rather
//        * than like a perfectly aligned slideshow.
//        */

//       gsap.set(photos, {
//         opacity: 0,
//         scale: 0.65,
//       });

//       gsap.set(".hero-photo-left-1", {
//         x: -180,
//         y: 40,
//         rotation: -12,
//       });

//       gsap.set(".hero-photo-left-2", {
//         x: -220,
//         y: -20,
//         rotation: 8,
//       });

//       gsap.set(".hero-photo-left-3", {
//         x: -170,
//         y: 30,
//         rotation: -6,
//       });

//       gsap.set(".hero-photo-right-1", {
//         x: 180,
//         y: 40,
//         rotation: 12,
//       });

//       gsap.set(".hero-photo-right-2", {
//         x: 220,
//         y: -20,
//         rotation: -8,
//       });

//       gsap.set(".hero-photo-right-3", {
//         x: 170,
//         y: 30,
//         rotation: 6,
//       });

//       /*
//        * ---------------------------------------------------------
//        * INITIAL TEXT STATE
//        * ---------------------------------------------------------
//        */

//       gsap.set(copy, {
//         opacity: 0,
//         y: 35,
//       });

//       /*
//        * ---------------------------------------------------------
//        * MAIN INTRO TIMELINE
//        * ---------------------------------------------------------
//        */

//       const tl = gsap.timeline();

//       /*
//        * PHOTOS FIRST
//        */

//       tl.to(photos, {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         rotation: 0,
//         duration: 1.25,
//         stagger: 0.13,
//         ease: "back.out(1.4)",
//       });

//       /*
//        * TEXT AFTER THE PHOTOS
//        */

//       tl.to(
//         ".hero-copy",
//         {
//           opacity: 1,
//           duration: 0.2,
//         },
//         "+=0.15"
//       );

//       tl.to(
//         ".hero-copy > *",
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.05,
//           stagger: 0.16,
//           ease: "power3.out",
//         },
//         "-=0.05"
//       );

//       /*
//        * ---------------------------------------------------------
//        * FLOATING ORB
//        * ---------------------------------------------------------
//        */

//       gsap.to(".hero-orb", {
//         y: -20,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       /*
//        * ---------------------------------------------------------
//        * SUBTLE PHOTO FLOAT
//        * ---------------------------------------------------------
//        *
//        * Once the entrance animation is complete, each photo
//        * gently moves independently.
//        */

//       photos.forEach((photo, index) => {
//         gsap.to(photo, {
//           y: index % 2 === 0 ? -7 : 7,
//           duration: 3 + index * 0.25,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           delay: 1.8 + index * 0.2,
//         });
//       });

//       /*
//        * ---------------------------------------------------------
//        * PHOTO HOVER
//        * ---------------------------------------------------------
//        */

//       photos.forEach((photo) => {
//         const image = photo.querySelector("img");

//         photo.addEventListener("mouseenter", () => {
//           gsap.to(photo, {
//             scale: 1.08,
//             rotation: 0,
//             duration: 0.4,
//             ease: "power2.out",
//           });

//           gsap.to(image, {
//             scale: 1.05,
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         });

//         photo.addEventListener("mouseleave", () => {
//           gsap.to(photo, {
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out",
//           });

//           gsap.to(image, {
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         });
//       });
//     }, ref);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className="story-section birthday-hero"
//       ref={ref}
//     >
//       <div className="hero-orb" />

//       {/* =====================================================
//           LEFT PHOTOS
//           ===================================================== */}

//       <div className="hero-photo hero-photo-left-1">
//         <img
//           src="/images/hero/photo1.jpg"
//           alt="Memory 1"
//         />
//       </div>

//       <div className="hero-photo hero-photo-left-2">
//         <img
//           src="/images/hero/photo2.jpg"
//           alt="Memory 2"
//         />
//       </div>

//       <div className="hero-photo hero-photo-left-3">
//         <img
//           src="/images/hero/photo3.jpg"
//           alt="Memory 3"
//         />
//       </div>

//       {/* =====================================================
//           CENTER TEXT
//           ===================================================== */}

//       <div className="hero-copy">
//         <p className="eyebrow">September 28</p>

//         <h1>
//           Happy Birthday,
//           <br />
//           my love.
//         </h1>

//         <p>
//           A little adventure awaits.
//         </p>
//       </div>

//       {/* =====================================================
//           RIGHT PHOTOS
//           ===================================================== */}

//       <div className="hero-photo hero-photo-right-1">
//         <img
//           src="/images/hero/photo4.jpg"
//           alt="Memory 4"
//         />
//       </div>

//       <div className="hero-photo hero-photo-right-2">
//         <img
//           src="/images/hero/photo5.jpg"
//           alt="Memory 5"
//         />
//       </div>

//       <div className="hero-photo hero-photo-right-3">
//         <img
//           src="/images/hero/photo6.jpg"
//           alt="Memory 6"
//         />
//       </div>

//       <div className="scroll-cue">
//         keep going ↓
//       </div>
//     </section>
//   );
// }

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BirthdayHero.css";

export default function BirthdayHero() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const photos = gsap.utils.toArray(".hero-photo");
      const copy = gsap.utils.toArray(".hero-copy > *");

      gsap.set(photos, {
        opacity: 0,
        scale: 0.65,
      });

      gsap.set(".hero-photo-left-1", {
        x: -180,
        y: 40,
        rotation: -12,
      });

      gsap.set(".hero-photo-left-2", {
        x: -220,
        y: -20,
        rotation: 8,
      });

      gsap.set(".hero-photo-left-3", {
        x: -170,
        y: 30,
        rotation: -6,
      });

      gsap.set(".hero-photo-right-1", {
        x: 180,
        y: 40,
        rotation: 12,
      });

      gsap.set(".hero-photo-right-2", {
        x: 220,
        y: -20,
        rotation: -8,
      });

      gsap.set(".hero-photo-right-3", {
        x: 170,
        y: 30,
        rotation: 6,
      });

      gsap.set(copy, {
        opacity: 0,
        y: 35,
      });

      const tl = gsap.timeline();

      tl.to(photos, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.25,
        stagger: 0.13,
        ease: "back.out(1.4)",
      });

      tl.to(
        ".hero-copy",
        {
          opacity: 1,
          duration: 0.2,
        },
        "+=0.15"
      );

      tl.to(
        ".hero-copy > *",
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.16,
          ease: "power3.out",
        },
        "-=0.05"
      );

      gsap.to(".hero-orb", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      photos.forEach((photo, index) => {
        gsap.to(photo, {
          y: index % 2 === 0 ? -7 : 7,
          duration: 3 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.8 + index * 0.2,
        });
      });

      photos.forEach((photo) => {
        const image = photo.querySelector("img");

        photo.addEventListener("mouseenter", () => {
          gsap.to(photo, {
            scale: 1.08,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        photo.addEventListener("mouseleave", () => {
          gsap.to(photo, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="story-section birthday-hero" ref={ref}>
      <div className="hero-orb" />

      <div className="hero-photo hero-photo-left-1">
        <img src="/images/hero/photo1.png" alt="Memory 1" />
      </div>

      <div className="hero-photo hero-photo-left-2">
        <img src="/images/hero/photo2.png" alt="Memory 2" />
      </div>

      <div className="hero-photo hero-photo-left-3">
        <img src="/images/hero/photo3.png" alt="Memory 3" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">September 28</p>

        <h1>
          Happy Birthday,
          <br />
          my love.
        </h1>

        <p>A little adventure awaits.</p>
        <p>A literal goddess in all your birthday pictures.</p>
      </div>

      <div className="hero-photo hero-photo-right-1">
        <img src="/images/hero/photo4.png" alt="Memory 4" />
      </div>

      <div className="hero-photo hero-photo-right-2">
        <img src="/images/hero/photo5.png" alt="Memory 5" />
      </div>

      <div className="hero-photo hero-photo-right-3">
        <img src="/images/hero/photo6.png" alt="Memory 6" />
      </div>

      <div className="scroll-cue">keep going ↓</div>
    </section>
  );
}
