import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";
import Footer from "components/layout/footer";

const Home: NextPage = () => {
  return (
    <Layout style="light">
      <section className="bg-noise bg-primary bg-repeat">
        <div className="md:px-16 lg:px-14 lg:grid-cols-2 lg:space-x-12 md:pb-40 container grid h-auto grid-cols-1 px-8 pb-4 mx-auto space-x-0">
          <div className="lg:mt-20 xl:mt-12 mt-12">
            <span className="md:text-lg md:mt-6 mt-4 text-sm tracking-wide">
              We design and develop
            </span>
            <h1 className="lg:text-7xl md:text-8xl xl:text-8xl md:mt-2 mt-1 text-4xl font-bold">
              Websites
            </h1>
            <h1 className="lg:text-8xl md:text-7xl xl:text-8xl md:mt-2 mt-1 text-4xl font-bold">
              Mobile Apps
            </h1>
            <p className="lg:text-2xl xl:text-3xl md:text-3xl mt-12 text-lg">
              Full-service digital agency specialized in building websites and
              mobile apps for service based startups and business.
            </p>
          </div>
          <div className="group h-auto">
            <div className="relative lg:absolute w-full lg:w-[693px] mt-12 rounded-sm group items-center justify-center flex ">
              <video
                loop
                muted
                playsInline
                preload="auto"
                poster="/assets/images/video-thumbnail.png"
                className="rounded-sm h-[25rem]"
              >
                <source src="/assets/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-servicebg dark-cursor text-black">
        <div className="container flex flex-col justify-between pt-12 pb-24 mx-auto">
          <div className="md:pl-24 flex items-center flex-1 pl-8 space-x-6">
            <span className="text-3xl stroke-current">Featured Work</span>
            {/* <div className="opacity-70 flex-1 bg-gray-200">
                    <hr className="opacity-70 w-1/2 border border-black" />
                </div> */}
          </div>

          <div className="lg:grid-cols-2 justify-items-stretch md:px-24 grid flex-1 grid-cols-1 gap-12 px-8 mt-12">
            <div className="group flex flex-col">
              <a
                href="https://www.liplickpizzeria.com/"
                target="/blank"
                title="Liplick Pizzeria"
                className="aspect-w-3 aspect-h-2 flex items-center justify-center bg-red-200 h-[292px] rounded-lg group-hover:bg-gray-200 hover:bg-opacity-20 duration-300 cursor-pointer"
              >
                <img
                  src="/assets/images/LiplickPizzeria-Presentation.png"
                  alt=""
                  className="object-cover rounded-sm"
                />

                <div className="group-hover:opacity-100 border-primary flex items-center justify-center w-20 h-20 m-auto duration-300 border border-dashed rounded-full opacity-0">
                  <span className="text-sm font-medium">
                    View
                    <br />
                    Website
                  </span>
                </div>
              </a>
              <div className="flex items-center space-x-[8px] mt-8">
                <span className="text-sm">01</span>
                <hr className="border border-black opacity-70 w-[48px]" />
                <span className="text-sm">LipLick Pizzeria</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-card-border flex p-[1px]">
                  <span className="bg-card whitespace-nowrap h-full p-2 text-xs font-medium text-white">
                    Branding
                  </span>
                </div>

                <div className="bg-card-border flex p-[1px]">
                  <span className="bg-card whitespace-nowrap h-full p-2 text-xs font-medium text-white">
                    UI/UX Design
                  </span>
                </div>

                <div className="bg-card-border flex p-[1px]">
                  <span className="bg-card whitespace-nowrap h-full p-2 text-xs font-medium text-white">
                    Web & App Development
                  </span>
                </div>
              </div>
              <span className="mt-4 text-3xl font-medium">
                Indo Italian Style Based Pizza Brand
              </span>
            </div>
            <div className="group flex flex-col">
              <a
                href="https://cloudcrosstravels.com/"
                target="/blank"
                title="cloudcross"
                className="aspect-w-3 aspect-h-2 flex items-center justify-center bg-red-200 h-[292px] rounded-lg group-hover:bg-gray-200 hover:bg-opacity-20 duration-300 cursor-pointer"
              >
                <img
                  src="/assets/images/CloudCrossTravels-Presentation.png"
                  alt=""
                  className="object-cover rounded-sm"
                />
                <div className="group-hover:opacity-100 border-primary flex items-center justify-center w-20 h-20 m-auto duration-300 border border-dashed rounded-full opacity-0">
                  <span className="text-sm font-medium">
                    View
                    <br />
                    Website
                  </span>
                </div>
              </a>
              <div className="flex items-center space-x-[8px] mt-8">
                <span className="text-sm">02</span>
                <hr className="border border-black opacity-70 w-[48px]" />
                <span className="text-sm">CloudCross Travels</span>
              </div>
              <div className="flex flex-wrap mt-4 space-x-2">
                <div className="bg-card-border flex p-[1px]">
                  <span className="bg-card h-full p-2 text-xs font-medium text-white">
                    UI/UX Design
                  </span>
                </div>
                <div className="bg-card-border flex p-[1px]">
                  <span className="bg-card h-full p-2 text-xs font-medium text-white">
                    Website Development
                  </span>
                </div>
              </div>
              <span className="mt-4 text-3xl font-medium">
                Oman’s Air Travel Agency
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-servicebg dark-cursor py-20 text-black">
        <div className="container flex flex-col justify-between py-12 mx-auto">
          <div className="md:pl-24 flex items-center flex-1 pb-12 pl-8 space-x-6">
            <span className="text-3xl stroke-current">What We Do</span>
            {/* <div className="opacity-70 flex-1 bg-gray-200">
                    <hr className="opacity-70 w-1/2 border border-gray-400" />
                </div> */}
          </div>

          <div className="md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:px-14 lg:px-24 grid items-stretch grid-cols-1 gap-4 px-8">
            <div className="bg-serviceCards-border rounded-lg p-[2px]">
              <div className="bg-serviceCards flex flex-col justify-center h-full px-6 py-12 space-y-6 rounded-lg">
                <img
                  src="/assets/images/icons/PC11.svg"
                  alt=""
                  className="w-20"
                />
                <span className="text-3xl font-bold">Web Development</span>
                <p className="text-sm leading-6 tracking-wide">
                  We build sites that work for your business and your users — be
                  it a complex eCommerce platform, a progressive web app, or a
                  marketing site.
                </p>
                {/* <a href="#FIXME" title="know more" className="text-base">Know More</a> */}
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
                <p className="text-sm leading-6 tracking-wide">
                  With expertise in native and hybrid mobile development, We can
                  build robust, fully scalable, and secure enterprise-grade
                  applications that connect your business with people.
                </p>
                {/* <a href="#FIXME" title="know more" className="text-base">Know More</a> */}
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
                <p className="text-sm leading-6 tracking-wide">
                  We can bring your online business to the next level by
                  creating high-quality custom eCommerce applications using
                  Laravel PHP, MongoDB, and React js.
                </p>
                {/* <a href="Ecommerce.html" title="know more" className="text-base">Know More</a> */}
              </div>
            </div>
            {/* <div className="bg-card-border rounded-lg lg:col-span-3 p-[2px]">
                    <div className="bg-card flex flex-col justify-center h-full px-6 py-12 space-y-6 rounded-lg">
                        <img src="/assets/images/web.svg" alt="" className="w-20">
                        <span className="text-3xl font-bold">ReadyMade Solutions</span>
                        <p className="text-sm leading-6 tracking-wide">
                            Create online business solutions and web based SaaS products with custom websites and
                            responsive user friendly
                            development.
                        </p>
                        <a>View Pricing</a>
                    </div>
                </div> */}
          </div>
          {/* <div className="grid grid-cols-3 gap-8 mx-24 mt-8 bg-card-border rounded-lg p-[2px]">
                <div className="bg-card px-6 py-12 rounded-lg">
                    <div className="flex flex-col space-y-6">
                        <span className="text-3xl font-bold">E-commerce Solution</span>
                        <p className="text-sm leading-6 tracking-wide">Create online business solutions and web based
                            SaaS products
                            with custom
                            websites and
                            responsive user friendly
                            development.</p>
                        <a>Know More</a>
                    </div>
                </div>
            </div> */}
        </div>
      </section>

      <Footer />
    </Layout>
  );
};
export default Home;
