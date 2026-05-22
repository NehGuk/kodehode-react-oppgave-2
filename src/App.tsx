import "./App.css"
import CatFacts from "./components/CatFacts/CatFacts"
import CookieClicker from "./components/CookieClicker/CookieClicker"
import Users from "./components/Users/Users"
import Header from "./header/header"

function App() {
  return (
    <>
      <Header />
      <main>
        <CookieClicker />
        <CatFacts />
        <Users />
      </main>
    </>
  )
}

export default App
