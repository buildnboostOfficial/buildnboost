import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";
import useWindowSize from "utils/hooks/useWindowSize";

function Layout({ children, style }) {
  const app = useRef<HTMLDivElement>();
  const scrollContainer = useRef<HTMLDivElement>();
  const size = useWindowSize();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size]);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseDown = () => {
    setClicked(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const scrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    //loop vai raf
    requestAnimationFrame(() => scrolling());
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        className={`${hidden && "opacity-0 "} ${clicked && " bg-gray-50 "} ${
          linkHovered ? " scale-150 bg-white " : " bg-transparent "
        } border-2 hidden md:block c-cursor z-[9999] w-6 h-6 rounded-full pointer-events-none fixed top-0 left-0 mix-blend-difference transition-all ease-out duration-500`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px`,
        }}
      />

      <div
        ref={app}
        className={`${
          active && "overflow-hidden"
        } fixed top-0 left-0 w-full h-full`}
      >
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            Websites &amp; Mobile Apps Development Agency — buildnboost
          </title>
          <meta
            name="title"
            content="Websites &amp; Mobile Apps Development Agency — buildnboost"
          />
          <meta
            name="description"
            content="Full-service digital agency specialized in building websites &amp; mobile apps for service based startups and businesses. Get a free proposal today."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.buildnboost.com" />
          <meta
            property="og:title"
            content="Websites &amp; Mobile Apps Development Agency — buildnboost"
          />
          <meta
            property="og:description"
            content="Full-service digital agency specialized in building websites &amp; mobile apps for service based startups and businesses. Get a free proposal today."
          />
          <meta
            property="og:image"
            content="/assets/images/metadeta-image.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.buildnboost.com" />
          <meta
            property="twitter:title"
            content="Websites &amp; Mobile Apps Development Agency — buildnboost"
          />
          <meta
            property="twitter:description"
            content="Full-service digital agency specialized in building websites &amp; mobile apps for service based startups and businesses. Get a free proposal today."
          />
          <meta
            property="twitter:image"
            content="/assets/images/metadeta-image.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <div ref={scrollContainer} className="scroll">
          <div
            className={`${
              style === "light" && "bg-noise bg-primary bg-repeat"
            } lg:overflow-x-hidden relative`}
          >
            <header className="md:px-16 lg:px-14 container flex justify-between px-8 py-12 mx-auto">
              <a
                className="my-auto cursor-pointer"
                href="/"
                title="buildnboost"
              >
                <img
                  src={
                    style === "light"
                      ? "/assets/images/logo/buildnboost-logo.svg"
                      : "/assets/images/logo/buildnboost-logo-primary.svg"
                  }
                  alt="buildnboost logo"
                  className="h-6"
                />
              </a>

              <div
                className="flex flex-col justify-center space-y-2 lg:hidden z-[60]"
                onClick={() => handleClick()}
              >
                <span
                  className={`${
                    style !== "light"
                      ? active
                        ? "bg-white"
                        : "bg-primary"
                      : "bg-white"
                  } ${
                    active && "transform translate-y-[5px] rotate-45"
                  } transition-all duration-500 block w-[25px] h-[2px]`}
                ></span>
                <span
                  className={`${
                    style !== "light"
                      ? active
                        ? "bg-white"
                        : "bg-primary"
                      : "bg-white"
                  } ${
                    active && "transform translate-y-[-5px] -rotate-45"
                  } transition-all duration-500 block w-[25px] h-[2px]`}
                ></span>
              </div>

              <ul
                className={`${
                  style !== "light" && "text-primary"
                } lg:flex hidden my-auto space-x-12 text-lg leading-8`}
              >
                <li className="font-medium cursor-pointer">
                  <a href="/work">Work</a>
                </li>
                <li className="font-medium cursor-pointer">
                  <a href="/about">About</a>
                </li>
                <li className="font-medium cursor-pointer">
                  <a href="/services">Services</a>
                </li>
                {/* <li className="font-medium cursor-pointer"> <a href="#fixme">Products</a></li> */}
                <li className="font-medium cursor-pointer">
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>

              <nav
                className={`${
                  active ? "right-0 opacity-100" : "-right-full opacity-0"
                } transition-all duration-500 bg-primary fixed top-0 bottom-0 z-50 w-screen h-screen`}
              >
                <div
                  className={`${
                    active ? "opacity-100" : "opacity-0"
                  } transition-all duration-500 flex flex-col justify-center h-full px-12 space-y-8 text-4xl`}
                >
                  <span className="text-base text-gray-300">Menu</span>
                  <ul className="flex flex-col justify-center my-auto space-y-4 text-4xl">
                    <li className="hover:text-blue-300 duration-300 cursor-pointer">
                      <a href="/work">Work</a>
                    </li>
                    <li className="hover:text-blue-300 duration-300 cursor-pointer">
                      <a href="/about">About</a>
                    </li>
                    <li className="hover:text-blue-300 duration-300 cursor-pointer">
                      <a href="/services">Services</a>
                    </li>
                    {/* <li className="hover:text-blue-300 duration-300 cursor-pointer"> <a href="#fixme">Products</a></li> */}
                    <li className="hover:text-blue-300 duration-300 cursor-pointer">
                      <a href="/contact-us">Contact</a>
                    </li>
                  </ul>
                  <div className="flex flex-col">
                    <span className="text-base text-gray-300">
                      Get In Touch
                    </span>
                    <div>
                      <a
                        href="mailto:buildnboost@gmail.com"
                        className="hover:scale-125 p-2 text-base text-black duration-500 bg-white rounded-sm"
                      >
                        buildnboost@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
