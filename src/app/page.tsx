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
    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
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
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center h-full">
    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black  font-sans tracking-tight pt-8">
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
   
    <div className="h-[30rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />

    </div>
    <Button
        borderRadius="1.75rem"
        className="bg-white  text-black  border-neutral-200 "
        onClick={handleConfetti}
      >
        Click me !!
      </Button>
  </BackgroundBeamsWithCollision>
    
  );
}


const CARDS = [
  {
    id: 0,
    name: " With  love,",
    designation: "  Students XOXO 📚💖",
    content: (
      <p>Dear Teachers, We just wanted to send a little love your way and say how thankful we are for all of you. You’ve been like a second family to us — always there with a smile, a kind word, and the patience of saints! From making learning feel like a fun journey to always believing in us, you’ve filled our days with so much warmth and joy. 💖🌹🎓Thank you for being the heart and soul of our learning experience. We're so lucky to have you all in our life! 🙏💕</p>
    ),
  },
  {
    id: 1,
    name: " அன்புடன், ",
    designation: "காவேரி கல்லூரி மாணவிகள்.🌼",
    content: (
      <p>அன்பு ஆசிரியர்களே,  இது உங்களுக்கான ஒரு அன்பு கடிதம், எங்கள் நெஞ்சில் நிறைந்த நன்றியின் ஒரு சிறு துளி! 💖 உங்களுடன் இருந்த ஒவ்வொரு நாளும் எங்களுக்கு ஒரு அற்புதமான அனுபவம் - பாடங்களை பாடல்களாக மாற்றி, கற்றலின் வழியே மகிழ்ச்சி வீச வைத்தீர்கள். 📚✨  நீங்கள் எங்கள் கனவுகளுக்கு நிறம் தீட்டினீர்கள், எங்களுடைய சிறந்தவைகளை வெளிக்காட்ட உதவினீர்கள். 🙏 உங்களால் தான் இன்று நாங்கள் நன்றாக இருக்கிறோம்.நன்றி,</p>
    ),
  },
  
];
