"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform} from "framer-motion";

interface AboutProps {
  className: string;
}

interface BtnProps {
  href: string;
  label: string;
}

const aboutContent = {
  heading: {
    title: "When creativity meets developement web",
    subTitle: "About Me",
  },
  content: {
    img: "/images/hero-img-1-min.jpg",
    title: "Architects of Inovation, Builders of Beauty  web application",
    description:
      "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    btn: {
      href: "/about",
      label: "Learn about me",
    },
  },
};

const About: React.FC<AboutProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  const Btn: React.FC<BtnProps> = ({ href, label }) => (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="transistion-all duration-300 ease-in-out text-[11.5px] tracking-[2px]
         font-bold uppercase bg-orange-600 py-4 px-5 rounded text-white inline-block
         hover:bg-white hover:text-orange-600 hover:shadow-2xl"
      >
        {label}
      </Link>
    </motion.p>
  );

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {/* About - Main - Subtitle */}
          {aboutContent.heading.subTitle && (
            <motion.span
            initial={{ opacity:0 , y: 20 }}
            whileInView={{
              opacity:1,
              y:0,
              transition: {
                delay: 0.2,
                duration:0.5,
              }
            }}
            viewport={ { once: true}}
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {aboutContent.heading.subTitle}
            </motion.span>
          )}
          {/* About - Main - Title */}
          {aboutContent.heading.title && (
            <motion.h2
              initial={{ opacity:0 , y: 20 }}
              whileInView={{
                opacity:1,
                y:0,
                transition: {
                  delay: 0.2,
                  duration:0.5,
                }
              }}
              viewport={ { once: true}}
              className="text-2xl lg:text-4xl"
            >
              {aboutContent.heading.title}
            </motion.h2>
          )}
        </div>
        <div className="lg: flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">

              {/* About - Right - Card Image */}
              <motion.div
                initial={{ opacity:0 , y: 20 }}
                whileInView={{
                  opacity:1,
                  y:0,
                  transition: {
                    delay: 0.2,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}
                className="z-[2] relative"
                style={{ y: img1 }}
              >
                <Image
                  src="/images/hero-img-1-min.jpg"
                  className="object-cover !w-full !h-[600] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="About Image"
                />
              </motion.div>

              {/* About - Center - Dots Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{
                  opacity:1,
                  x:0,
                  transition: {
                    delay: 0.2,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}
                style={{ y: img2 }}
                className="absolute bottom-0 lg:bottom-[150px] -left-[100px] z-[-1]"
              >
                <Image
                  src="/images/dots.svg"
                  alt="Dots image"
                  width={200}
                  height={200}
                  className="w-64"
                />
              </motion.div>
            </div>

            {/* About - Left - Title */}
            <div className="lg:w-6/12 mt-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity:1,
                  y:0,
                  transition: {
                    delay: 0.2,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}
                className="text-2xl mb-7 text-gray-800"
              >
                {aboutContent.content.title}
              </motion.h3>

              {/* About - Left - Block text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity:1,
                  y:0,
                  transition: {
                    delay: 0.2,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}
                className="leading-relaxed mb-14 text-gray-500"
              >
                {aboutContent.content.description}
              </motion.p>

              {/* About - Left - Btn */}
              <Btn
                href={aboutContent.content.btn.href}
                label={aboutContent.content.btn.label}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
