import { GithubLogo } from "@phosphor-icons/react";
import { button, checkBoxStyle, containerStyle, createAccountStyles, formStyles, helperBoxStyle, inputStyle, labelStyle, linkStyle, titleContainerStyles, titleH2Style, titleSpanStyle } from "./styles.css";

export default function LoginPage() {
  return (
    <div className={containerStyle}>

      <div className={titleContainerStyles}>
        <h2 className={titleH2Style}>
          Welcome back!
        </h2>
        <span className={titleSpanStyle}>
          Please enter your details
        </span>
      </div>

      <form className={formStyles} action="">
        <label className={labelStyle.primary} htmlFor="username">Username</label>
        <input
          className={inputStyle}
          id="username"
          type="text"
        />

        <label className={labelStyle.primary} htmlFor="password">Password</label>
        <input
          className={inputStyle}
          id="password"
          type="password"
        />

        <div className={helperBoxStyle}>
          <label className={labelStyle.secondary} >
            <input
              className={checkBoxStyle}
              id="rememberMe"
              type="checkbox"
            />
            Remember me
          </label>
          <a className={linkStyle.primary} href="/">Forgot password</a>
        </div>

        <button className={button} >Log in</button>
      </form>

      <form className={formStyles} action="">
        <button className={button}>
          <GithubLogo size={15} weight="fill" />
          Login with GitHub
        </button>
      </form>

      <span className={createAccountStyles}>
        New here?
        <a className={linkStyle.primary} href="/">Create an account</a>
      </span>
    </div>
  );
}