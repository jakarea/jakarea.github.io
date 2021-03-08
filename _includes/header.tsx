import { Image, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface _HeaderProps {}

export const _Header: React.FC<_HeaderProps> = ({}) => {
  const router = useRouter();
  const menu = [
    {
      title: "Home 3",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const selectedMenu = menu.findIndex((item) => item.url === router.pathname);

  return (
    <Header className="header">
      Hello header
    </Header>
  );
};
