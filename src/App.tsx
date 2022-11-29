import React, { useState } from 'react'
import { getQuotes,getIpBase,getWorldTime } from './Data/Api'



const App = () => {
const [quote, setQuote] = useState({})
const [timezone, settimeZone] = useState("Asia/Tbilisi")
// getIpBase(settimeZone)
console.log(timezone);
getWorldTime(timezone)
  return (
    <div>App</div>
  )
}

export default App