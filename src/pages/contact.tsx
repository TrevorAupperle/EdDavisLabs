import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TextInput from "~/components/TextInput";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full items-center px-8">
        <div className="flex h-full flex-col justify-center gap-8">
          <h2 className="text-3xl">Get in touch</h2>
          <h4>
            Reach out to me with inqui ries, feedback, or collaborations. I
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
              <h5>1603 Olivia Way Auburn, AL 36830</h5>
            </div>
            <Link
              href="tel:+1(334)844-5471"
              className="flex items-center gap-4"
            >
              <Image src="/svgs/Call.svg" height={24} width={24} alt="Phone" />
              <h5>+1 (334) 844-5471</h5>
            </Link>
            <Link
              href="mailto:edward.davis@auburn.edu"
              className="flex items-center gap-4"
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
        <div className="w-full">
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
        </div>
      </div>
    </>
  );
}
