import React from "react";
import {connect} from "react-redux";
import Buyers from "./Buyers";
import {sortBuyers} from "../../redux/buyers-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    buyers: state.buyersPage.buyers
})

export default connect(mapStateToProps, {sortBuyers})(Buyers);