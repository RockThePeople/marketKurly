import styles from "./PdComBtn.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function PdComBtn () {
    return (
        <div>
            <button className={styles.Btn}>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000", fontSize:"18px"}}/>
                &nbsp; 담기 
            </button>
        </div>
    )
}