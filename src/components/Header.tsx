import AppIcon from "../assets/favicon.svg?react";
import RefreshIcon from "../assets/refresh.svg?react";
import useAppContext from "../context/useAppContext";

function Header() {
    const { setPosition } = useAppContext();
    return (
        <header className="w-full bg-[#60656B] p-3 shadow-[2px_2px_4px_0px_#0000001F] sticky top-0 z-10">
            <nav className="flex justify-between items-center mx-auto max-w-7xl">
                <span className="inline-flex gap-5 items-center">
                    <AppIcon />
                    <span className="font-black text-2xl text-white">Weather 99</span>
                </span>
                <button type="button" className="inline-flex absolute flex-col md:flex-row right-0 bottom-0 top-0 md:relative gap-0 md:gap-2 items-center transition-all hover:bg-white/10 py-1 md:py-2 px-3 md:rounded-full border-l md:border-l-0 border-l-white/20">
                    <RefreshIcon />
                    <span className="text-white text-sm md:text-base" onClick={() => setPosition(pos => (pos ? { ...pos } : null))}>Refresh</span>
                </button>
            </nav>
        </header>
    )
}

export default Header;