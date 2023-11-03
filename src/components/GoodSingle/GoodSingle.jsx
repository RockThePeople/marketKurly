import PdImage from "../Good/PdImage";
import PdInfo from "../Good/PdInfo";
import PdComBtn from "../Good/PdComBtn";
import PdPrice from "../Good/PdPrice";
import styles from "./GoodSingle.module.css";
import PdComment from "../Good/PdComment";
import productData from "../../productList.json";
import Headers from "../MainPage/Headers";
import Category from "../MainPage/Category";

export default function GoodSingle() {
    const product = productData.find(item => item.id == 1);
    return (
        <div>
            <Headers />
            <Category />
            <div>
                <PdImage imageURL={product.info.imageURL} name={product.info.name} />
                <div className={styles.productMain}>
                    <PdComBtn />
                    <PdInfo brand={product.info.brand} name={product.info.name} />
                    <PdPrice price={product.info.price} discountRate={product.info.discountRate} />
                    <PdComment Comments={product.info.Comments} />
                </div>
            </div>
        </div>
    )
}
