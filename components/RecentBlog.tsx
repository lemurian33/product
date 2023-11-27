"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { allPosts } from '.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  url: string;
  image: string;
  date: string;
  author: string;
  title: string;
}

interface RecentBlogContent {
  heading: {
    title: string;
    subTitle: string;
  };
}

interface PostCardProps {
  index: number;
  post: Post;
}

const recentBlogContent: RecentBlogContent = {
  heading: {
    title: 'Recent Update',
    subTitle: 'Our Blog',
  },
};

const PostCard: React.FC<PostCardProps> = ({ index, post }) => {
  const delay = index * 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="bg-[#f8f3f3] relative overflow-hidden group rounded">

      {/* RecentBlog - Card - Image */}
      <Link href={post.url} className="relative block overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1064}
          height={644}
          className="object-cover object-center h-[200px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
        />
      </Link>

      {/* RecentBlog - Card - Date | author */}
      <div className="p-8">
        <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
        </p>

        {/* RecentBlog - Card - Tile */}
        <h3 className="mb-4">
          <Link href={post.url} className="text-lg leading-none">
              {post.title}
          </Link>
        </h3>

        {/* RecentBlog - Card - Btn */}
        <Link
          href={post.url}
          className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2
            inline-block border-orange-400">
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

const RecentBlog: React.FC<{ className: string }> = ({ className }) => {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section className={`${className} bg-white`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-2">
          <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
            <div className="lg:w-7/12">

              {/* RecentBlog - Main - subTitle */}
              {recentBlogContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block
                 text-gray-500"
                >
                  {recentBlogContent.heading.subTitle}
                </motion.span>
              )}

              {/* RecentBlog - Main - title */}
              {recentBlogContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-4 lg:mb-0 "
                >
                  {recentBlogContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>

        {/* RecentBlog - Card - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full lg:w-10/12 mx-auto mt-10 ">
          {posts.slice(0, 4).map((post, index) => (
            <PostCard key={index} index={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
