import { useState } from "react"
// import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import "./index.css";
function App() {

  // const [person, setPerson] = useState ({
  //   firstName: 'Réda',
  //   lastName: 'Adélaïde',
  //   Age: 21
  // })
  // const [count, setCount] = useState(0)

  // const incrementAge = () => {
  //   setPerson({...person, Age: person.Age + 1})
  // }

  // const incrementCount = () => {
  //   setCount(count+1)
  // }

  // return <>
  //   <p>Age de {person.firstName} : {person.Age}</p>
  //   <button onClick={incrementAge}>Gagner une année</button>
  //   <button onClick={incrementCount}>Incrémenter{count}</button>
  // </>

  // const [firstname, setFirstname] = useState('Name')
  // const [email, setEmail] = useState('Email')
  // const [message, setMessage] = useState('Message')

  // const reset = () => {
  //   setFirstname('Name')
  //   setEmail('Email')
  //   setMessage('Message')
  // }

  // const submit = (e) => {
  //   alert(`Votre message a bien été envoyé`)
  // }
  
  // return (
  //   <form>
  //     <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
  //     <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
  //     <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
  //     <button onClick={reset} type="button">Reset</button>
  //     <input onClick={submit} type="submit" value="Send"/>
  //   </form>
  // )
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* <LoadingScreen/>  */}
      <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
    </>  
  )
}

export default App
