// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./GiftSection.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function GiftSection({ gifts = [] }) {
//   const sectionRef = useRef(null);
//   const giftCardsRef = useRef([]);
//   const messageRefs = useRef([]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       giftCardsRef.current.forEach((card, index) => {
//         if (!card) return;

//         const photo = card.querySelector(".gift-photo");
//         const photoFrame = card.querySelector(".gift-photo-frame");
//         const caption = card.querySelector(".gift-caption");
//         const title = card.querySelector("h3");
//         const message = messageRefs.current[index];

//         /*
//          * ---------------------------------------------------------
//          * INITIAL STATE
//          * ---------------------------------------------------------
//          */

//         gsap.set(card, {
//           opacity: 0,
//           y: 100,
//           scale: 0.94,
//           rotate: index % 2 === 0 ? -1.5 : 1.5,
//         });

//         if (photo) {
//           gsap.set(photo, {
//             scale: 1.12,
//           });
//         }

//         if (photoFrame) {
//           gsap.set(photoFrame, {
//             opacity: 0,
//             y: 40,
//           });
//         }

//         if (caption) {
//           gsap.set(caption, {
//             opacity: 0,
//             y: 30,
//           });
//         }

//         if (title) {
//           gsap.set(title, {
//             opacity: 0,
//             y: 15,
//           });
//         }

//         /*
//          * ---------------------------------------------------------
//          * TYPEWRITER SETUP
//          * ---------------------------------------------------------
//          */

//         let messageText = "";

//         if (message) {
//           messageText = message.dataset.message || "";
//           message.textContent = "";
//         }

//         /*
//          * ---------------------------------------------------------
//          * SCROLL ANIMATION
//          * ---------------------------------------------------------
//          */

//         const revealTimeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: card,
//             start: "top 82%",
//             end: "top 45%",
//             toggleActions: "play none none reverse",
//             // markers: true,
//           },
//         });

//         revealTimeline
//           .to(card, {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             rotate: 0,
//             duration: 1.1,
//             ease: "power3.out",
//           })
//           .to(
//             photoFrame,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.8,
//               ease: "power2.out",
//             },
//             "-=0.75"
//           )
//           .to(
//             photo,
//             {
//               scale: 1,
//               duration: 1.4,
//               ease: "power2.out",
//             },
//             "-=0.8"
//           )
//           .to(
//             caption,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.7,
//               ease: "power2.out",
//             },
//             "-=0.65"
//           )
//           .to(
//             title,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.55,
//               ease: "power2.out",
//             },
//             "-=0.5"
//           );

//         /*
//          * ---------------------------------------------------------
//          * TYPEWRITER MESSAGE
//          * ---------------------------------------------------------
//          */

//         if (message && messageText) {
//           const typewriter = {
//             progress: 0,
//           };

//           revealTimeline.to(
//             typewriter,
//             {
//               progress: messageText.length,
//               duration: Math.max(messageText.length * 0.045, 0.8),
//               ease: "none",

//               onUpdate: () => {
//                 const characterCount = Math.floor(typewriter.progress);

//                 message.textContent = messageText.slice(
//                   0,
//                   characterCount
//                 );
//               },
//             },
//             "-=0.2"
//           );
//         }

//         /*
//          * ---------------------------------------------------------
//          * SUBTLE IMAGE FLOATING EFFECT
//          * ---------------------------------------------------------
//          */

//         if (photo) {
//           gsap.to(photo, {
//             y: -6,
//             duration: 3.5,
//             ease: "sine.inOut",
//             repeat: -1,
//             yoyo: true,
//             delay: index * 0.15,
//           });
//         }

//         /*
//          * ---------------------------------------------------------
//          * HOVER EFFECT
//          * ---------------------------------------------------------
//          */

//         const handleEnter = () => {
//           gsap.to(card, {
//             y: -8,
//             scale: 1.015,
//             duration: 0.45,
//             ease: "power2.out",
//           });

//           if (photo) {
//             gsap.to(photo, {
//               scale: 1.045,
//               duration: 0.6,
//               ease: "power2.out",
//             });
//           }
//         };

//         const handleLeave = () => {
//           gsap.to(card, {
//             y: 0,
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out",
//           });

//           if (photo) {
//             gsap.to(photo, {
//               scale: 1,
//               duration: 0.7,
//               ease: "power2.out",
//             });
//           }
//         };

//         card.addEventListener("mouseenter", handleEnter);
//         card.addEventListener("mouseleave", handleLeave);

//         /*
//          * Cleanup hover listeners when component unmounts.
//          */

//         return () => {
//           card.removeEventListener("mouseenter", handleEnter);
//           card.removeEventListener("mouseleave", handleLeave);
//         };
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [gifts]);

//   return (
//     <section
//       className="gift-section"
//       id="memories"
//       ref={sectionRef}
//     >
//       {/* Section introduction */}

//       <div className="gift-section-header">
//         <span className="gift-eyebrow">
//           A little collection of gifts
//         </span>

//         <h2>Your Little Presents</h2>

//         <p>
//           Every picture has a story.
//           <br />
//           And every story comes with a memory 💜
//         </p>
//       </div>

//       {/* Photo / memory collection */}

//       <div className="gift-grid">
//         {gifts.map((gift, index) => (
//           <article
//             className={`gift-card gift-card-${
//               gift.layout || "landscape"
//             }`}
//             key={gift.id || index}
//             ref={(element) => {
//               giftCardsRef.current[index] = element;
//             }}
//           >
//             {/* Photo */}

//             <div className="gift-photo-frame">
//               <img
//                 src={gift.image}
//                 alt={gift.title || `Memory ${index + 1}`}
//                 className="gift-photo"
//               />
//             </div>

//             {/* Caption */}

//             <div className="gift-caption">
//               <span className="gift-number">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               {gift.title && <h3>{gift.title}</h3>}

//               {gift.description && (
//                 <p>{gift.description}</p>
//               )}

//               {/* Animated message from gifts.js */}

//               {gift.message && (
//                 <p
//                   className="gift-message"
//                   ref={(element) => {
//                     messageRefs.current[index] = element;
//                   }}
//                   data-message={gift.message}
//                   aria-label={gift.message}
//                 />
//               )}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GiftSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function GiftSection({ gifts = [] }) {
  const sectionRef = useRef(null);
  const giftCardsRef = useRef([]);
  const messageRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      giftCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const photo = card.querySelector(".gift-photo");
        const photoFrame = card.querySelector(".gift-photo-frame");
        const caption = card.querySelector(".gift-caption");
        const title = card.querySelector("h3");
        const message = messageRefs.current[index];

        gsap.set(card, {
          opacity: 0,
          y: 100,
          scale: 0.94,
          rotate: index % 2 === 0 ? -1.5 : 1.5,
        });

        if (photo) {
          gsap.set(photo, {
            scale: 1.12,
          });
        }

        if (photoFrame) {
          gsap.set(photoFrame, {
            opacity: 0,
            y: 40,
          });
        }

        if (caption) {
          gsap.set(caption, {
            opacity: 0,
            y: 30,
          });
        }

        if (title) {
          gsap.set(title, {
            opacity: 0,
            y: 15,
          });
        }

        let messageText = "";

        if (message) {
          messageText = message.dataset.message || "";
          message.textContent = "";
        }

        const revealTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
        });

        revealTimeline
          .to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.1,
            ease: "power3.out",
          })
          .to(
            photoFrame,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.75"
          )
          .to(
            photo,
            {
              scale: 1,
              duration: 1.4,
              ease: "power2.out",
            },
            "-=0.8"
          )
          .to(
            caption,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.65"
          )
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.5"
          );

        if (message && messageText) {
          const typewriter = {
            progress: 0,
          };

          revealTimeline.to(
            typewriter,
            {
              progress: messageText.length,
              duration: Math.max(messageText.length * 0.045, 0.8),
              ease: "none",

              onUpdate: () => {
                const characterCount = Math.floor(typewriter.progress);

                message.textContent = messageText.slice(
                  0,
                  characterCount
                );
              },
            },
            "-=0.2"
          );
        }

        if (photo) {
          gsap.to(photo, {
            y: -6,
            duration: 3.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.15,
          });
        }

        const handleEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.015,
            duration: 0.45,
            ease: "power2.out",
          });

          if (photo) {
            gsap.to(photo, {
              scale: 1.045,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });

          if (photo) {
            gsap.to(photo, {
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gifts]);

  return (
    <section className="gift-section" id="memories" ref={sectionRef}>
      <div className="gift-section-header">
        <span className="gift-eyebrow">
          A little collection of gifts
        </span>

        <h2>Your Little Presents</h2>

        <p>
          Every picture has a story.
          <br />
          And every story comes with a memory 💜
        </p>
      </div>

      <div className="gift-grid">
        {gifts.map((gift, index) => (
          <article
            className={`gift-card gift-card-${
              gift.layout || "landscape"
            }`}
            key={gift.id || index}
            ref={(element) => {
              giftCardsRef.current[index] = element;
            }}
          >
            <div className="gift-photo-frame">
              <img
                src={gift.image}
                alt={gift.title || `Memory ${index + 1}`}
                className="gift-photo"
              />
            </div>

            <div className="gift-caption">
              <span className="gift-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {gift.title && <h3>{gift.title}</h3>}

              {gift.description && (
                <p>{gift.description}</p>
              )}

              {gift.message && (
                <p
                  className="gift-message"
                  ref={(element) => {
                    messageRefs.current[index] = element;
                  }}
                  data-message={gift.message}
                  aria-label={gift.message}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}