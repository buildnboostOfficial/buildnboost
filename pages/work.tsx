import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";
import Footer from "components/layout/footer";

const Work: NextPage = () => {
  return (
    <Layout style="light">
      <section className="bg-noise bg-primary md:h-32 bg-repeat" />
      <section className="bg-servicebg dark-cursor text-black">
        <div className="container flex flex-col justify-between pt-12 pb-24 mx-auto">
          <div className="md:pl-24 flex items-center flex-1 pl-8 space-x-6">
            <span className="text-3xl stroke-current">Featured Work</span>
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

      <Footer />
    </Layout>
  );
};
export default Work;
