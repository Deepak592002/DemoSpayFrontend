import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Amt from './component/Amt'
import PaymentOptions from './component/PaymentOptions'
import GroupList from './component/GroupList'
import CreateGrpBtn from './component/CreateGrpBtn'
import LoginSignupForm from './component/LoginSignupForm'
import CreateGrp from './component/CreateGrp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Amt/>
      <div className="flex justify-between my-5">
        <PaymentOptions/>
        <PaymentOptions/>
        <PaymentOptions/>
      </div>
      <GroupList/>
      <CreateGrpBtn/> */}
      {/* <LoginSignupForm/> */}
      <CreateGrp/>
    </>
  )
}

export default App
