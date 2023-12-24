import React, { ReactNode } from 'react';
import { NextPage } from "next";
import RootLayout from "@/app/layout";
import { Header } from "@/components/Header/Header";

interface Props {
  children: ReactNode
}
export const PageLayout: NextPage<Props> = ({ children }) => {
  return (
    <RootLayout>
      <Header />
      <main className="flex flex-col items-center justify-between">{children}</main>
    </RootLayout>
  )
}
