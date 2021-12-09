const UserService = {
    setUserToken(columns) {
        const token = {
            user: 'authenticated',
            columns: columns || []
        }
        localStorage.setItem('user_token', JSON.stringify(token))
    },
    getUserToken() {
        return localStorage.getItem('user_token')
    },
    removeUserToken() {
        localStorage.removeItem('user_token')
    }
}

export default UserService
