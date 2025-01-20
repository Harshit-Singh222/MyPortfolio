import {useRef, useState} from "react";

export default function ProjectCard({image, toolTip}) {
    const [isHovered, setIsHovered] = useState(false);

    const toolTipRef = useRef(null);
    const container = useRef(null);

    return (
        <div ref={toolTipRef} className="group relative inline-block"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <span
                className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-gray-100 py-1 px-2 rounded absolute bottom-full mb-2 ml-[20%] whitespace-nowrap"
                ref={toolTipRef}>
                {toolTip}
            </span>
            <div
                className="relative shadow-lg bg-gray-100 border-4 border-gray-400 hover:border-gray-100/15 rounded-md cursor-pointer">
                <img src={`/asset/image/${image}`}
                     alt="Project Image"
                     className={"w-full h-full inset-0 object-cover " + (isHovered ? "opacity-20" : "")}/>
                <div className={`absolute top-[45%] left-1/3 transition-opacity delay-100 duration-300 ease-in-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                >
                    {isHovered && (
                        <div className="">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Click To View
                            </h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

