// http://facebook.github.io/jest/docs/en/tutorial-async.html#content
import * as api from '../api'

const tickers = [
    {
        active: 1,
        company_name: "TickerTags Test",
        exchange: "",
        formatted_date: "March 20, 2017",
        industry: "",
        library_update_epoch: 1490008440,
        longname: "TickerTags Test",
        sector: "",
        ticker: "$TESTING",
        trading: 0,
        user_id: 133,
        username: "leongaban"
    }
]

export const getMyTickers = ({ user, start, limit, order }) => {
    const parameters = [];
    let url = api.tickersManage;

    if (start) { parameters.push(`start=${start}`); }
    if (limit) { parameters.push(`limit=${limit}`); }
    if (order) { parameters.push(`order=${order}`); }
    if (user.id) { parameters.push(`user_id=${user.id}`); }
    if (parameters.length > 0) { url += `?${parameters}.join('&');` }

    // return api.getTickersManage(`?${parameters}`)
    //     .then((myTickers) => myTickers);

    return new Promise((resolve, reject) => {
        process.nextTick(
            user.id === 133 ? resolve(tickers) : reject({
                error: `User with id ${user.id} not found.`
            })
        )
    });
};