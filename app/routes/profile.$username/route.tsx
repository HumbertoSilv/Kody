import { SignOut, User } from "@phosphor-icons/react";
import { MetaFunction } from "@remix-run/node";
import { buttonContainerStyles, buttonStyles, containerStyles, dateStyles, logoutButtonStyles, profileImageStyles, profileInfoContainerStyles, usernameStyles } from "./styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kody | Profile" },
    { name: "description", content: "My profile" },
  ];
};

export default function Profile() {
  return (
    <div className={containerStyles}>
      <div className={profileImageStyles}>
        {/* <img src="" alt="" /> */}
        <User size={208} />
      </div>

      <div className={profileInfoContainerStyles}>
        <h2 className={usernameStyles}>
          Kody
        </h2>
        <h1 className={dateStyles}>
          Joined 31/01/2024
        </h1>
        <button className={logoutButtonStyles}>
          <SignOut size={20} />
          Logout
        </button>
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