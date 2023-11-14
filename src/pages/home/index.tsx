import { FC, ReactElement } from "react";
import { Link } from "@tanstack/react-router";

export const HomePage: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-y-4 w-full h-full justify-center items-center">
      <h1 className="text-red-500 font-medium text-3xl">Home Page</h1>
      <Link to="/about">About</Link>
    </section>
  );
};
