import React, { useEffect, useState } from 'react';
import Good from '../Good/Good';
import productsData from '../../productList.json'; // Assuming you've imported the updated JSON data
import styles from "./Goods.module.css";

function Goods({Event}) {

  const event = Event;
  const [ currIndex, setCurrIndex] = useState(0);
  const products = productsData;
  const eventFilter = products.filter(product => product.Event == event);
  const goodsShow = eventFilter.slice(currIndex, currIndex+4);
  const handleNext = () => {
    setCurrIndex((prevIndex)=>prevIndex+4 >= eventFilter.length ? 0 : prevIndex + 4);
  }
  const handlePrev = () => {
    setCurrIndex((prevIndex)=>prevIndex-4 < 0 ? eventFilter.length-(eventFilter.length%4)-4 : prevIndex - 4);
  }
  const NextText = ">";
  const PrevText = "<";

  const EventClassify = {
    "HOT" : "지금 가장 핫한 상품 🔥",
    "Beauty" : "💖뷰티컬리페스타 단독 특가",
  }

  return (
    <div>
      <h1>{EventClassify[event]} {NextText}</h1>
      <ul className={styles.Container}>
      <button className={styles.PrevBtn} onClick={handlePrev}>{PrevText}</button>
        {goodsShow.map((product) => (
          <li key={product.id} className={styles.Good}>
            <a>
            <Good className="good" product={product.info} />
            </a>
          </li>
        ))}
        <button className={styles.NextBtn} onClick={handleNext}>{NextText}</button>
      </ul>
    </div>
  );
}

export default Goods;
