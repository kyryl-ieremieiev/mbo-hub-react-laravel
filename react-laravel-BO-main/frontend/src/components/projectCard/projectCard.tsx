import ImageCard from "../imageCard/imageCard";

interface Props {
    project: any;
}

export default function ProjectCard({ project }: Props) {
    const regex = /((\s*\S+){15})([\s\S]*)/;
    const subst = `$1...`;

    const previewText = project.content.replace(regex, subst);

    return (
        <ImageCard imagePath={project.image ? `${process.env.NEXT_PUBLIC_API_IMG_URL}/${project.image}` : null} link="#">
            <h3>{project.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: previewText }} />
            <p className="stylized" style={{ marginTop: "auto" }}>Lees meer</p>
        </ImageCard>
    );
}