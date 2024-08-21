  "use client";
  import Image from "next/image";
  import React, { useEffect, useId, useRef, useState } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { useOutsideClick } from "./use-outside-click";

  const cards = [
      {
        description: "Date",
        title: "Topic",
        src: "",
        ctaText: "Details",      
        content: () => {
          return (
            <>
            <p>
              <br />Uploaded doc type<br />Deepfake type found (In depth details added) <br />Reported or not
              <br />Download media <br />Delete record
              <br />Uploaded doc type<br />Deepfake type found (In depth details added) <br />Reported or not
              <br />Download media <br />Delete record
            </p>
          </>
          );
        },
      },
    
      {
        description: "Date2",
        title: "Topic2",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
              Uploaded doc type<br />Deepfake type found (In depth details added) <br />Reported or not button
              <br />Download media button<br />Delete record button
            </p>
          );
        },
      },

      {
        description: "Date3",
        title: "Topic3",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
            </p>
          );
        },
      },

      {
        description: "Date4",
        title: "Topic4",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
            </p>
          );
        },
      },

      {
        description: "Date5",
        title: "Topic5",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
            </p>
          );
        },
      },

      {
        description: "Date6",
        title: "Topic6",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
            </p>
          );
        },
      },

      {
        description: "Date7",
        title: "Topic7",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
            </p>
          );
        },
      },

      {
        description: "Date8",
        title: "Topic8",
        src: "",
        ctaText: "Details",
        content: () => {
          return (
              <p>
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
      <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#00000098] h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
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
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-blue-800 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.title}-${id}`}
                    onClick={() => setActive(null)} // Add this to collapse the card
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Exit
                  </motion.button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-60 pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400"
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
      <ul className="max-w-2xl mx-auto w-full gap-4">
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
                  className="font-medium text-neutral-800 dark:text-white text-center md:text-left"
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
    </>
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