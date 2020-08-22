import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ошибка 404</h2>
            <div className={styles.contentBox}>Страница не найдена !</div>
        </div>
    )
}

export default ErrorPage;