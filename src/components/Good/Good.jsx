import PdImage from "./PdImage";
import PdInfo from "./PdInfo";
import PdPrice from "./PdPrice";
import PdComment from "./PdComment";
import PdComBtn from "./PdComBtn";
import styles from "./Good.module.css";

export default function Good ({product}) {
    const { imageURL, name, brand, price, discountRate, Comments } = product;
    return (
        <div className={styles.Container}>
            <PdImage imageURL={imageURL} name={name}/>
            <PdComBtn />
            <PdInfo brand={brand} name={name}/>
            <PdPrice price={price} discountRate={discountRate}/>
            <PdComment Comments={Comments}/>
        </div>
    );
}