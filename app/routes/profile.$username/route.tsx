import { SignOut, User } from "@phosphor-icons/react";
import { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, MetaFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { destroySession, getSession } from "../../utils/session.server";
import { buttonContainerStyles, buttonStyles, containerStyles, dateStyles, logoutButtonStyles, profileImageStyles, profileInfoContainerStyles, usernameStyles } from "./styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kody | Profile" },
    { name: "description", content: "My profile" },
  ];
};

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(
    request.headers.get("Cookie")
  )

  return json({
    data: session.data
  })
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export default function Profile() {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div className={containerStyles}>
      <div className={profileImageStyles}>
        {/* <img src="" alt="" /> */}
        <User size={208} />
      </div>

      <div className={profileInfoContainerStyles}>
        <h2 className={usernameStyles}>
          {data.user.username}
        </h2>
        <h1 className={dateStyles}>
          Joined {new Date().toLocaleDateString()}
        </h1>
        <form method="POST">
          <button className={logoutButtonStyles}>
            <SignOut size={20} />
            Logout
          </button>
        </form>
      </div>

      <div className={buttonContainerStyles}>
        <a href="/" className={buttonStyles}>
          My notes
        </a>
        <a href="/" className={buttonStyles}>
          Edit profile
        </a>
      </div>
    </div>
  )
}