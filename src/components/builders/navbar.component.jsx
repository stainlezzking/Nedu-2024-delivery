import { Link, NavLink, Outlet } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <>
      <div className="bg-secondary/80 p-5 lg:hidden">
        <div className="flex gap-x-5 text-white text-sm">
          <div className="flex gap-x-2 items-center max-md:flex-col max-md:justify-center ">
            <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31.6309" cy="32" r="31" className="fill-secondary/30" stroke="#273270" />
              <path
                d="M32.1309 42.5C38.206 42.5 43.1309 37.5751 43.1309 31.5C43.1309 25.4249 38.206 20.5 32.1309 20.5C26.0557 20.5 21.1309 25.4249 21.1309 31.5C21.1309 37.5751 26.0557 42.5 32.1309 42.5Z"
                stroke="#F6B426"
              />
              <path d="M32.1309 22.5V31.7058L37.1309 35.5" stroke="#F6B426" />
            </svg>
            <div className="max-md:text-center max-md:text-sm">
              <p>Mon - Sun 12.00 - 12.00</p>
              <p>24 hrs Every week</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center max-md:flex-col max-md:justify-center max-sm:hidden">
            <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31.6309" cy="32" r="31" className="fill-secondary/30" stroke="#273270" />
              <path
                d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                stroke="#F6B426"
              />
              <path d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294" stroke="#F6B426" />
            </svg>
            <div className="max-md:text-center max-md:text-sm">
              <p>Email</p>
              <a href="https://mailto:contact@goldstorkexpress.com">contact@goldstorkexpress.com</a>
            </div>
          </div>
          <div className="flex gap-x-2 items-center max-md:flex-col max-md:justify-center max-sm:ms-auto">
            <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31.6309" cy="32" r="31" className="fill-secondary/30" stroke="#273270" />
              <path
                d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                stroke="#F6B426"
              />
              <path d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294" stroke="#F6B426" />
            </svg>
            <div className="max-md:text-center max-md:text-sm">
              <p>Call Us</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="py-5 bg-secondary">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center">
                <svg className="w-10" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="4.89111" width="9.78261" height="9.78261" transform="rotate(-30 0 4.89111)" fill="#FFB82B" />
                  <rect x="4.13086" y="15" width="10" height="10" fill="#FFB82B" />
                  <rect x="18.1309" y="2" width="10" height="10" fill="#FFB82B" />
                  <rect x="18.1309" y="15" width="10" height="10" fill="#FFB82B" />
                </svg>
                <h1 className="text-2xl max-md:text-xl font-bold text-white">Gold-Stork-Express</h1>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="button lg:hidden">
                    <svg className="fill-white w-10" viewBox="0 0 21 21">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g fill="none" fillRule="evenodd" className="stroke-white" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m4.5 6.5h12"></path> <path d="m4.498 10.5h11.997"></path> <path d="m4.5 14.5h11.995"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent className="bg-secondary ">
                  <SheetHeader className="text-white">
                    <SheetTitle className="sr-only">Side nav links for mobile</SheetTitle>
                    <SheetDescription asChild>
                      <div>
                        <ul className="space-y-2 text-lg font-medium mt-10 nav-active-selector">
                          <li>
                            <NavLink to="/" className="py-2 hover:text-white w-full block">
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/about" className="py-2 hover:text-white w-full block">
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" className="py-2 hover:text-white w-full block">
                              Service
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact" className="py-2 hover:text-white w-full block">
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                        <NavLink
                          className="mt-5 bg-white max-w-[300px] w-full text-secondary px-5 h-12 hover:text-primary flex items-center  "
                          to="/login"
                        >
                          <p>Customer Portal Login </p>
                        </NavLink>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <div className="flex gap-x-5 text-white text-sm max-lg:hidden">
                <div className="flex gap-x-2 items-center ">
                  <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31.6309" cy="32" r="31" fill="#111C55" stroke="#273270" />
                    <path
                      d="M32.1309 42.5C38.206 42.5 43.1309 37.5751 43.1309 31.5C43.1309 25.4249 38.206 20.5 32.1309 20.5C26.0557 20.5 21.1309 25.4249 21.1309 31.5C21.1309 37.5751 26.0557 42.5 32.1309 42.5Z"
                      stroke="#F6B426"
                    />
                    <path d="M32.1309 22.5V31.7058L37.1309 35.5" stroke="#F6B426" />
                  </svg>
                  <div>
                    <p>Mon - Sun 12.00 - 12.00</p>
                    <p>24 hrs Every week</p>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31.6309" cy="32" r="31" fill="#111C55" stroke="#273270" />
                    <path
                      d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                      stroke="#F6B426"
                    />
                    <path d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294" stroke="#F6B426" />
                  </svg>
                  <div>
                    <p>Email</p>
                    <a href="https://mailto:contact@goldstorkexpress.com">contact@goldstorkexpress.com</a>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <svg className="w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31.6309" cy="32" r="31" fill="#111C55" stroke="#273270" />
                    <path
                      d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                      stroke="#F6B426"
                    />
                    <path d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294" stroke="#F6B426" />
                  </svg>
                  <div>
                    <p>Call Us</p>
                    <p>(00) 112 365 489</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/25 absolute -bottom-[48px] z-10 left-0 w-full max-lg:hidden">
          <div className="container mx-auto">
            <div className="flex justify-between items-end text-white">
              <ul className="gap-x-3 flex main-nav ">
                <NavLink
                  className="relative py-3 hover:text-white/80 px-5 block after:border-e after:block after:absolute after:right-0 after:w-[2px] after:h-[40%] after:top-1/2 after:-translate-y-1/2 after:border-e-white/40"
                  to="/"
                >
                  <p>Home</p>
                  <span className="h-[2px] transition-[width] duration-600 w-0 bg-white block absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                </NavLink>
                <NavLink
                  className="relative py-3 hover:text-white/80 px-5 block after:border-e after:block after:absolute after:right-0 after:w-[2px] after:h-[40%] after:top-1/2 after:-translate-y-1/2 after:border-e-white/40"
                  to="/about"
                >
                  <p>About</p>
                  <span className="h-[2px] transition-[width] duration-600 w-0 bg-white block absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                </NavLink>
                <NavLink
                  className="relative py-3 hover:text-white/80 px-5 block after:border-e after:block after:absolute after:right-0 after:w-[2px] after:h-[40%] after:top-1/2 after:-translate-y-1/2 after:border-e-white/40"
                  to="/services"
                >
                  <p>Services</p>
                  <span className="h-[2px] transition-[width] duration-600 w-0 bg-white block absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                </NavLink>
                <NavLink
                  className="relative py-3 hover:text-white/80 px-5 block after:border-e after:block after:absolute after:right-0 after:w-[2px] after:h-[40%] after:top-1/2 after:-translate-y-1/2 after:border-e-white/40"
                  to="/contact"
                >
                  <p>Contact</p>
                  <span className="h-[2px] transition-[width] duration-600 w-0 bg-white block absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                </NavLink>
              </ul>
              <NavLink className="bg-white text-secondary px-5 h-12 hover:text-primary flex items-center  " to="/login">
                <p>Customer Portal Login </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
