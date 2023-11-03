import style from "./PdInfo.module.css";

export default function PdInfo({brand, name}) {

    return (
        <div className={style.container}>
            <p className={style.a}>
                [{brand}] {name}
            </p>
        </div>
    );
}