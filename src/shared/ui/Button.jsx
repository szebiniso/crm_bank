import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Button = (props: {
  title: string;
  link?: string;
  type: "button" | "submit" | "reset" | undefined;
  lock: boolean;
}) => {
  return (
    // <NavLink to={props.link}>
    <div className="mt-7">
      <button
        type={props.type}
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {props.lock && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
        )}
        {props.title}
      </button>
    </div>
    // </NavLink>
  );
};

export default Button;
