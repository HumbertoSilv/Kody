import { GithubLogo } from "@phosphor-icons/react";
import { ActionFunction, ActionFunctionArgs, MetaFunction, redirect } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";
import { ZodError, z } from 'zod';
import { commitSession, getSession } from "../../utils/session.server";
import { button, checkBoxStyle, containerStyle, createAccountStyles, errorsStyles, formStyles, helperBoxStyle, inputStyle, labelStyle, linkStyle, titleContainerStyles, titleH2Style, titleSpanStyle } from "./styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kody | Login" },
    { name: "description", content: "Please enter your details!" },
  ];
};

export interface FormFields {
  username: string;
  password: string;
}

export interface ActionData {
  formErrors?: Partial<FormFields>;
}

const UserSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(6)
})

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = Object.fromEntries(await request.formData())
  const session = await getSession(
    request.headers.get("Cookie")
  )

  try {
    const { username, password } = UserSchema.parse(formData)

    session.set("user", {
      username,
      password
    })

    return redirect(`/profile/${username}`, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    })

  } catch (error) {
    if (error instanceof ZodError) {
      const formErrors = error.issues.reduce((acc, issue) => {
        // @ts-expect-error desc
        acc[issue.path[0]] = issue.message;
        return acc;
      }, {})

      return {
        formErrors,
      };
    }

    throw new Error(error as string);
  }
}

export default function LoginPage() {
  const actionData = useActionData<ActionData>()

  const usernameErrors = actionData?.formErrors?.username
  const passwordErrors = actionData?.formErrors?.password

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

      <form className={formStyles} method="POST">
        <label className={labelStyle.primary} htmlFor="username">Username</label>
        <input
          className={usernameErrors ? inputStyle.error : inputStyle.default}
          id="username"
          name="username"
          type="text"
        />
        {usernameErrors &&
          <p className={errorsStyles}>
            {usernameErrors}
          </p>}

        <label className={labelStyle.primary} htmlFor="password">Password</label>
        <input
          className={passwordErrors ? inputStyle.error : inputStyle.default}
          id="password"
          name="password"
          type="password"
        />
        {passwordErrors &&
          <p className={errorsStyles}>
            {passwordErrors}
          </p>}

        <div className={helperBoxStyle}>
          <label className={labelStyle.secondary}>
            <input
              className={checkBoxStyle}
              id="rememberMe"
              type="checkbox"
            />
            Remember me
          </label>
          <Link className={linkStyle.primary} to="/">Forgot password</Link>
        </div>

        <button type="submit" className={button}>Log in</button>
      </form>

      <form className={formStyles} action="">
        <button className={button}>
          <GithubLogo size={15} weight="fill" />
          Login with GitHub
        </button>
      </form>

      <span className={createAccountStyles}>
        New here?
        <Link className={linkStyle.primary} to="/">Create an account</Link>
      </span>
    </div>
  );
}