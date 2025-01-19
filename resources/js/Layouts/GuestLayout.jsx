
export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="max-w-screen-xl mx-auto px-5">
                <header className="flex flex-col lg:flex-row justify-between items-center my-5">
                    <div className="flex w-full lg:w-auto items-center justify-between"><a href="/" className="text-lg"><span
                        className="font-bold text-slate-800">H</span><span className="text-slate-500">S</span> </a>
                    </div>
                    <div>
                        <div className="hidden lg:flex items-center gap-4">
                            <a href="#"
                               className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent">
                                Download CV
                            </a>
                        </div>
                    </div>
                </header>
            </div>
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
