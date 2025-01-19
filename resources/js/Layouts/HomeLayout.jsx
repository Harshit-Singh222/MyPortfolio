import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import { useState } from 'react';
import AnimatedCursor from "react-animated-cursor";

export default function HomeLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const {url} = usePage();
    return (
        <div className="max-w-screen-xl mx-auto px-5">
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: '#000000'
                }}
                outerStyle={{
                    border: '3px solid #000000'
                }}
            />
            <div className="bg"></div>
            <div className="min-h-screen">
                <nav className="">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex shrink-0 items-center text-2xl">
                                <Link href={route('home')}>
                                    <span className="font-bold text-slate-800">H</span>
                                    <span className="text-slate-500">S</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                                {
                                    url === '/home' ? (
                                        <NavLink
                                            onClick={(e) => {
                                                e.preventDefault()
                                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                                            }}
                                        >
                                            About
                                        </NavLink>
                                    ) : ''
                                }

                                <NavLink
                                    href={route('projects')}
                                    active={route().current('projects')}
                                >
                                    Projects
                                </NavLink>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-200 ease-in-out transform ${
                            showingNavigationDropdown ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        } sm:hidden overflow-hidden absolute z-10 right-3 bg-blue-100`}
                    >
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route('home')}
                                active={route().current('home')}
                            >
                                Home
                            </ResponsiveNavLink>
                            {
                                url === '/home' ? (
                                    <ResponsiveNavLink
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                    >
                                        About
                                    </ResponsiveNavLink>
                                ) : ''
                            }

                            <ResponsiveNavLink
                                href={route('projects')}
                                active={route().current('projects')}
                            >
                                Projects
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </nav>
                <main className="max-w-screen-xl mx-auto px-5">{children}</main>
            </div>
        </div>
    );
}
