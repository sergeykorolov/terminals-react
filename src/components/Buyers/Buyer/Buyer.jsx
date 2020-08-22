import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import styles from "./Buyer.module.scss";

const Buyer = ({isAuth, buyers, ...props}) => {

    const userId = props.match.params.buyerId;
    const buyer = buyers.find(buyer => buyer.id == userId);

    if (!isAuth) {
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            <h2>Покупатель</h2>
            <div className={styles.contentBox}>
                <ul>
                    <li><strong>Имя покупателя: </strong>{buyer.name}</li>
                    <li><strong>Средний чек: </strong>{buyer.check}</li>
                    <li><strong>Кол-во покупок: </strong>{buyer.buyCount}</li>
                    <li><strong>Общая выручка: </strong>{buyer.totalProfit}</li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    buyers: state.buyersPage.buyers
})

export default connect(mapStateToProps, {})(Buyer);