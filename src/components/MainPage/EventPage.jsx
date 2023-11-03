import GoodsList from "./GoodsList"
import styles from './EventPage.module.css';
import productsData from "../../productList.json";

export default function EventPage () {
    const products = productsData;
    return (
        <div className={styles.EventMain}>
            <div className={styles.nowHot}>
                <GoodsList event={products.Event}/>
            </div>
        </div>
    )
}