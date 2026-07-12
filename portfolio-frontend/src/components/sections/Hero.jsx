import { Button } from "@/components/ui/button.jsx";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center gap-9 px-6">
            <p className="text-5xl font-bold tracking-tight">
                👋 Hi, I'm Aayush Basnet
            </p>

            <p className="text-3xl font-medium text-gray-800">
                Full-Stack MERN Developer
            </p>

            <p className="max-w-2xl text-xl leading-8 text-gray-700">
                I build responsive and scalable web applications using MongoDB,
                Express, React, and Node.js.
            </p>

            <Button className="cursor-pointer rounded-full bg-blue-600 px-8 py-7 text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                Download Resume
            </Button>
        </div>
    );
};

export default Hero;