import { Badge } from "@/components/ui/badge"

const Skills = () => {

    const skills = [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "Linux"
    ];

    return (
        <div className="max-w-4xl mx-auto">

            <div className="flex flex-col justify-center  items-center min-h-screen gap-8 px-6  ">

                <p className="text-4xl font-bold tracking-tight">
                    Skills</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {
                        skills.map((skill, index) => (
                            <div key={index} >

                                <Badge
                                    className="rounded-full bg-blue-600 px-5 py-2.5 text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 "
                                >
                                    {skill}
                                </Badge>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Skills