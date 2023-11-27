"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface TeamContent {
  heading: {
    title: string;
    subTitle: string;
  };

  content: {
    img: string;
    title: string;
    description: string;
    description1: string;
  };

  content1: {
    img: string;
    title: string;
    description: string;
    description1: string;
  };
}

const teamContent: TeamContent = {
  heading: {
    title: 'Team Jeremy',
    subTitle: 'About Me',
  },
  content: {
    img: '/images/person-3-min.jpg',
    title: 'Coatch Jeremy Prat',
    description:
      "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    description1:
      "réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
  },
  content1: {
    img: '/images/person-1-min.jpg',
    title: 'Coatch Julie Carpentier',
    description:
      'depuis plus de 2 ans des outils sur-mesure à destination d\'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.',
    description1:
      'plus de 2 ans des outils sur-mesure à destination d\'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.',
  }
};

const Team: React.FC<{ className: string }> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%']);

  return (
    <section className={`${className} bg-white`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-0 lg:mb-22 relative z-[5]">

           {/* Team - Main - Subtitle */}
           {teamContent.heading.subTitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {teamContent.heading.subTitle}
            </motion.span>
          )}

          {/* Team - Main - Title */}
          {teamContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl"
            >
              {teamContent.heading.title}
            </motion.h2>
          )}
        </div>

        {/* Team - Right - Image */}
        <div className="lg: flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/person-3-min.jpg"
                  className="object-cover
                  !w-full !h-[600] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="Jeremy Prat"
                />
              </motion.div>
            </div>

            {/* Team - Left - Title */}
            <div className="lg:w-6/12 mt-20">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {teamContent.content.title}
              </motion.h3>

              {/* Team - Left - description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-500"
              >
                {teamContent.content.description}
              </motion.p>

              {/* Team - Left - description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-5 text-gray-500"
              >
                {teamContent.content.description}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="lg: flex justify-center mt-20">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">

              {/* Team - Right - Image */}
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/person-1-min.jpg"
                  className="object-cover
                  !w-full !h-[600] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="Julie Carpentier"
                />
              </motion.div>
            </div>

            {/* Team - Left - Title */}
            <div className="lg:w-6/12 mt-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {teamContent.content1.title}
              </motion.h3>

              {/* Team - Left - Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-5 text-gray-500"
              >
                {teamContent.content1.description}
              </motion.p>

              {/* Team - Left - Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-500"
              >
                {teamContent.content1.description1}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
