"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "product design",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatibus aliquam soluta sequi, repellat rem fugit quibusdam dignissimos.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "asset - work 1 - png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frondend",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatibus aliquam soluta sequi, repellat rem fugit quibusdam dignissimos.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "asset - work 2 - png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "product design",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatibus aliquam soluta sequi, repellat rem fugit quibusdam dignissimos.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "asset - work 3 - png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div>
          <div>text</div>
          <div>slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
