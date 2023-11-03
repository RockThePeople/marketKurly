import style from './PdPrice.module.css';

export default function PdPrice ({price, discountRate}) {
    const formattedPrice = price.toLocaleString();
    const sellPrice = parseInt(price*(100-discountRate)/100);
    const formattedSellPrice = sellPrice.toLocaleString();
    return (
        <div>
            {discountRate && <p className={style.priceStrike}> 
                {formattedPrice}원
            </p> }
            <div className={style.price}>
                {discountRate && <p className={style.discountRate}> {discountRate}% </p>}
                <p className={style.sellPrice}> {formattedSellPrice}원 </p>
            </div>
        </div>
    )
}