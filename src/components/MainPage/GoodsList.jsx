import Goods from "./Goods";
import styles from "./GoodsList.module.css";

export default function GoodsList({event}) {
    
    return (
        <div>
            <div className={styles.Lists}>
                <Goods className={styles.HotList} Event="HOT"/>
                <Goods className={styles.HotList} Event="Beauty"/>
            </div>
        </div>
    )
}