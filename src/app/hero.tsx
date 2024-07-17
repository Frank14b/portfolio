"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { ContactHookDto } from "./(pages)/hooks/useContacts";
import { useCallback, useState } from "react";

function Hero({ contactHook }: { contactHook: ContactHookDto }) {
  //
  const { isLoading, proceedGetInTouch } = contactHook;
  const [email, setEmail] = useState<string>("");

  const handleSendEmail = useCallback(async () => {
    await proceedGetInTouch({ email });
    setEmail("");
  }, [email, setEmail, proceedGetInTouch]);

  return (
    <header className="bg-white p-8 dark:bg-primaryBlack-600">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl text-white"
          >
            Hello Guy&apos;s <br /> Welcome to my Page!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Frank Donald Kamga Fontcha, a passionate Software Engineer
            based in UAE. Here, you&apos;ll get a glimpse of my journey in the
            world of Software Development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 dark:text-gray-300 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input
                color="gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Enter your email"
                size="lg"
                className="dark:text-gray-500"
              />
              <Button
                color="gray"
                disabled={isLoading}
                onClick={handleSendEmail}
                className="w-full px-4 md:w-[12rem]"
              >
                {isLoading ? "Sending..." : "get in touch"}
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Let&apos;s meet and discuss{" "}
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Frank Fontcha"
          src="/image/franky.jpg"
          className="min-sm:h-[500px] csm:h-[300px] mt-10 mb-5 rounded-full mt-5 shadow-lg border-4 object-cover"
          style={{ objectPosition: "top" }}
        />
      </div>
    </header>
  );
}

export default Hero;
