import styles from "./videoSection.module.css";

interface Props {
    title: string;
    videoUrl: string;
}

export default function VideoSection({ title, videoUrl }: Props) {
    return(
        <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <iframe className={styles.video} width="560" height="315" src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
      </section>
    );
}