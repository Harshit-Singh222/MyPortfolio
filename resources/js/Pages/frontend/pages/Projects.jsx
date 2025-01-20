import HomeLayout from "@/Layouts/HomeLayout.jsx";
import ProjectCard from "@/Pages/frontend/component/ProjectCard.jsx";
import {Head, Link} from "@inertiajs/react";

export default function Projects() {
    return (
        <HomeLayout>
            <Head title="Projects"/>
            <div className="flex lg:h-[calc(100vh-12rem)] justify-center items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <a target="_blank" href="https://github.com/Harshit-Singh222/PMS">
                        <ProjectCard image={'project1.png'} toolTip={'yooo ntjh hrtjb sbejb jeb'} />
                    </a>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project1.png'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project1.png'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'} toolTip={'yooo ntjh hrtjb sbejb jeb'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'}  />
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}
