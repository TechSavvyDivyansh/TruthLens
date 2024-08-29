  "use client";
  import Image from "next/image";
  import React, { useEffect, useId, useRef, useState } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { useOutsideClick } from "./use-outside-click";

  const cards = [
      {
        title: "Tranquil Forest",
        description: "A serene daytime shot of a dense forest",
        src: "/assets/forest.jpg",
        ctaText: "Details",      
        content: () => {
          return (
            <>
            <p>
            The image exhibits natural lighting and shadow patterns consistent with real-world conditions.<br/> The tree density and foliage detail appear authentic, with no visible anomalies suggesting tampering.
            </p>
          </>
          );
        },
      },
    
      {
        title: "Enigmatic Night Forest",
        description: " A forest captured under the moonlight, shrouded in darkness",
        src: "/assets/nightforest.avif",
        ctaText: "Details",
        content: () => {
          return (
              <p>
              Inconsistent lighting sources, particularly around the tree edges, suggest digital manipulation.<br/> The moonlight appears unnaturally strong, casting unrealistic shadows, indicative of deepfake alterations.
            </p>
          );
        },
      },

      {
        title: "Majestic Peaks",
        description: "A towering mountain range basked in sunlight",
        src: "/assets/mountain.jpg",
        ctaText: "Details", 
        content: () => {
          return (
              <p>
                The image showcases natural geological formations with no pixelation or distortion. The interplay of light and shadow on the peaks is consistent with the sun’s position, confirming its authenticity.
            </p>
          );
        },
      },

      {
        title: "Serene Shoreline",
        description: "A peaceful beach with calm waves and clear skies",
        src: "/assets/beach.jpg",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                 Upon closer inspection, the wave patterns appear repetitive and lack the randomness of natural water movement. The sky’s gradient seems artificially smooth, hinting at digital enhancement.
            </p>
          );
        },
      },

      {
        title: "Rocky Ascent",
        description: "Another view of rugged mountains, with clouds hanging low",
        src: "/assets/mountain2.avif",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                 The atmospheric conditions and cloud formations align perfectly with the mountain’s contours. No discrepancies are found in the terrain, supporting the image’s genuineness.
            </p>
          );
        },
      },

      {
        title: "Cascading Waters",
        description: "A breathtaking waterfall in a lush green environment",
        src: "/assets/waterfall.jpg",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                The waterfall flow appears unnaturally consistent, lacking the natural variations in water speed and direction. The splash at the base shows signs of being looped, which is a typical deepfake signature.
            </p>
          );
        },
      },

      {
        title: "Journey Through Nature",
        description: "Scenic view captured during a road trip, with mountains in the background",
        src: "/assets/road trip.avif",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                The image reflects a natural, unaltered landscape. The perspective from the road aligns with typical travel photography, with no artifacts or signs of manipulation.
            </p>
          );
        },
      },

      {
        title: "Elephant in the Wild",
        description: "A close-up of an elephant in its natural habitat",
        src: "/assets/elephants.jpg",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                 The elephant’s skin texture appears overly smooth, and certain shadows on the body seem out of place. The background blurs unnaturally, suggesting that this is a composite image.
            </p>
          );
        },
      },
      {
        title: "Gentle Giant",
        description: "Another elephant, seen walking through the savanna",
        src: "/assets/elephants.jpg",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                The image captures natural animal behavior, with proper shadow casting and consistent lighting. The background elements blend seamlessly, confirming the authenticity of the shot.
            </p>
          );
        },
      },
      {
        title: "Endless Horizon",
        description: "Another road trip shot, highlighting the expansive landscape",
        src: "/assets/road trip.avif",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                 The scene’s composition and clarity suggest a genuine capture. The colors and shadows are natural, with no visual indicators of deepfake manipulation
            </p>
          );
        },
      },
      {
        title: "Open Road Adventure",
        description: "A view from the car during a road trip, capturing the scenic landscape",
        src: "/assets/road trip.avif",
        ctaText: "Details",
        content: () => {
          return (
              <p>
                 The depth of field and perspective are consistent with authentic photography. The horizon and surrounding elements display no signs of distortion or digital tampering.
            </p>
          );
        },
      },
      

    ];
    

  export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
      null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
      function onKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          setActive(false);
        }
      }

      if (active && typeof active === "object") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
      <div className="max-w-[800px] mx-auto overflow-hidden">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#15151584] h-full max-w-[100vw] z-10 backdrop-blur-xl"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center  z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="main-card w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-blue-800 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={400}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-[300px] object-cover"
                />
              </motion.div>

              <div className="max-w-[100vw]">
                <div className="flex justify-between items-start pt-4 px-4 pb-2">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.title}-${id}`}
                    onClick={() => setActive(null)} // Add this to collapse the card
                    className="px-5 py-2 text-sm rounded-lg font-bold bg-green-500 text-white"
                  >
                    Exit
                  </motion.button>
                </div>
                <div className="relative px-4 ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-60 pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400 remove-scrollbar"
                  >
                    {active.content()}
                    {/* Buttons */}
                    <div className="w-full flex gap-5 mt-4">
                      <button
                        className="px-4 bg-red-500 text-white rounded-md"
                        onClick={() => window.location.href = 'https://cybercrime.gov.in/Webform/cyber_suspect.aspx'}
                      >
                        Report
                      </button>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Download Media
                      </button>
                      <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
                        Delete Record
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(active === card ? null : card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-blue-800 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 hover:text-white text-white mt-4 md:mt-0"
            >
              {active === card ? "Exit" : card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};