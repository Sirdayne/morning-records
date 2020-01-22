import moment from 'moment';

function getDates() {
    const dates = []
    let initDate = moment('2020-01-01')
    const PERIOD_DAYS = moment().add(15, 'days').diff(initDate, 'days')
    for (let i = 0; i <= PERIOD_DAYS; i++) {
        dates.push({
            date: initDate.format('DD/MM/YYYY'),
            weight: localStorage.getItem(initDate.format('DD/MM/YYYY')) ? localStorage.getItem(initDate.format('DD/MM/YYYY')) : 0
        })
        initDate.add(1, 'days')
    }
    return dates
}

export { getDates };