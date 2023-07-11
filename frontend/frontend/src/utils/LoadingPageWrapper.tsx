"use client";
import { ThemeContext } from "@/providers/ThemeProvider";
import { ReactNode, useContext } from "react";
import { Spinner } from "./Spinner";

const LoadingPage = () => {
  return (
    <section className="bg-white h-screen flex items-center">
      <div className="py-8 px-4 mx-auto my-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto my-auto max-w-screen-sm text-center">
          <h1>LOADING...</h1>
          <div className="text-center">
            <Spinner />
          </div>
        </div>
      </div>
    </section>
  );
};

type LoadingPageWrapperProps = {
  children?: ReactNode;
};

export const LoadingPageWrapper = (props: LoadingPageWrapperProps) => {
  const { children } = props;
  const { loading: loadingTheme } = useContext(ThemeContext);
  // const { loading: loadingLang } = useContext(ThemeContext);
  return <>{loadingTheme ? <LoadingPage /> : <>{children}</>}</>;
  // return <>{true ? <LoadingPage /> : <>{children}</>}</>;
};
