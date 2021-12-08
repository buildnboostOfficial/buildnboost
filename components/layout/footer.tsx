import React, { useEffect, useRef, useState } from "react";

function Footer() {
  return (
    <footer className="bg-noise z-50 bg-black">
      <section className="container flex items-end h-screen p-8 mx-auto">
        <div className="container mx-auto md:mx-[60px] flex flex-col">
          <div>
            <span className="md:text-7xl block text-4xl font-medium">
              Got A Project?
            </span>
            <a
              href="./contact-us.html"
              title="tell us about it"
              className="md:text-7xl text-4xl border-b-4"
            >
              Tell us about it
            </a>
          </div>

          <div className="flex lg:justify-end mt-[46px] md:mt-[92px]">
            <a
              href="mailto:contact@buildnboost.com"
              className="md:text-xl text-lg underline"
            >
              contact@buildnboost.com
            </a>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between lg:space-y-4 space-y-0 mt-[14px]">
            <div className="flex flex-col space-y-6">
              <span className="md:text-3xl lg:mt-0 mt-10 text-xl font-bold">
                buildnboost.
              </span>
              <span className="md:text-sm opacity-70 text-xs font-medium">
                7, Pearl Palace CHS, Agarkar Rd,
                <br />
                Dombivli, India - 421201
              </span>
              <a href="" className="md:text-sm opacity-70 text-xs font-medium">
                Sitemap
              </a>
            </div>

            <div className="lg:grid-cols-4 gap-y-6 gap-x-12 grid grid-cols-2">
              <a
                href="https://www.facebook.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Twitter
              </a>
              <a
                href="https://in.linkedin.com/company/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://www.dribbble.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Dribbble
              </a>
              <a
                href="https://www.behance.net/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Behance
              </a>
              <a
                href="https://www.youtube.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Youtube
              </a>
              <a
                href="https://www.medium.com/buildnboost"
                target="_blank"
                className="md:text-xl hover:text-blue-300 text-lg font-medium duration-300"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
