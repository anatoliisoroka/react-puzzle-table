import { createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService';

const userToken = JSON.parse(UserService.getUserToken());
const userColumns = userToken?.columns.length? userToken.columns: null;

const orginalColumns = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Full Name',
        accessor: 'fullName',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'Registed Date',
        accessor: 'registered_at',
    },
    {
        Header: 'DSR',
        accessor: 'dsr',
    }
]

export const Slice = createSlice({
    name: 'Slice',
    initialState: {
        hasMore: true,
        users: [],
        columns: userColumns || orginalColumns
    },
    reducers: {
        loadMoreUsersRequested: () => {
            
        },
        loadUsersSucceeded: (state, action) => {
            const { users, hasMore } = { ...action.payload }
            state.users = users
            state.hasMore = hasMore
        },
        setColumnsState: (state, action) => {
            state.columns = action.payload.columns
        },
        resetColumnState: (state) => {
            state.columns = orginalColumns
            UserService.setUserToken([])
        }
    }
})

export const { 
    loadMoreUsersRequested, 
    loadUsersSucceeded, 
    setColumnsState, 
    resetColumnState 
} = Slice.actions;

export default Slice.reducer;
