import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100p] pb-10 md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        {/* <h1 className="heading lg:max-w-[45vw]">
          Exited to bring <span className="text-purple">your</span> ideas to life with technology?
        </h1> */}
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect! I&apos;m ready to apply my skills and passion for development to help your team acheive it&apos;s goals.
        </p>
        <a href="mailto:benhosseini505@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Benjamin Hosseini
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
