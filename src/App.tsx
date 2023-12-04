import ForeCast from "./components/ForeCast"
import GeoLocal from "./components/GeoLocal"
import Header from "./components/Header"
import TopPanel from "./components/TopPanel"
import ContextWrapper from "./context"

function App() {
    return (
        <ContextWrapper>
            <Header />
            <div className="w-full">
                <main className="w-full max-w-7xl mx-auto p-5">
                    <TopPanel />
                    <ForeCast />
                </main>
            </div>
            <GeoLocal />
        </ContextWrapper>
    )
}

export default App