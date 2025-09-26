import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const Layout = ({ children,isHomepage }: { children: React.ReactNode,isHomepage?:boolean })  => {
  return (
      <div className="w-full flex flex-col items-center justify-center">
            <Header isHomepage={isHomepage} />
            <main className="py-10">
                {children}
            </main>
            <Footer/>
        </div>
  )
}

export default Layout