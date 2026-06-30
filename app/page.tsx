"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Typewriter from "../components/TypeWriter";

/* HERO IMAGES */

const images = [
  "/pill dispenser.jpg",
  "/rob1.jpeg",
  "/chip2.webp"
];

/* PRODUCTS */

const products = [
{
title: "Smart Pill Dispenser System",
description:
"This intelligent medication management platform combines precision mechanical dispensing with AI-assisted monitoring to ensure patients receive the right medication at the right time. It integrates automation, real-time alerts, and caregiver connectivity to improve reliability.",
image: "/pill1.png"
},

{
title: "AI-Powered Healthcare Automation",
description:
"An advanced automation platform that reduces human error in healthcare using AI, real-time monitoring, and predictive analytics to improve decision-making and patient safety.",
image: "/Screenshot 2026-03-16 190047.png"
},

{
title: "Intelligent Robotics & Automation",
description:
"Next-generation robotic systems engineered for precision environments such as healthcare labs and automated facilities, combining intelligent control and advanced robotics.",
image: "/robnvo.png"
}
];

/*TEAM */ 
const team = [
{
name: "Shriyansh",
role: "Co-Founder & CTO",
domain: "Innovation & Product Architecture",
desc: "Leads the technical vision of Cognicore, focusing on hardware innovation and AI-driven system design.",
image: "/shriyansh(1)(1).jpeg"
},
{
name: "Krishna",
role: "Co-Founder & CPO",
domain: "Product Strategy & Research",
desc: "Drives product strategy and identifies new technological opportunities to build impactful solutions.",
image: "/team2.jpg"
},
{
name: "Bala",
role: "Head of Software",
domain: "Backend & Digital Operations",
desc: "Builds scalable backend systems powering Cognicore’s intelligent platforms.",
image: "/team3.jpg"
},
{
name: "Abdul",
role: "Lead Developer",
domain: "Core Software Engineering",
desc: "Develops core systems behind automation and intelligent technologies.",
image: "/team4.jpg"
}
];

export default function Home() {

const [index, setIndex] = useState(0);
const [productIndex, setProductIndex] = useState(0);
const [teamIndex, setTeamIndex] = useState(0);

/*----------------------HERO SLIDER------------------------ */

useEffect(() => {
const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % images.length);
}, 4000);
return () => clearInterval(interval);
}, []);

/* ----------------------PRODUCT SLIDER--------------------- */

useEffect(() => {
const interval = setInterval(() => {
setProductIndex((prev) => (prev + 1) % products.length);
}, 6000);
return () => clearInterval(interval);
}, []);

const nextProduct = () => {
setProductIndex((prev) => (prev + 1) % products.length);
};

const prevProduct = () => {
setProductIndex((prev) => (prev - 1 + products.length) % products.length);
};

/*----------------------------TEAM---------------------------*/
useEffect(() => {
  const interval = setInterval(() => {
    setTeamIndex((prev) => (prev + 1) % team.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

return (
<main className="bg-white text-black">

{/* ================= HOME ================= */}

<section id="home" className="min-h-screen grid grid-cols-2 items-center px-24">

<div>

<h1 className="text-6xl font-bold mb-6">

Welcome to
<span className="block text-[#9400D3]">
CogniCore
</span>

</h1>

<p className="text-black-600 text-xl leading-relaxed max-w-xl mb-10">

CogniCore Innovations develops intelligent systems powered by artificial intelligence,
robotics and cognitive technologies shaping the future of automation.

</p>

<button className="bg-[#9400D3] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">

Explore Technology

</button>

</div>


{/* HERO IMAGE */}

<div className="flex flex-col items-center">

<div className="relative w-[520px] h-[520px] overflow-hidden rounded-xl shadow-lg">

<AnimatePresence mode="wait">

<motion.div
key={images[index]}
initial={{ opacity:0, x:60 }}
animate={{ opacity:1, x:0 }}
exit={{ opacity:0, x:-60 }}
transition={{ duration:0.6 }}
className="absolute w-full h-full"
>

<Image
src={images[index]}
alt="technology"
fill
className="object-cover"
/>

</motion.div>

</AnimatePresence>

</div>

</div>

</section>
<div className="w-24 h-[3px] bg-[#9400D3] rounded-full mb-10"></div>

{/* ================= ABOUT ================= */}

<section id="about" className="px-24 py-32 grid grid-cols-2 gap-20 items-center">

{/* LEFT CARDS */}

<div className="flex flex-col gap-6">

{[
{icon:"🧠", title:"AI Systems", desc:"Advanced AI systems solving real-world challenges."},
{icon:"🤖", title:"Robotics", desc:"Autonomous systems for intelligent automation."},
{icon:"🔬", title:"Research", desc:"Cutting-edge work in ML and intelligent systems."}
].map((item,i)=>(
<motion.div
key={i}
initial={{x:-40, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{duration:0.5 + i*0.1}}
viewport={{once:true}}
className="bg-white border border-gray-200 p-6 rounded-xl 
shadow-[0_10px_30px_rgba(0,0,0,0.12)] 
hover:shadow-[0_15px_40px_rgba(148,0,211,0.2)] 
transition duration-300 flex gap-4"
>
<div className="text-3xl text-[#9400D3]">{item.icon}</div>
<div>
<h3 className="text-xl font-semibold">{item.title}</h3>
<p className="text-black-600 text-sm">{item.desc}</p>
</div>
</motion.div>
))}

</div>


{/* RIGHT TEXT */}

<div>

<h2 className="text-5xl font-bold mb-6 text-[#9400D3]">
About CogniCore
</h2>

<h3 className="text-2xl text-black-500 mb-8">
<a>Building the Future of Intelligent Systems</a>
</h3>

<Typewriter
text={`CogniCore Innovations is a next-generation technology startup focused on developing intelligent automation systems powered by artificial intelligence and advanced engineering.

Our mission is to design innovative solutions that bridge the gap between AI, robotics, and real-world applications.

We aim to build a global innovation company combining deep engineering expertise, intelligent software, and visionary thinking.`}
/>

</div>

</section>

<div className="w-24 h-[3px] bg-[#9400D3] rounded-full mb-10"></div>
{/* ================= PRODUCTS ================= */}

<section id="products" className="px-24 py-10 bg-white">

<div className="grid grid-cols-2 gap-20 items-center">

{/* LEFT */}

<div>

<p className="text-5xl font-bold mb-6 text-[#9400D3]">
PRODUCTS
</p>

<h2 className="text-3xl font-bold mb-6 text-black">
What We’re  <span className=  "text-[#9400D3]">BUILDING</span>
</h2>

<p className="text-black-800 mb-6  text-lg leading-relaxed max-w-xl">
We are building intelligent systems that integrate artificial intelligence,
robotics, and advanced engineering to solve real-world challenges and
redefine automation.
</p>

</div>


{/* RIGHT SLIDER */}

<div className="relative w-[520px] h-[520px] mx-auto">

<AnimatePresence mode="wait">

<motion.div
key={productIndex}
initial={{opacity:0, x:60}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:-60}}
transition={{duration:0.6}}
className="absolute w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
>

{/* IMAGE */}

<div className="relative h-[55%] w-full">

<Image
src={products[productIndex].image}
alt="product"
fill
className="object-cover"
/>

</div>

{/* TEXT */}

<div className="p-6">

<h3 className="text-2xl font-bold mb-3 text-[#9400D3]">
{products[productIndex].title}
</h3>

<p className="text-black-600 text-sm leading-relaxed">
{products[productIndex].description}
</p>

</div>

</motion.div>

</AnimatePresence>


{/* PROGRESS BAR */}

<div className="absolute bottom-[-25px] left-0 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">

<motion.div
key={productIndex}
initial={{width:0}}
animate={{width:"100%"}}
transition={{duration:6, ease:"linear"}}
className="h-full bg-[#9400D3]"
/>

</div>


{/* ARROWS */}

<button
onClick={prevProduct}
className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white border p-3 rounded-full shadow hover:scale-110 transition"
>
<svg width="20" height="20" fill="none" stroke="black" strokeWidth="2">
<path d="M13 16l-5-5 5-5"/>
</svg>
</button>

<button
onClick={nextProduct}
className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white border p-3 rounded-full shadow hover:scale-110 transition"
>
<svg width="20" height="20" fill="none" stroke="black" strokeWidth="2">
<path d="M7 4l5 5-5 5"/>
</svg>
</button>

</div>

</div>

</section>

<div className="w-24 h-[3px] bg-[#9400D3] rounded-full mb-10"></div>


{/* ================= WHY COGNICORE (GRID STYLE) ================= */}

<section className="px-24 py-32 bg-white">

{/* TOP TEXT */}


<div className="text-center mb-16">
<p className="text-5xl font-bold mb-6 ">
<span className="text-[#9400D3]">WHY</span> us ?
</p>


<h2 className="text-5xl font-bold mb-4">
What Sets Us <span className="text-[#9400D3]">Apart</span>
</h2>

</div>


{/* CARDS GRID */}

<div className="grid grid-cols-4 gap-8">

{[
{
title: "Deep-Tech Innovation",
desc: "A relentless mindset focused on pushing the boundaries of what technology can achieve."
},
{
title: "Real-World Problem Solving",
desc: "Every product is designed to address tangible challenges in healthcare, automation, and beyond."
},
{
title: "AI + Hardware Integration",
desc: "Seamless fusion of intelligent software with precision-engineered hardware systems."
},
{
title: "Startup Agility",
desc: "The speed and flexibility of a startup combined with rigorous engineering excellence."
}
].map((item, i) => (

<motion.div
key={i}
initial={{opacity:0, y:40}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5 + i * 0.1}}
viewport={{once:true}}
className="bg-white border border-gray-200 rounded-2xl p-8 
shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
hover:shadow-[0_20px_50px_rgba(148,0,211,0.25)]
hover:-translate-y-2
transition duration-300 cursor-pointer"
>

{/* ICON */}

<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#9400D3]/10 mb-6">

<svg width="24" height="24" fill="none" stroke="#9400D3" strokeWidth="2">

{ i === 0 && <path d="M12 2l4 4h-3v4h-2V6H8l4-4z"/> }

{ i === 1 && <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/> }

{ i === 2 && <path d="M4 6h16v12H4z"/> }

{ i === 3 && <path d="M12 2l8 8-8 8-8-8 8-8z"/> }

</svg>

</div>


{/* TITLE */}

<h3 className="text-xl font-semibold mb-3">
{item.title}
</h3>


{/* TEXT */}

<p className="text-black-600 leading-relaxed text-base">
{item.desc}
</p>

</motion.div>

))}

</div>


</section>
<div className="w-24 h-[3px] bg-[#9400D3] rounded-full mb-10"></div>


{/* ================= TEAM + VISION ================= */}

<section className="px-24 py-32 grid grid-cols-2 gap-20 items-center bg-white">

{/* ================= LEFT: TEAM SLIDER ================= */}

<div className="relative w-[420px] h-[630px] ">

<AnimatePresence mode="wait">

<motion.div
key={teamIndex}
initial={{opacity:0, x:60}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:-60}}
transition={{duration:0.5}}
className="absolute w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
>

{/* IMAGE */}

<div className="relative h-[60%] w-full">

<Image
src={team[teamIndex].image}
alt="team"
fill
className="object-cover"
/>

</div>

{/* INFO */}

<div className="p-6">

<h3 className="text-2xl font-bold text-[#9400D3]">
{team[teamIndex].name}
</h3>

<p className="text-black font-semibold mb-2">
{team[teamIndex].role}
</p>

<p className="text-gray-600 mb-3 text-sm">
{team[teamIndex].domain}
</p>

<p className="text-black text-meh leading-relaxed">
{team[teamIndex].desc}
</p>

</div>

</motion.div>

</AnimatePresence>


{/* PROGRESS BAR */}

<div className="absolute bottom-[-20px] left-0 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">

<motion.div
key={teamIndex}
initial={{width:0}}
animate={{width:"100%"}}
transition={{duration:5, ease:"linear"}}
className="h-full bg-[#9400D3]"
/>

</div>

</div>


{/* ================= RIGHT: VISION ================= */}

<div>

<p className="text-black font-bold text-4xl mb-3">
  OUR <span className="text-[#9400D3]">VISION</span>
</p>

<h2 className="text-5xl font-bold mb-6">
Redefining <span className="text-[#9400D3]">What's Possible</span>
</h2>

<p className="text-black font-semibold text-xl leading-relaxed mb-6">
To become a global innovation company building technologies that merge AI,
robotics, and intelligent systems to solve real-world challenges.
</p>

<p className="text-black-700 text-lg leading-relaxed">
Our goal is to create products that are not just smart, but transformational
for industries like healthcare, automation, and advanced engineering.
</p>

</div>

</section>




</main>
);
}
