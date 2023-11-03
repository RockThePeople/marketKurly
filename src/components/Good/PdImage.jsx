 import styles from "./PdImage.module.css";
 
 export default function PdImage({imageURL, name}) {
    return (
        <div>
            <img className={styles.PdImage} src={imageURL} alt={name} />
        </div>
    )
}