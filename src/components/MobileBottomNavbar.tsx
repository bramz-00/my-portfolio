
import { type ComponentType } from "react";


import { useTranslation } from "react-i18next"
type NavItem = {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>

};
type MobileNavbarProps = {
  navigation: NavItem[];
};

export function MobileBottomNavbar({ navigation }: MobileNavbarProps) {
  const { t } = useTranslation();


  return (
    <div className="fixed bg-white inset-x-0 mx-auto  rounded-xl  bottom-3 left-0 z-50 w-11/12 h-16  overflow-hidden border sm:bottom-5 sm:shadow-lg sm:shadow-base-500/30 hover:shadow-md duration-300 sm:border   sm:max-w-lg sm:rounded-xl">


      <div className=" h-full flex justify-between items-center px-2 ">

        {navigation.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="inline-flex flex-col w-full items-center justify-center hover:bg-base-50  gap-1 hover:text-primary text-primary"
            >

              <IconComponent className="text-xl" />
              <span className="text-xs">{t(item.name)}</span>

            </a>
          );
        })}

      </div>

    </div>
  )
}
