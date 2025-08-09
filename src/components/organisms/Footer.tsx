import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 lg:py-4 lg:pb-4 pb-24">
       <div
      className="mt-16 border-t border-gray-100 pt-4 sm:flex sm:items-center sm:justify-between"
    >
      <ul className="flex flex-wrap justify-center gap-4 text-sm uppercase lg:justify-end">
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">Zakaria BRAHAM @{currentYear}</a>
        </li>
      </ul>

     <div>
      <SocialMediaIcons/>
     </div>
    </div>

    </div>
  )
}

export default Footer