"use client";

import {
  Typography,
  Card,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { ContactHookDto } from "./(pages)/hooks/useContacts";
import {
  RadioField,
  MultiLineInputField,
  InputField,
} from "@/common/ui-elements";
import { CONTACT_INTEREST } from "@/constants";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function ContactForm({ contactHook }: { contactHook: ContactHookDto }) {
  //
  const { isLoading, handleSubmit, proceedSubmitFormContact } = contactHook;

  const SOCIAL_LINKS = {
    github: "https://github.com/Frank14b",
    linkedIn: "https://www.linkedin.com/in/kamga-fontcha-frank-donald-485933ba"
  }

  return (
    <section className="px-8 py-16 dark:bg-primaryBlack-600" id="contacts">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 dark:text-white"
        >
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and i will get back to you within 24 hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +971(55) 9358866
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  contact@frankfontcha.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton
                  variant="text"
                  color="white"
                  onClick={() => window.open(SOCIAL_LINKS.linkedIn, "_blank")}
                  className="bg-gray-800"
                >
                  <FaLinkedin className="size-6" />
                </IconButton>
                <IconButton
                  variant="text"
                  color="white"
                  onClick={() => window.open(SOCIAL_LINKS.github, "_blank")}
                  className="bg-gray-800"
                >
                  <FaGithub className="size-6" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit(proceedSubmitFormContact)}>
                {/* @ts-ignore */}
                <div className="mb-5">
                  <InputField
                    data={{
                      name: "name",
                      title: "Enter Your Name",
                      placeholder: "",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <div className="mb-5">
                  <InputField
                    data={{
                      name: "email",
                      title: "Enter Your Email",
                      type: "email",
                      placeholder: "",
                    }}
                  />
                </div>

                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 lg:flex md:block">
                  {/* @ts-ignore */}
                  {CONTACT_INTEREST.map((item, index) => (
                    <RadioField
                      key={index}
                      data={{
                        type: "radio",
                        name: "interest",
                        value: item.key,
                        title: item.value,
                      }}
                    />
                  ))}
                </div>
                {/* @ts-ignore */}
                <div className="mb-5">
                  <MultiLineInputField
                    data={{
                      name: "message",
                      title: "Enter Your Message",
                      placeholder: "",
                    }}
                  />
                </div>
                <div className="w-full flex justify-end">
                  <Button
                    disabled={isLoading}
                    className="w-full md:w-fit bg-primaryBlue"
                    color="gray"
                    size="md"
                    type="submit"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
