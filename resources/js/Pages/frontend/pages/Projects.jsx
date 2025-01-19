import HomeLayout from "@/Layouts/HomeLayout.jsx";
import ProjectCard from "@/Pages/frontend/component/ProjectCard.jsx";
import {Head, Link} from "@inertiajs/react";

export default function Projects() {
    return (
        <HomeLayout>
            <Head title="Projects"/>
            <div className="flex lg:h-[calc(100vh-12rem)] justify-center items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <Link href={route('projects')}>
                        <ProjectCard image={'project1.png'} heading={'Project 1'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'} heading={'Project 2'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project1.png'} heading={'Project 3'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project1.png'} heading={'Project 4'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'} heading={'Coming Soon'} />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'project2.png'} heading={'Coming Soon'} />
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}
