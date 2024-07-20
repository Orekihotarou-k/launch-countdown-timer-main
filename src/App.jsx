import CountdownTimer from "./components/CountdownTimer";

export default function App () {
  return (
    <main className="min-h-dvh w-full grid place-items-center bg-mostly-black-blue font-red-hatnpm "
      style={{
        backgroundImage: "url(/images/pattern-hills.svg), url(/images/bg-stars.svg)",
        backgroundPosition: "bottom, top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }} 
      >
      <CountdownTimer />    
    </main>
  )
}