import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { NextPage } from "next";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Sending");
    let data = {
      name,
      email,
      about,
    };

    // Accept: "application/json, text/plain, */*",
    /* fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setProject("");
        setAbout("");
      }
    }); */
  };

  return (
    <Layout style="dark">
      <section className="md:px-0 lg:p-32 container px-8 py-12 mx-auto">
        <div className="md:flex-row md:items-center lg:justify-between lg:space-y-0 flex flex-col justify-center space-y-4">
          <h1 className="md:text-6xl lg:text-7xl text-primary text-5xl font-medium tracking-tighter">
            Let's get in
            <br />
            touch
          </h1>
          <div className="md:flex-row md:items-center lg:space-y-0 md:space-x-4 lg:space-x-16 flex flex-col space-x-0 space-y-4 text-gray-500">
            <div className="flex flex-col space-y-2">
              <a
                className="text-base font-medium underline"
                href="mailto:contact@buildnboost.com"
              >
                contact@buildnboost.com
              </a>
              <a className="text-base font-medium" href="tel:+91 79001 51883">
                +91 79001 51883
              </a>
            </div>
            <a
              className="text-base font-medium"
              target="_blank"
              href="http://maps.google.com/?q=7, Pearl Palace CHS, Agarkar Rd, Dombivli, India - 421201"
            >
              7, Pearl Palace CHS, Agarkar Rd,
              <br />
              Dombivli, India - 421201
            </a>
          </div>
        </div>

        <div className="md:mt-28 lg:mt-32 text-primary mt-24">
          <form id="form">
            <div className="md:space-y-14 lg:space-y-16 flex flex-col space-y-12">
              <div className="relative">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="peer placeholder-transparent border-b-[1.5px] focus:border-b-[2px] border-opacity-75 focus:border-opacity-100 border-gray-400 p-2 w-full focus:outline-none text-xl"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="peer-placeholder-shown:text-3xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm left-2 -top-4 absolute flex-wrap text-sm text-gray-600 transition-all"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="peer placeholder-transparent border-b-[1.5px] focus:border-b-[2px] border-opacity-75 focus:border-opacity-100 border-gray-400 p-2 w-full focus:outline-none text-xl"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="peer-placeholder-shown:text-3xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm left-2 -top-4 absolute flex-wrap text-sm text-gray-600 transition-all"
                >
                  Your Email
                </label>
              </div>
              <div className="relative">
                <input
                  required
                  type="text"
                  id="about"
                  name="about"
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  className="peer placeholder-transparent border-b-[1.5px] focus:border-b-[2px] border-opacity-75 focus:border-opacity-100 border-gray-400 p-2 w-full focus:outline-none text-xl"
                  placeholder="Tell us about your project"
                />
                <label
                  htmlFor="about"
                  className="peer-placeholder-shown:text-3xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm left-2 -top-4 absolute flex-wrap text-sm text-gray-600 transition-all"
                >
                  Tell us about your project
                </label>
              </div>
            </div>

            <div className="md:mt-28 lg:mt-32 flex flex-col items-start mt-24">
              <div className="group flex flex-col space-y-2 cursor-pointer">
                <input
                  type="submit"
                  id="submit"
                  value="Submit Message"
                  onClick={(e)=>{handleSubmit(e)}}
                  className="group-hover:text-gray-600 text-2xl font-medium text-gray-400 text-opacity-75 duration-300 -translate-y-1 bg-transparent cursor-pointer"
                />
                <hr
                  id="submit-border"
                  className="group-hover:border-gray-600 duration-300 border-b border-gray-400 cursor-pointer"
                />
              </div>
              <span
                className="text-primary mt-2 text-xl font-medium"
                id="message"
              ></span>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
