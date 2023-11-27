import Image from "next/image";
import Link from "next/link";
import React from "react";

const testimonialContent = {
  heading: {
    title: "Developement web",
    subTitle: "How it work",
    description:
      "From heartwarning testimonials to glowing reviews, these voices reflect the trust and confiance our customers place in us. Lettheir words speak volumesabout the experiences that await you with",
    cta: {
      cta_href: "#",
      cta_label: "Get Started",
    },
  },
  testimonials: [
    {
      img: "/images/person-3-min.jpg",
      name: "Jeremy Prat",
      titleRole: "Coacth Sportif - Bordeaux",
      testimony:
        "Working with lemurian was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality into a stunning reality. To details and creativity excceeded our expectation. ",
    },
    {
      img: "/images/person-1-min.jpg",
      name: "Alexandra Moore",
      titleRole: "Interior Designer - Bordeaux",
      testimony:
        "I've had the privilege of partnering with lemurian an several projects. Their ability to combine functionnality, esthetics, and sustainability in their designs is truly remarkable.their spaces provide the perfect canvas for interior design excellence. ",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "James Mayer ",
      titleRole: "Landscape Architect - Lille",
      testimony:
        "Collaborate with lemurian on projects has been rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow,has elevated the overall design and user experience. ",
    },
  ],
};
const Testimonial2 = () => {
  return (
    <section className="py-20 bl-light">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.subTitle && (
              <span
                className="inline-block py-0.5 z-50 pl-3
                text-heading font-semibold relative mb-7 before:content-['']
                before:absolute before:w-2/3 before:bg-yellowLight
                before:left-0 before:top-0 before:bottom-0 before:-z-10"
              >
                {testimonialContent.heading.subTitle}
              </span>
            )}
            {testimonialContent.heading.title && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {testimonialContent.heading.title}
              </h2>
            )}

            {testimonialContent.heading.title && (
              <p className=" text-body leading-relaxed mb-10">
                {testimonialContent.heading.description}
              </p>
            )}

            {testimonialContent.heading.cta.cta_label && (
              <p>
                <Link
                  href={testimonialContent.heading.cta.cta_href}
                  className="py-4 px-5 bg-orange-400 text-white rounded-md duration-300
                transition-all ease-in-out hover:bg-white hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  {testimonialContent.heading.cta.cta_label}
                </Link>
              </p>
            )}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0 ">
                {testimonialContent.testimonials.map((testimonial, index) => {
                  if( index == 2) return null
                  return (
                    <div
                      key={index}
                      className={`bg-white p-7 rounded-lg w-full ${index == 1 ? "" : "mb-6"}`}>
                      <div className="flex space-x-5 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={579}
                            height={720}
                            // key={index}
                            className="object-cover rounded-full h-14 w-14"
                          />
                          <span className="absolute bottom-0 bg-orange-200 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                            <blockquote className="mt-4">
                              <span className="text-[30px] leading-[0] relative text-white block">
                                &ldquo;
                              </span>
                            </blockquote>
                          </span>
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.name && (
                            <span className="text-sm ">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>
                          &ldquo;
                            {testimonial.testimony}
                          &ldquo;
                        </blockquote>
                      </div>
                    </div>
                  )}
                )}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-green-200 rounded-full mb-6"></div>
                  <div className="bg-white p-7 rounded-lg w-full mb-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialContent.testimonials[2].img}
                          alt={testimonialContent.testimonials[2].name}
                          width={579}
                          height={720}
                          // key={index}
                          className="object-cover rounded-full h-14 w-14"
                        />
                        <span className="absolute bottom-0 bg-orange-200 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                          <blockquote className="mt-4">
                            <span className="text-[30px] leading-[0] relative text-white block">
                              &ldquo;
                            </span>
                          </blockquote>
                        </span>
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].name && (
                          <span className="text-sm ">
                            {testimonialContent.testimonials[2].titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        &ldquo;
                          {testimonialContent.testimonials[2].testimony}
                        &ldquo;
                      </blockquote>
                    </div>
                  </div>
                  <div className="hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 bg-orange-300 rounded-md rounded-br-[180px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
