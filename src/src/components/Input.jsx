import "@fontsource/roboto";
import React from "react";

export const Input = ({ placeholder, className, type, id, onChange}) => (
    <div>
      {id === undefined ? (
        <input
          type={type === undefined ? "text" : type}
          className={`border-0 bg-inherit outline-0 border-b-gray-400 focus:border-b-indigo-500 border-b-2 p-3${
            className === undefined ? "" : className
          } placeholder:dark:text-[var(--color-primary-dark)] dark:text-[var(--color-primary-dark)] text-[var(--color-primary-dark)] placeholder:text-[var(--color-primary-light)]`}
          placeholder={placeholder} onChange={onChange}
        />
      ) : (
        <input
          type={type === undefined ? "text" : type}
          id={id}
          className={`border-0 bg-inherit outline-0 border-b-gray-400 focus:border-b-indigo-500 border-b-2 p-3${
            className === undefined ? "" : className
          } placeholder:dark:text-[var(--color-primary-dark)] dark:text-[var(--color-primary-dark)] text-[var(--color-primary-dark)] placeholder:text-[var(--color-primary-light)]`}
          placeholder={placeholder} onChange={onChange}
        />
      )}
    </div>
)
