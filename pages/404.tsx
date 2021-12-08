import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <div className=" md:px-14 md:flex-row md:justify-between container flex flex-col-reverse items-center justify-center w-screen h-screen gap-6 px-4 mx-auto">
      <div className="flex-grow-1 md:gap-10 flex flex-col gap-4">
        <h1 className="md:text-5xl text-primary text-xl font-bold uppercase">
          Oops! Page Not Found.
        </h1>
        <p className=" text-primary lg:leading-6 lg:text-base text-sm leading-3 tracking-widest">
          Sorry for the inconvenience. Go to our homepage or check out our
          latest solutions for your websites and app development needs.
        </p>

        <div className="flex items-center gap-4">
          <a
            className=" bg-primary lg:text-base lg:px-8 lg:py-4 border-primary px-4 py-2 text-sm font-semibold text-white uppercase border-2 rounded"
            href="/"
          >
            BACK TO HOME
          </a>
          <a
            className=" lg:text-base text-primary lg:px-8 lg:py-4 border-primary px-4 py-2 text-sm font-semibold uppercase bg-white border-2 rounded"
            href="/services"
          >
            OUR SERVICES
          </a>
        </div>
      </div>
      <div>
        <img
          src="./assets/images/bgs/404.png"
          className="md:scale-75 scale-90"
          alt="404 image"
        />
      </div>
    </div>
  );
};
export default ErrorPage;
