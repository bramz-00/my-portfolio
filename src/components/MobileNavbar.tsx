"use client"

import * as React from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgClose } from "react-icons/cg"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="z-50 relative">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">
            {isOpen ? <CgClose size={20} /> : <RxHamburgerMenu size={20} />}
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className="left-0 top-0 fixed h-full w-full bg-white shadow-md border-r z-50 transition-transform duration-300 ease-in-out transform"
        >
          <div className="h-full flex flex-col">
            <DrawerHeader>
              <DrawerTitle>Hi everyone</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>

            <div className="p-4 flex-1">
              {/* Add your navbar links here */}
              <p className="text-sm">Menu content goes here</p>
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
