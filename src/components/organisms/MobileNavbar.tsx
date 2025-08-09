"use client"

import { RxHamburgerMenu } from "react-icons/rx"
import { CgClose } from "react-icons/cg"
import React, { type ComponentType } from "react";

import { Button } from "@/components/atoms/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/drawer"
import { useTranslation } from "react-i18next"
import { scrollToAndClose } from "@/utils/scrollTo";
type NavItem = {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>

};
type MobileNavbarProps = {
  navigation: NavItem[];
};

export function MobileNavbar({ navigation }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useTranslation();


  return (
    <div className="z-20 relative">
      <Drawer open={isOpen} onOpenChange={setIsOpen} >
        <DrawerTrigger asChild>
          <Button variant="outline">
            {isOpen ? <CgClose size={20} /> : <RxHamburgerMenu size={20} />}
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className="left-0 top-0 fixed h-full w-full bg-white shadow-md border-r z-50 transition-transform duration-300 ease-in-out transform"
        >
          <div className="h-full flex flex-col overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            <div className="p-4 flex flex-col w-full text-center gap-2 ">

              {navigation.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => scrollToAndClose(item.href, () => setIsOpen(false))} className="border rounded-lg py-2 w-full flex items-center justify-between px-12 gap-7"
                  >
                    <span className="text-lg font-medium hover:underline">
                      {t(item.name)}
                    </span>
                    <IconComponent className="text-2xl" />
                  </a>
                );
              })}

            </div>
            <DrawerFooter>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
