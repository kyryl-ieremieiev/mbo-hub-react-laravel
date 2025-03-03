import Card from "../card/card";

interface Props {
    skill: any;
}

export default function SkillCard({ skill }: Props) {
    return(
        <Card>
            <h3>{skill.title}</h3>
            <div dangerouslySetInnerHTML={{__html: skill.description}} />
        </Card>
    );
}