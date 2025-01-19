import {Link} from "@inertiajs/react";

export default function Banner(){
    return (
        <div className="md:mt-6 grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
            <div className="relative py-6 order-1 lg:block md:block hidden">
                <img src="/asset/image/astronaut.webp"
                     alt="Astronaut in the air" sizes="(max-width: 800px) 100vw, 620px" loading="eager" width="520"
                     height="424"
                     decoding="async"/>
            </div>
            <div>
                <div>
                    <h1 id="heading"
                        className="interactive text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
                        A Web Developer
                    </h1>
                    <p className="text-lg mt-4 text-slate-600 max-w-xl">
                        Crafting dynamic and intuitive digital experiences, I transform ideas into seamless,
                        functional
                        websites.
                    </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href={route('projects')} rel="noopener"
                          className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center">
                        View Projects
                    </Link>
                    {/*<Link href={route('home')} rel="noopener"*/}
                    {/*      className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black flex gap-1 items-center justify-center">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"*/}
                    {/*         viewBox="0 0 50 50">*/}
                    {/*        <path*/}
                    {/*            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>*/}
                    {/*    </svg>*/}
                    {/*    Linkedin*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>
    )
}
