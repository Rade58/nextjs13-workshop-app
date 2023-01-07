"use client";
import type { NextPage as NP } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactPage: NP = () => {
  const title = "hello world";

  const { push } = useRouter();

  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">home</Link>
      <br />
      <Link href={`/blog/${title}`}>post {title}</Link>

      <br />
      <button
        onClick={() => {
          push("/");
        }}
      >
        To home programatically
      </button>
    </div>
  );
};

export default ContactPage;
