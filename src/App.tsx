import Chat from "./components/Chat"
import Footer from "./components/Footer"
import Header from "./components/Navbar"

const App = () => {
  return (
      <div className="bg-[#FAF9F4] min-h-screen flex flex-col">
        <Header />
        <Chat />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    
  )
}

export default App
