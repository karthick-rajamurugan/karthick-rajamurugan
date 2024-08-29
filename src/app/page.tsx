"use client";
import { CardStack } from "./components/ui/card-stack";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { Button } from "./components/ui/moving-border";
import confetti from "canvas-confetti";
var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const handleConfetti = () => {
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  };


export default function CardStackDemo() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
    Cauvery College for Women{" "}
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="">Happy Teachers Day</span>
        </div>
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="">Happy Teachers Day</span>
        </div>
      </div>
    </h2>
   
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
    <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={handleConfetti} auto
      >
        Click me !!
      </Button>
  </BackgroundBeamsWithCollision>
    
  );
}


const CARDS = [
  {
    id: 0,
    name: "Aaron Bacal",
    designation: "American cartoonist",
    content: (
      <p>Your heart is slightly larger than the average human heart, but that is because you are a teacher.</p>
    ),
  },
  {
    id: 1,
    name: "Sidney Hook",
    designation: "American philosopher",
    content: (
      <p>
        Everyone who remembers his own education remembers teachers, not methods and techniques. The teacher is the heart of the educational system.
      </p>
    ),
  },
  {
    id: 2,
    name: "Michael Morpurgo",
    designation: "English author",
    content: (
      <p>
        It is the teacher that makes the difference. Not the classroom
      </p>
    ),
  },
];
