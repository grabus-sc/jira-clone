import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { LoginView } from "@app/ui/login";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@app/utils/validators.server";
import { getUser, login, register } from "@app/utils/auth.server";


export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect('/') : null
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");
  const password = form.get("password");
  const name = form.get("name");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  if (
    typeof action !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  if (
    action === "register" &&
    (typeof firstName !== "string" || typeof lastName !== "string")
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === "register"
      ? {
          firstName: validateName((firstName as string) || ""),
          lastName: validateName((lastName as string) || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );

  switch (action) {
    case "login": {
      return await login({ email, password });
    }
    case "register": {
      firstName = firstName as string;
      lastName = lastName as string;
      return await register({ email, password, firstName, lastName, color: "#333", name: "Edin" });
    }
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
  // const formData = await request.formData();
  // const _action = formData.get("_action") as string;

  // if (_action === "setUser") {
  //   const userId = formData.get("user") as string;
  //   const userSession = await getUserSession(request);
  //   userSession.setUser(userId);

  //   return redirect("/projects", {
  //     headers: { "Set-Cookie": await userSession.commit() },
  //   });
  // }
  // console.error("Unknown action", _action);
};

export default function LoginRoute() {
  return <LoginView />;
}
