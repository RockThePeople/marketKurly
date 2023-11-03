import Category from "./Category";
import EventPage from "./EventPage";
import Headers from "./Headers";
import styles from "./HomePage.module.css";

export default function HomePage () {
    return (
        <div className={styles.Main}>
            <Headers />
            <Category />
            <EventPage/>
        </div>
    )
}