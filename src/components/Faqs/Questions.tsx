"use client";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Accordion from "@/components/ui/Accordion";
import useIsMounted from "@/hooks/useIsMounted";


const accordionData = [
  {
    id: 2,
    title: "What is our mission?",
    content:
      "Our mission is to give every innovator and new creator access to the supportive and engaged community they need to get their business off the ground. For a new business, expanding their reach and customer base is vital to success. That is why Crumbs is social media and community focused. Giving a rewarding experience to both innovators and supporters as they get inspired by other users on the app. We are passionate about turning people's great ideas into products and getting them in the hands of people all over the world.",
  },
  {
    id: 5,
    title: "How does Crumbs support innovators ?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },

  {
    id: 3,
    title: "How much does it cost to use the Crumbs platform?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },

  {
    id: 6,
    title: "Who can use crumbs?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },

  {
    id: 1,
    title: "Who can start a campaign?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },

  {
    id: 4,
    title: "When will we launch?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },
  {
    id: 7,
    title: "What's the refund policy?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },
  {
    id: 8,
    title:
      "Do I need to hire a campaign manager or pay for ads along with my campaign?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque provident eaque, sequi autem voluptas.",
  },
];

const Questions = () => {
  const { isMounted } = useIsMounted();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  if (!isMounted) return null;

  const handleAccordionClick = (id: number) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <div className="overflow-hidden bg-primary  text-white ">
      <div className="relative flex items-center justify-between ">
        <div data-aos="fade-up">
          <h1 className="text-[32px] font-foghe font-normal text-graish  leading-[38.4px]  mb-4">
            Frequently asked questions
          </h1>
        </div>
      </div>

      <div
        className="mx-auto mt-[20px] max-w-7xl mob:w-full mob:px-[0px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 1 }}>
          <Masonry gutter="20px">
            {accordionData.map((accordion, index) => (
              <Accordion
                key={accordion.id}
                title={accordion.title}
                isActive={accordion.id === activeAccordion}
                onClick={() => handleAccordionClick(accordion.id)}
              >
                {accordion.content}
              </Accordion>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Questions;
