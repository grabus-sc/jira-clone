import { FormField } from "@app/components/form-field";
import { useState } from "react";

export const LoginView = () => {
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <div className="mx-auto max-w-[400px] pt-[20vh]">
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <h2 className="text-yellow-300 mb-8 text-center text-5xl font-extrabold">
          Welcome to Stage Coding Jira
        </h2>
        <p className="text-slate-300 font-semibold">
          {action === "login"
            ? "Log In To Give Some Praise!"
            : "Sign Up To Get Started!"}
        </p>
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="bg-yellow-300 text-blue-600 hover:bg-yellow-400 absolute right-8 top-8 rounded-xl px-3 py-2 font-semibold transition duration-300 ease-in-out hover:-translate-y-1"
        >
          {action === "login" ? "Sign Up" : "Sign In"}
        </button>
        <form method="POST" className="bg-gray-200 w-96 rounded-2xl p-6">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          {action === "register" && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                onChange={(e) => handleInputChange(e, "firstName")}
                value={formData.firstName}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                onChange={(e) => handleInputChange(e, "lastName")}
                value={formData.lastName}
              />
            </>
          )}
          <div className="w-full text-center">
            <button
              type="submit"
              name="_action"
              value={action}
              className="bg-yellow-300 text-blue-600 hover:bg-yellow-400 mt-2 rounded-xl px-3 py-2 font-semibold transition duration-300 ease-in-out hover:-translate-y-1"
            >
              {action === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
