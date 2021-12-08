import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout style="dark">
      <section className="md:h-4 bg-white" />

      <section className="text-primary">
        <div className="lg:px-14 container px-8 py-32 mx-auto uppercase">
          <span className="md:text-lg text-base tracking-wide">
            we are team of
          </span>
          <p className="md:gap-5 lg:gap-12 md:text-5xl lg:text-6xl flex flex-wrap gap-3 mt-6 text-xl font-bold tracking-wider">
            <span className="strokeheading text-white">Explorers</span>
            <span className="strokeheading text-white">thinkers</span>
            <span className="strokeheading text-white">doers</span>
          </p>
        </div>
      </section>

      <section className="lg:px-14 md:py-10 lg:py-20 lg:space-y-48 text-primary container px-8 mx-auto space-y-40 text-justify">
        <div className="lg:grid-cols-3 md:grid-col-1 lg:gap-12 grid gap-6">
          <h2 className="md:text-xl text-base uppercase">who we are</h2>
          <p className="lg:text-4xl col-span-2 text-2xl">
            We’re curious people driven by continuous learning and solving hard
            problems. We team up with leading technology and use powerful tech
            stacks to deliver better and innovative, best-in-class results for
            our clients business.
          </p>
        </div>
        <div className="lg:grid-cols-3 md:grid-col-1 lg:gap-12 grid gap-6">
          <h2 className="md:text-xl text-base uppercase">our goal</h2>
          <p className="lg:text-4xl col-span-2 text-2xl">
            Since the day our company was founded in 2019, We strive to
            harmonize simple with complex, aesthetics with effective, and
            clarity with surprise. Our main goal is to focus on service-based
            startups or businesses who need a brand new website or want to
            redesign the already owned websites.
          </p>
        </div>
      </section>

      <section className="lg:px-14 py-28 container px-8 mx-auto space-y-12 md:space-y-16 text-primary text-justify">
        <h1 className="text-left lg:text-7xl lg:grid-cols-2 grid text-5xl font-bold">
          We take care of your projects
        </h1>
        <p className="lg:text-4xl text-2xl">
          We deliver solutions that are at the intersection of business goals &
          user goals but are always led by great design.
        </p>
        <p className="lg:text-4xl text-2xl">
          And your deadlines, and your nerves no matter what, and that’s a
          promise.
        </p>
        <p className="lg:text-4xl text-2xl">
          In a world with no boundaries and has global experience of working
          with brands across the globe - Dubai, Oman, Nepal, Mumbai and are
          counting.
        </p>
      </section>
    </Layout>
  );
};
export default About;
