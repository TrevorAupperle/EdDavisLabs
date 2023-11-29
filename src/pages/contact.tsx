import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TextInput from "~/components/TextInput";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>Contact | Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/svgs/PolymersTest.svg" />
      </Head>
      <div className="flex h-full w-full grow flex-col items-center justify-center gap-12 bg-gradient-to-t from-auburnBlue-100 px-8">
        <div className="flex max-w-7xl gap-12">
          <div className="flex h-full flex-col justify-center gap-8">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <h4>
              Reach out to me with inquiries, feedback, or collaborations. I
              value your input and look forward to connecting and exploring
              opportunities together. Let&apos;s start a conversation.
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/svgs/Building.svg"
                  height={24}
                  width={24}
                  alt="Building"
                />
                <h5>274 Wilmore Laboratories, AL 36830</h5>
              </div>
              <Link
                href="tel:+1(334)844-5471"
                className="flex w-fit items-center gap-4"
              >
                <Image
                  src="/svgs/Call.svg"
                  height={24}
                  width={24}
                  alt="Phone"
                />
                <h5>+1 (334) 844-5471</h5>
              </Link>
              <Link
                href="mailto:edward.davis@auburn.edu"
                className="flex w-fit items-center gap-4"
              >
                <Image
                  src="/svgs/Message.svg"
                  height={24}
                  width={24}
                  alt="Letter"
                />
                <h5>edward.davis@auburn.edu</h5>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <TextInput
              label="First name"
              value={firstName}
              setValue={setFirstName}
              id="FirstName"
            />
            <TextInput
              label="Last name"
              value={lastName}
              setValue={setLastName}
              id="LastName"
            />
            <TextInput
              label="Email"
              value={email}
              setValue={setEmail}
              id="Email"
            />
            <div>
              <label
                htmlFor={"Message"}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <div className="flex rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-auburnBlue-900 focus:ring-auburnBlue-900">
                  <textarea
                    name={"Message"}
                    id={"Message"}
                    autoComplete={"Message"}
                    rows={4}
                    className="focus:border-primary focus:ring-primary block flex-1 rounded-md border-0 border-gray-300 bg-transparent py-1.5 pl-2 text-gray-900 focus-within:ring-auburnBlue-900 focus:ring-0 sm:text-sm sm:leading-6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <Link
                href={
                  "mailto:edward.davis@auburn.edu?subject=Hello from" +
                  firstName +
                  " " +
                  lastName +
                  "&body=" +
                  message +
                  "%0D%0A%0D%0A" +
                  "From: " +
                  email +
                  "%0D%0A%0D%0A"
                }
                className="rounded-lg bg-auburnBlue-900 px-4 py-2 text-white"
              >
                Send message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
