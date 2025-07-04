
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
    <div className="fixed bg-white inset-x-0 rounded-t-xl shadow bottom-0 left-0 z-50 w-full h-16 mx-auto overflow-hidden border-t sm:bottom-5 sm:shadow-lg sm:shadow-base-500/30 hover:shadow-md duration-300 sm:border  sm:max-w-lg sm:rounded-xl">


      <div className=" h-full flex justify-between items-center px-2 ">

        {navigation.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="inline-flex flex-col w-full items-center justify-center hover:bg-base-50  gap-1 hover:text-blue-500 text-base-500 "
            >

              <IconComponent className="text-xl" />
              <span className="text-[8px]">{t(item.name)}</span>

            </a>
          );
        })}

      </div>

    </div>
  )
}
