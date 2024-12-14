import { useState } from "react"
import { useLocation } from "react-router-dom"
import { enablePageScroll, disablePageScroll } from "scroll-lock"

import { brainwave } from "../assets"
import { navigation } from "../constants"
import Button from "./Button"
import MenuSvg from "../assets/svg/MenuSvg"
import { HamburgerMenu } from "./design/Header"


const Header = () => {

    const location = useLocation();

    const [openNavigation, setOpenNavigation] = useState(false)

    const toogleMenu = (isLink) => {

        if (isLink && !openNavigation) {
            enablePageScroll()
            setOpenNavigation(false);
            return
        }

        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll()
        } else {
            setOpenNavigation(true);
            disablePageScroll()
        }
    }

    return (
        // lg:bg-n-8/90 lg:backdrop-blur-sm
        <header className={`fixed w-full top-0 left-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 ${openNavigation ? "bg-n-8" : ""}`}>
            <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                <a href="/" className="block w-[12rem] xl:mr-8">
                    <img src={brainwave} alt="Brainwave" height={40} width={190} />
                </a>
                <nav className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent ${openNavigation ? "flex" : "hidden"}`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row w-full">
                        {navigation.map(link =>
                            <a key={link.id} href={link.url}
                                onClick={() => toogleMenu("link")}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${link.onlyMobile ? "lg:hidden" : ""} p-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${location.hash === link.url ? "text-n-1 z-2" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {link.title}
                            </a>
                        )}
                        <HamburgerMenu />
                    </div>
                </nav>

                <a href="#signup" className="button hidden lg:block text-n-1/50 hover:text-n-1 transition-colors mr-8">
                    New Account
                </a>
                <Button className={"hidden lg:inline-flex"} href="#login">
                    Sign in
                </Button>

                <Button className={"ml-auto lg:hidden"} px="px-3"
                    onClick={toogleMenu}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </header>
    )
}

export default Header