import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import withDraggableColumns from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';

const ReactTableDraggableColumns = withDraggableColumns(ReactTable);

function DraggableTable({ draggableColumns, data, columns, ...props }) {
    return (
        <ReactTableDraggableColumns
            draggableColumns={draggableColumns}
            data={data}
            pageSize={data.length}
            showPagination={false}
            columns={columns}
            {...props}
        />
    )
}

export default DraggableTable
