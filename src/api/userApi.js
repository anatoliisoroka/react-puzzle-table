import makeData from "./makeData"

const userApi = {
    getUser(size) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    users: makeData(size)
                })
            }, 1000)
        })
    }
}

export default userApi
