import PdComments from "./PdAdditions/PdComments";
import PdDescriptImage from "./PdAdditions/PdDescriptImage";
import PdDetails from "./PdAdditions/PdDetails";
import PdQna from "./PdAdditions/PdQna";
import styles from "./PdAddition.module.css";

export default function PdAddition() {
    return (
        <div className={styles.productAllInfo}>
            <PdDescriptImage />
            <PdDetails />
            <PdComments />
            <PdQna />           
        </div>
    )
}