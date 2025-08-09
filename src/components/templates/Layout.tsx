import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const Layout = ({ children }: { children: React.ReactNode })  => {
  return (
      <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <main className="py-10">
                {children}
            </main>
            <Footer/>
        </div>
  )
}

export default Layout