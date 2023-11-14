'use client';
import {Footer} from 'flowbite-react';
import {ReactNode} from "react";
export const DefaultFooter = (): ReactNode => {
  return (
    <Footer container className={'border-none shadow-none'}>
      <Footer.Copyright href="/" by="Xiaohan Du™" year={new Date().getFullYear()}/>
      <p className={'text-sm'}>Designed and Built by Xiaohan Du, All Rights Reserved. Location based on IP address</p>
    </Footer>
  )
};
