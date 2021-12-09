import namor from 'namor'
import moment from 'moment'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const newPerson = i => {
    return {
        id: Date.now() + i,
        firstName: namor.generate({ words: 1, saltLength: 0 }),
        lastName: namor.generate({ words: 1, saltLength: 0 }),
        email: `${namor.generate({ words: 1, saltLength: 0 })}@example.com`,
        city: namor.generate({ words: 1, saltLength: 0 }),
        registered_at: moment(randomDate(new Date(2012, 0, 1), new Date())).format('MMM Do YYYY'),
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(i => {
            return {
                ...newPerson(i)
            }
        })
    }

    return makeDataLevel()
}
