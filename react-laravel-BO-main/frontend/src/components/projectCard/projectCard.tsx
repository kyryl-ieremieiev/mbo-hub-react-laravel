import ImageCard from "../imageCard/imageCard";
import Tags from "../tag/tags";

interface Props {
    project: any;
}

export default function ProjectCard({ project }: Props) {
    const regex = /((\s*\S+){15})([\s\S]*)/;
    const subst = `$1...`;

    const previewText = project.content.replace(regex, subst);

    const tags = project.tags && project.tags.map((tag: any) => ({ name: tag.name }));

    return (
        <ImageCard banner={project.amsterdam_750_slider} imagePath={project.image ? `${process.env.NEXT_PUBLIC_API_IMG_URL}/${project.image}` : null} link={`/projects/${project.slug}`}>
            <Tags tags={tags} />
            <h3>{project.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: previewText }} />
            <p className="stylized" style={{ marginTop: "auto" }}>Lees meer</p>
        </ImageCard>
    );
}