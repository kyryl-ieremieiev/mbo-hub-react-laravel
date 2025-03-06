"use client";

import styles from "./projectPage.module.css"

import CenteredSection from "@/components/centeredSection/centeredSection";
import Header from "@/components/header/header";
import { getContent } from "@/util/content/useContent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }>}) {
    const router = useRouter();

    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            const { slug } = await params;

            const fetchedProject = await getContent(`projects/${slug}`);

            console.log(fetchedProject);

            setProject(fetchedProject);
            setLoading(false);
        }
        fetchData();
    }, []);

    if(!project && !loading) return router.replace('/404');
    
    if(!project) return;

    return (
        <>
            <Header fullHeight={false} imagePath={project.image ? `${process.env.NEXT_PUBLIC_API_IMG_URL}/${project.image}` : null}>
                <h1>{project.title}</h1>
            </Header>

            <CenteredSection>
                <div className={styles.content} dangerouslySetInnerHTML={{__html: project.content}}></div>
            </CenteredSection>
        </>
    );
}