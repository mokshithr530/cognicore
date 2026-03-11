"use client";
import Link from "next/link"
import {motion} from "framer-motion"

export default function Home(){

return(

<div className="relative min-h-screen flex items-center justify-center text-center">

{/* background glow */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15),transparent_70%)]"></div>

{/* hero content */}

<div className="relative z-10 max-w-4xl">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold text-cyan-400 mb-6"
>

Engineering the Core of Intelligent Systems

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4}}
className="text-xl text-gray-400 mb-10"
>

CogniCore Innovations develops advanced AI,
robotics, and cognitive technologies shaping
the future of intelligent automation.

</motion.p>

<div className="flex justify-center gap-6">

<a
href="/products"
className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-300 transition"
>
Explore Products
</a>

<a
href="/research"
className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
View Research
</a>

</div>

</div>

</div>

)

}