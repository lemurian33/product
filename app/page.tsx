import Image from 'next/image'
import About from "../components/About"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Team from "../components/Team"
import Testimonial from "../components/Testimonial"
import RecentBlog from "../components/RecentBlog"
import Subscribe from "../components/Subscribe"

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:10" />
      {/* <Application /> */}
      <About className="py-16 lg:py-32 overflow-hidden"/>
      <Pricing className="py-16 lg:py-32" />
      <Team className="py-16 lg:py-32 overflow-hidden" />
      <Testimonial/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32"/>
    </>
  )

}
