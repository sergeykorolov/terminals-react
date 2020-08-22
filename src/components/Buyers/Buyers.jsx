import React, {useEffect, useState} from "react";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";
import styles from "./Buyers.module.scss";

const Buyers = ({isAuth, buyers, sortBuyers}) => {

    const [itemsCountPerPage, setItemsCountPerPage] = useState(5);
    const [buyersForPaging, setBuyersForPaging] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [sortField, setSortField] = useState("");
    const [filterText, setFilterText] = useState("");
    const [filteredBuyers, setFilteredBuyers] = useState(buyers);

    useEffect(() => {
        let from = (pageNumber - 1) * itemsCountPerPage;
        let to = pageNumber * itemsCountPerPage - 1;
        setBuyersForPaging(filteredBuyers.filter((buyer, index) => (index >= from && index <= to)));
    }, [itemsCountPerPage, pageNumber, sortField, filteredBuyers]);

    useEffect(() => {
        setFilteredBuyers(buyersFilter());
        setPageNumber(1);
    }, [filterText]);

    useEffect(() => {
        setPageNumber(1);
    }, [itemsCountPerPage]);

    const handlePageChange = (pageNumber) => {
        setPageNumber(pageNumber);
    }

    const buyersFilter = () => {
        return buyers.filter(buyer => buyer.name.toLowerCase().indexOf(filterText.toLowerCase()) + 1)
    }

    if (!isAuth) {
        return <Redirect to={"/"}/>
    }

    const onSortBuyers = (sortParam) => {
        sortBuyers(sortParam);
        setSortField(sortParam);
        setFilteredBuyers(buyersFilter());
        setPageNumber(1);
    }

    return (
        <div>
            <h2>Покупатели</h2>
            <div className={styles.contentBox}>
                <div>
                    <label htmlFor="search">Поиск по имени</label><br/>
                    <input className="form-control"
                           id="search"
                           type="text"
                           value={filterText}
                           onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID покупателя</th>
                        <th scope="col">Имя покупателя</th>
                        <th onClick={() => onSortBuyers("check")} scope="col">
                            <div className={styles.thWrapper}>
                            <span>Средний чек</span>
                            <span className={`${sortField === 'check' ? styles.active : ''} dropdown-toggle`}></span>
                            </div>
                        </th>
                        <th onClick={() => onSortBuyers("buyCount")} scope="col">
                            <div className={styles.thWrapper}>
                            <span>Количество покупок</span>
                            <span className={`${sortField === 'buyCount' ? styles.active  : ''} dropdown-toggle`}></span>
                            </div>
                        </th>
                        <th onClick={() => onSortBuyers("totalProfit")} scope="col">
                            <div className={styles.thWrapper}>
                            <span>Общая выручка</span>
                            <span className={`${sortField === 'totalProfit' ? styles.active  : ''} dropdown-toggle`}></span>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {buyersForPaging.map(buyer =>
                        <tr key={buyer.id}>
                            <th scope="row"><NavLink to={`/buyers/${buyer.id}`}>{buyer.id}</NavLink></th>
                            <td>{buyer.name}</td>
                            <td>{buyer.check}</td>
                            <td>{buyer.buyCount}</td>
                            <td>{buyer.totalProfit}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div className="text-right">Показывать по: {itemsCountPerPage}</div>
            </div>
            <div className={styles.pagingWrapper}>
                <Pagination
                    activePage={pageNumber}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={filteredBuyers.length}
                    pageRangeDisplayed={5}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={handlePageChange}
                />
                <ul className="pagination">
                    <li onClick={() => setItemsCountPerPage(5)}
                        className={`${itemsCountPerPage === 5 ? 'active' : ''} page-item`}>
                        <a className="page-link">5</a></li>
                    <li onClick={() => setItemsCountPerPage(10)}
                        className={`${itemsCountPerPage === 10 ? 'active' : ''} page-item`}>
                        <a className="page-link">10</a></li>
                    <li onClick={() => setItemsCountPerPage(15)}
                        className={`${itemsCountPerPage === 15 ? 'active' : ''} page-item`}>
                        <a className="page-link">15</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Buyers;