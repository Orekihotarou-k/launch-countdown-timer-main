import { useEffect } from "react"
import { useState } from "react"

const CountdownTimer = () => {
  // set the states to store the countdown variables
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // calculate the countdown date
  const countDownDate = new Date("Aug 01, 2025 00:00:00").getTime()

  useEffect(() => {
    // update the counter every second
    const intervalId = setInterval(() => {
      // get todays time and date
      let today = new Date().getTime()
  
      // get the difference between now and the countdown date
      let timeRemaining = countDownDate - today
  
      // handle the countdown reaching 0
      if (timeRemaining < 0) {
        clearInterval(intervalId)
  
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        return
      }
  
      // calculate the the time (day, hours, minutes, seconds)
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / (1000))
  
      // update the state varialbles
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
      
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="" >
        
      <h1 className="text-3xl text-center text-white font-bold tracking-[.4rem]">WE'RE LAUNCHING SOON</h1>

      <div className="text-soft-red grid my-[8em] mb-[14em] grid-cols-4 gap-8">
        {/* timecard */}
        <div className="relative z-10 w-auto sm:w-[9.5rem] ">
          <div className="relative z-10 bg-mostly-black-blue shadow-hard-shadow">
          <div className=" absolute clip-path-triangle rounded-md top-0 -z-10 h-[50%] w-full bg-dark-desat-blue"></div>
            <div className="p-4">
              <h2 id="day" className="text-[2rem] sm:text-[4rem] font-extrabold">{days}</h2>
            </div>
          <div className=" h-[50%] absolute rounded-md -bottom-[2px] -z-10 w-full bg-dark-desat-blue"></div>
          </div>
            <p className="text-grayish-blue text-center mt-6 text-sm font-bold tracking-[.2rem]">DAYS</p>
        </div>

        {/* timecard */}
        <div className="relative z-10 w-auto sm:w-[9.5rem] ">
          <div className="relative z-10 bg-mostly-black-blue shadow-hard-shadow">
          <div className=" absolute clip-path-triangle rounded-md top-0 -z-10 h-[50%] w-full bg-dark-desat-blue"></div>
            <div className="p-4 px-8">
              <h2 id="day" className="text-[2rem] sm:text-[4rem] font-extrabold">{hours}</h2>
            </div>
          <div className=" h-[50%] absolute rounded-md -bottom-[2px] -z-10 w-full bg-dark-desat-blue"></div>
          </div>
            <p className="text-grayish-blue text-center mt-6 text-sm font-bold tracking-[.2rem]">HOURS</p>
        </div>

        {/* timecard */}
        <div className="relative z-10 w-auto sm:w-[9.5rem] ">
          <div className="relative z-10 bg-mostly-black-blue shadow-hard-shadow">
          <div className=" absolute clip-path-triangle rounded-md top-0 -z-10 h-[50%] w-full bg-dark-desat-blue"></div>
            <div className="p-4 px-8">
              <h2 id="day" className="text-[2rem] sm:text-[4rem] font-extrabold">{minutes}</h2>
            </div>
          <div className=" h-[50%] absolute rounded-md -bottom-[2px] -z-10 w-full bg-dark-desat-blue"></div>
          </div>
            <p className="text-grayish-blue text-center mt-6 text-sm font-bold tracking-[.2rem]">MINUTES</p>
        </div>

        {/* timecard */}
        <div className="relative z-10 w-auto sm:w-[9.5rem] ">
          <div className="relative z-10 bg-mostly-black-blue shadow-hard-shadow">
          <div className=" absolute clip-path-triangle rounded-md top-0 -z-10 h-[50%] w-full bg-dark-desat-blue"></div>
            <div className="p-4 px-8">
              <h2 id="day" className="text-[2rem] sm:text-[4rem] font-extrabold">{seconds}</h2>
            </div>
          <div className=" h-[50%] absolute rounded-md -bottom-[2px] -z-10 w-full bg-dark-desat-blue"></div>
          </div>
            <p className="text-grayish-blue text-center mt-6 text-sm font-bold tracking-[.2rem]">SECONDS</p>
        </div>

        
      </div>

      <div className="flex items-center justify-center gap-8">
        <a href="#">
          <img src="/images/icon-facebook.svg" alt="facebook link" />
        </a>
        <a href="#">
          <img src="/images/icon-pinterest.svg" alt="pinterest link" />
        </a>
        <a href="#">
          <img src="/images/icon-instagram.svg" alt="instagram link" />
        </a>
      </div>
    </div>
  )
}

export default CountdownTimer