import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import moment from 'moment';
// src
import DraggableTable from './DraggableTable';
import { loadMoreUsersRequested, setColumnsState } from '../redux/slice';

function CustomTable() {
    const users = useSelector(state => state.users)
    const hasMore = useSelector(state => state.hasMore)
    const columns = useSelector(state => state.columns)
  
    const [data, setData] = useState([])
  
    useEffect(() => {
        let data = [];
    
        users.map(user => {
            let newUser = {
                ...user,
                fullName: `${user.firstName} ${user.lastName}`,
                dsr: moment().diff(moment(user.registered_at, 'MMM Do YYYY'), 'days')
            }
            data.push(newUser)
        })
    
        setData(data)
    }, [users])
  
    const dispatch = useDispatch();
  
    const loadMore = () => {
        dispatch(
            loadMoreUsersRequested({
                size: 50
            })
        );
    }

    const changeColumn = (columns) => {
        dispatch(setColumnsState({ columns }))
    }
  
    const draggableColumns = useMemo(() => ({
        mode: 'reorder',
        draggable: ['id', 'firstName', 'lastName', 'fullName', 'email', 'city', 'registered_at', 'dsr'],
        onDraggedColumnChange: changeColumn
    }), {})
  
    return (
        <>
            {data.length? (
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMore}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <DraggableTable
                        draggableColumns= {draggableColumns}
                        data={data}
                        columns={columns}
                    />
                </InfiniteScroll>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default CustomTable
