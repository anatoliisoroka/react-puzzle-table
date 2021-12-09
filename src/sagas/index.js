import { all, put, select, takeLatest } from 'redux-saga/effects';
// src
import { loadMoreUsersRequested, loadUsersSucceeded } from '../redux/slice';
import userApi from '../api/userApi';

function* loadUsers(action) {
    const size = action? action.payload.size : 50

    const originUsers = yield select(
        state => state.users
    )

    if (originUsers.length > 500) {
        yield put(loadUsersSucceeded({
            users: originUsers,
            hasMore: false
        }));
    } else {
        const { users } = yield userApi.getUser(size);

        yield put(loadUsersSucceeded({
            users: originUsers.concat(users),
            hasMore: true
        }));
    }
}

function* rootSaga() {
    yield all([
        loadUsers(),
        yield takeLatest(loadMoreUsersRequested, loadUsers)
    ])
}
  
export default rootSaga
