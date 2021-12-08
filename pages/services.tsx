import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";
import Footer from "components/layout/footer";

const Services: NextPage = () => {
  return (
    <Layout style="light">
      <section className="bg-noise bg-primary md:h-32 bg-repeat" />

      <section className="bg-servicebg dark-cursor py-20 text-black">
        <div className="container flex flex-col justify-between py-12 mx-auto">
          <div className="md:pl-24 flex flex-col items-center justify-center pb-12 pl-8 mx-auto space-x-6" />
          <div className="md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:px-14 lg:px-24  grid items-stretch grid-cols-1 gap-4 px-8">
            <div className="bg-serviceCards-border rounded-lg p-[2px]">
              <div className="bg-serviceCards flex flex-col justify-center h-full px-6 py-12 space-y-6 rounded-lg">
                <img
                  src="/assets/images/icons/PC11.svg"
                  alt=""
                  className="w-20"
                />
                <span className="text-3xl font-bold">Web Development</span>
                <p className="text-sm leading-6 tracking-wide text-justify">
                  We build sites that work for your business and your users — be
                  it a complex eCommerce platform, a progressive web app, or a
                  marketing site.
                </p>
                <a href="#FIXME" title="know more" className="text-base">
                  Know More
                </a>
              </div>
            </div>
            <div className="bg-serviceCards-border rounded-lg p-[2px]">
              <div className="bg-serviceCards flex flex-col justify-center h-full px-6 py-12 space-y-6 rounded-lg">
                <img
                  src="/assets/images/icons/PC11.svg"
                  alt=""
                  className="w-20"
                />
                <span className="text-3xl font-bold">App Development</span>
                <p className="text-sm leading-6 tracking-wide text-justify">
                  With expertise in native and hybrid mobile development, We can
                  build robust, fully scalable, and secure enterprise-grade
                  applications that connect your business with people.
                </p>
                <a href="#FIXME" title="know more" className="text-base">
                  Know More
                </a>
              </div>
            </div>
            <div className="bg-serviceCards-border rounded-lg p-[2px]">
              <div className="bg-serviceCards flex flex-col justify-center h-full px-6 py-12 space-y-6 rounded-lg">
                <img
                  src="/assets/images/icons/PC11.svg"
                  alt=""
                  className="w-20"
                />
                <span className="text-3xl font-bold">E-commerce Solution</span>
                <p className="text-sm leading-6 tracking-wide text-justify">
                  We can bring your online business to the next level by
                  creating high-quality custom eCommerce applications using
                  Laravel PHP, MongoDB, and React js.
                </p>
                <a href="#FIXME" title="know more" className="text-base">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};
export default Services;
