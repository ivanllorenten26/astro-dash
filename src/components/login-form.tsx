import type { FC } from "react";

export const LoginForm: FC = () => {
  const submitForm = () => {
    window.location.href = "/api/authorize-callback";
  };
  console.log("form");
  return (
    <>
      <button type="button" onClick={() => submitForm()}>
        Login
      </button>
    </>
  );
};
