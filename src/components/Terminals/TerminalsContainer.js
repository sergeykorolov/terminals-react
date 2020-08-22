import React from "react";
import Terminals from "./Terminals";
import {connect} from "react-redux";
import {addTerminal, removeTerminal} from "../../redux/terminals-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    terminals: state.terminalsPage.terminals
})

export default connect(mapStateToProps, {addTerminal, removeTerminal})(Terminals);