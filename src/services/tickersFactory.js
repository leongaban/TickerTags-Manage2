import * as api from './api'

export const getMyTickers = ({ user, start, limit, order }) => {
    const parameters = [];
    let url = api.tickersManage;

    if (start) { parameters.push(`start=${start}`); }
    if (limit) { parameters.push(`limit=${limit}`); }
    if (order) { parameters.push(`order=${order}`); }
    if (user.id) { parameters.push('user_id=' + user.id); }
    if (parameters.length > 0) { url += `?${parameters}.join('&');` }

    return api.getTickersManage(`?${parameters}`)
        .then((myTickers) => myTickers);
};