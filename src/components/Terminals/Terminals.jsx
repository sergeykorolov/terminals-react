import React, {useState} from "react";
import styles from "./Terminals.module.scss"
import {Redirect} from "react-router";

const Terminals = ({isAuth, terminals, addTerminal, removeTerminal}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tryAddTerminal, setTryAddTerminal] = useState(false);

    const onAddTerminal = () => {
        if (title) {
            const terminal = {title: title, description: description}
            addTerminal(terminal);
            setTitle("");
            setDescription("");
            setTryAddTerminal(false);
        } else {
            setTryAddTerminal(true);
        }
    }

    if (!isAuth) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={styles.terminalsPage}>
            <form>
                <h2>Терминалы</h2>
                <div className={styles.contentBox}>
                    <div className="form-group">
                        <label htmlFor="title">Название терминала</label>
                        <input type="text"
                               className="form-control"
                               id="title"
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                        />
                        {!title && tryAddTerminal
                            ? <small id="title" className="form-text text-muted"
                            >Заполните поле Название терминала</small>
                            : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Описание</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        >
                    </textarea>
                    </div>
                </div>
                <span className="btn btn-primary" onClick={onAddTerminal}>Добавить</span>
            </form>
            <h3 className={styles.listTerminalsTitle}>Список терминалов</h3>
            <div className={styles.contentBox}>
                {terminals.length
                    ? <table className={styles.table}>
                        <tbody>
                        {terminals.map(terminal =>
                            <tr key={terminal.id}>
                                <td key={terminal.id} scope="row">{terminal.title}</td>
                                <td width="100">
                                    <button className="btn btn-info" onClick={() => removeTerminal(terminal.id)}>Удалить</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    : <div>Терминалов нет</div>
                }
            </div>
        </div>
    )
}

export default Terminals;