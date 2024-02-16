import { Link } from "@remix-run/react";

import { MetaFunction } from "@remix-run/node";
import { introBox, linkStyle, text, titleOne, titleTwo } from "./styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kody | Welcome" },
    { name: "description", content: "Welcome!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className={introBox}>
        <h2 className={titleOne}>
          Start with
        </h2>
        <h1 className={titleTwo}>
          Kody
        </h1>
        <span className={text}>
          Be part of our community.
        </span>
        <Link to='login' className={linkStyle}>
          let&apos;s go!
        </Link>
      </div>
    </div>
  );
}