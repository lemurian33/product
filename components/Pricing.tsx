"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface StepDescription {
  content: string;
  programme: string;
  suivi: string;
  message: string;
  application: string;
  plan: string;
  bilan: string;
}

interface Step {
  price: string;
  title: string;
  description: StepDescription;
  btn: {
    href: string;
    label: string;
  };
}

const PricingContent = {
  heading: {
    title: 'Un accompagnement personaliser',
    subTitle: 'Comment ça marche ?',
    description:
      "Je vous accompagne dans votre entrainement afin de progresser rapidement et efficacement, Je vous accompagne dans votre entrainement afin de progresser rapidement et efficacement",
  },
  step: [
    {
      price: '100€',
      title: "Pack Trainnig Atheler",
      description: {
        content:"Programme d'entrainement personnalisé en fonction de ta discipline (Foot, Boxe,...)",
        programme:"Programme de réathlétisation adapté à ta pathologie et ta discipline",
        suivi:"Suivi entrainement avec correction des mouvements",
        message:"Messagerie privée 7j/7 sur WhatsApp/ mail",
        application:"Application Fournie Team Unl",
        plan:"Plan 100% personnalisé et adapté",
        bilan:"Bilan toutes les deux semaines"
      },
      btn: {
        href:"/pricing",
        label:"Choose Plan"
      }
    },
    {
      price: '150€',
      title: "Pack Starter",
      description: {
        content:"Programme d'entrainement personnalisé en fonction de ta discipline (Foot, Boxe,...)",
        programme:"Programme de réathlétisation adapté à ta pathologie et ta discipline",
        suivi:"Suivi entrainement avec correction des mouvements",
        message:"Messagerie privée 7j/7 sur WhatsApp/ mail",
        application:"Application Fournie Team Unl",
        plan:"Plan 100% personnalisé et adapté",
        bilan:"Bilan toutes les deux semaines"
      },
      btn: {
        href:"/pricing",
        label:"Choose Plan"
      }
    },
    {
      price: '200€',
      title: "Pack Elite Premium",
      description: {
        content:"Programme d'entrainement personnalisé en fonction de ta discipline (Foot, Boxe,...)",
        programme:"Programme de réathlétisation adapté à ta pathologie et ta discipline",
        suivi:"Suivi entrainement avec correction des mouvements",
        message:"Messagerie privée 7j/7 sur WhatsApp/ mail",
        application:"Application Fournie Team Unl",
        plan:"Plan 100% personnalisé et adapté",
        bilan:"Bilan toutes les deux semaines"
      },
      btn: {
        href:"/pricing",
        label:"Choose Plan"
      }
    }
  ],
};

const Pricing: React.FC<{ className: string }> = ({ className }) => {
  return (
    <>
      <section className={` ${className}`}>
        <div className='container px-4 mx-auto'>
          <div className='lg:flex justify-center mb-20 lg:mb-36'>
            <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
              <div className='lg:w-7/12 mb-5 lg:mb-0'>

                {/* Pricing - Main - Subtitle */}
                {PricingContent.heading.subTitle && (
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
                    className='uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500'>
                    {PricingContent.heading.subTitle}
                  </motion.span>
                )}

                {/* Pricing - Main - Title */}
                {PricingContent.heading.subTitle && (
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
                    className='text-2xl lg:text-4xl text-black'>
                    {PricingContent.heading.title}
                  </motion.h2>
                )}
              </div>

              {/* Pricing - Main - Description */}
              <div className='lg:w-5/12 self-end'>
                {PricingContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className='text-black'>
                    {PricingContent.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-10/12 mx-auto'>
            {PricingContent.step.map((step: Step, index) => {
              index *= 0.2;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  key={step.title}
                  // whileHover={{ y: -10, transition: 0.1 }}
                  className='group duration-300 pl-10 pr-10 pb-20  bg-[#2f2e2e]
                    relative overflow-hidden  hover: shadow-2xl rounded-md'>

                  {/* Pricing - Card - Title */}
                  <div>
                    <h3 className='text-orange-400 text-center text-[18px] mb-5 pt-5 pb-5 duration-300 transistion-all ease-in-out
                        border-b-[1px] border-spacing-[7px]'>
                        { step.title}
                    </h3>

                    <ul role="list" className='marker:text-orange-400 list-disc pl-5 space-y-3 text-white mb-5'  >
                      {/* Pricing - Card - Price */}
                      <li className='list-none text-center text-orange-400 mb-5 mt-5'>
                        {step.price}
                          <span className='text-white'>/mois</span>
                      </li>

                      {/* Pricing - Card - Content */}
                      <li className='leading-relaxed text-[15px] text-white mb-5  pb-5
                        duration-300 transistion-all ease-in-out border-b-[1px] border-spacing-[7px] text-left'>
                        {step.description.content}
                      </li>
                      {/* Pricing - Card - Programme */}
                      <li className='leading-relaxed text-[15px] text-white mb-5 pb-5
                        duration-300 transistion-all ease-in-out border-b-[1px] border-spacing-[7px] text-left'>
                        {step.description.programme}
                      </li>
                      {/* Pricing - Card - Suivi */}
                      <li className='leading-relaxed text-[15px] text-white mb-5 pb-5
                        duration-300 transistion-all ease-in-out border-b-[1px] border-spacing-[7px] text-left'>
                        {step.description.suivi}
                      </li>
                      {/* Pricing - Card - Message */}
                      <li className='leading-relaxed text-[15px] text-white mb-5 pb-5
                        duration-300 transistion-all ease-in-out border-b-[1px] border-spacing-[7px] text-left'>
                        {step.description.message}
                      </li>
                      {/* Pricing - Card - Application */}
                      <li className='leading-relaxed text-[15px] text-white mb-5 pb-5
                        duration-300 transistion-all ease-in-out border-b-[1px] border-spacing-[7px] text-left'>
                        {step.description.application}
                      </li>
                    </ul>
                    {/* Pricing - Card - Btn */}
                    <Link
                      href={step.btn.href}
                      className=" ml-15 transistion-all duration-300 ease-in-out text-[11.5px]
                        tracking-[2px] font-bold uppercase bg-orange-600 py-3 px-5 rounded text-white inline-block
                        hover:bg-white hover:text-orange-600 hover:shadow-2xl mb-10">
                          {step.btn.label}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
