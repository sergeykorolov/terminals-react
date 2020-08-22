const SORT_BUYERS = 'SORT_BUYERS';

let initialState = {
    buyers: [
        {id: 1, name: 'Stan', check: 2000, buyCount: 20, totalProfit: 50000 },
        {id: 2, name: 'Vasya', check: 4200, buyCount: 14, totalProfit: 20000},
        {id: 3, name: 'Masha', check: 5400, buyCount: 34, totalProfit: 55554},
        {id: 4, name: 'Kenny', check: 3050, buyCount: 23, totalProfit: 33000},
        {id: 5, name: 'Eric', check: 1480, buyCount: 16, totalProfit: 12545},
        {id: 6, name: 'Batters', check: 4500, buyCount: 65, totalProfit: 123545},
        {id: 7, name: 'Vlad', check: 6500, buyCount: 34, totalProfit: 5463545},
        {id: 8, name: 'Lena', check: 3500, buyCount: 87, totalProfit: 17683},
        {id: 9, name: 'Batters', check: 7230, buyCount: 54, totalProfit: 86745},
        {id: 10, name: 'Eric', check: 8300, buyCount: 98, totalProfit: 7866345},
        {id: 11, name: 'Stan', check: 3500, buyCount: 43, totalProfit: 768345},
        {id: 12, name: 'Kyle', check: 8400, buyCount: 34, totalProfit: 1546345},
        {id: 13, name: 'Kenny', check: 6200, buyCount: 76, totalProfit: 5464768},
        {id: 14, name: 'Arnold', check: 3400, buyCount: 23, totalProfit: 456774},
        {id: 15, name: 'Jack', check: 9600, buyCount: 98, totalProfit: 542778}
    ],
}

const buyersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SORT_BUYERS: {
            const sortedBuyers = state.buyers.sort(function (a, b) {
                if (a[action.sortParam] > b[action.sortParam]){
                    return -1;
                }
                if (a[action.sortParam] < b[action.sortParam]){
                    return 1;
                }
                return 0;
            })
            return {...state, buyers: sortedBuyers}
        }
        default:
            return state;
    }
}

export const sortBuyers = (sortParam) => ({type: SORT_BUYERS, sortParam})

export default buyersReducer;