import {useState} from "react";

export default function ProjectCard({heading, image, children}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => (setIsHovered(true))}
             onMouseLeave={() => (setIsHovered(false))}>
            <div className="relative shadow-lg bg-gray-100 border-4 border-gray-400 hover:border-gray-100/15 rounded-md cursor-pointer">
                <img src={`/asset/image/${image}`}
                     alt="Project Image"
                     className={"w-full h-full inset-0 object-cover " + (isHovered ? "opacity-20" : "")  }/>
                <div className={`absolute top-[45%] left-1/3 transition-opacity delay-100 duration-300 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {isHovered && (
                        <div className="">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                {heading}
                            </h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

