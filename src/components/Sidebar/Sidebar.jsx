import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss"
import {connect} from "react-redux";

const Sidebar = (props) => {

    return (
        <div>
            {props.isAuth
                ? <div className={styles.sidebar}>
                    <div className={styles.avatar}>
                        <img src={props.avatar}/>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.sidebarItem}>
                            <NavLink to="/terminals">Терминалы</NavLink>
                        </div>
                        <div className={styles.sidebarItem}>
                            <NavLink to="/buyers">Покупатели</NavLink>
                        </div>
                    </div>
                    <div className={`${styles.footer} card-footer text-center`}>Copyright @ 2020</div>
                </div>
                : ""
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    avatar: state.auth.avatar,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(Sidebar);
;