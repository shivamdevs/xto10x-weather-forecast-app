import AppIcon from "../assets/favicon.svg?react";
import RefreshIcon from "../assets/refresh.svg?react";
import useAppContext from "../context/useAppContext";

function Header() {
    const { setPosition } = useAppContext();
    return (
        <header className="w-full bg-black/50 p-3 shadow-[2px_2px_4px_0px_#0000001F]">
            <nav className="flex justify-between items-center mx-auto max-w-7xl">
                <span className="inline-flex gap-5 items-center">
                    <AppIcon />
                    <span className="font-black text-2xl text-white">Weather 99</span>
                </span>
                <button type="button" className="inline-flex gap-2 items-center transition-all hover:bg-white/10 py-2 px-3 rounded-full">
                    <RefreshIcon />
                    <span className="text-white" onClick={() => setPosition(pos => (pos ? { ...pos } : null))}>Refresh</span>
                </button>
            </nav>
        </header>
    )
}

export default Header;