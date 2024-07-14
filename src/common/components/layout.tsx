"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ToastContainer />{" "}
    </ThemeProvider>
  );
}

export default Layout;
