import { introBox, text, titleOne, titleTwo } from "./styles.css";

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
          let&apos;s go!
        </span>
      </div>
    </div>
  );
}