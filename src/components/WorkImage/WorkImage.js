import styles from '@/styles/Home.module.scss'

const WorkImage = props => {
    return (
        <div className={styles.workimage} key={props.id}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.imageWorkimage} src={props.src} alt={props.alt} />
        </div>
    )
};

export default WorkImage