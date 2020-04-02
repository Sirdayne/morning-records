import moment from 'moment';
import http from '../services/http'

const fetchDates = () => {
    let records = []
    return http.get('/records').then(res => {
                if (res && res.data && res.data.length > 0) {
                    records = res.data
                    return setDates(records)
                }
            })
}

const setDates = (records) => {
    let dates = []
    let initDate = moment('2020-01-01')
    const PERIOD_DAYS = moment().add(15, 'days').diff(initDate, 'days')
    for (let i = 0; i <= PERIOD_DAYS; i++) {
        let found = records.find(record => record.date === initDate.format('DD/MM/YYYY'))
        if (found) {
            dates.push(found)
        } else {
            dates.push({
                id: null,
                date: initDate.format('DD/MM/YYYY'),
                weight: 0,
                trained: false
            })
        }
        initDate.add(1, 'days')
    }
    return dates
}

export { fetchDates }