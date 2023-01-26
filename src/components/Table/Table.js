import "./Table.css";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from 'react-bootstrap-table2-editor';

import { columns } from "../utils/constants";
// import { useState } from "react";
// import { useEffect } from "react";

function Table({ books, selectedRow, setSelectedRow }) {
    const selectRow = {
        mode: "radio",
        // clickToSelect: true,
        // clickToExpand: true,
        onSelect: handleOnSelect,
        // selectionHeaderRenderer: ({ mode, checked, indeterminate }) => {
        //   console.log(mode, checked, indeterminate)
        //   return "X"
        // },
        selectionHeaderRenderer: ({ mode, ...rest }) => (
          // <input type={ mode } { ...rest } />
          <button className="table__all-radio-btn" onClick={() => {
            if (selectedRow !== '') {
              setSelectedRow('');
            } else {
              console.log('nothing selected')
            }
          }}></button>
        )
    };

    // const expandRow = {
    //     // showExpandColumn: true,
    //     renderer: (row) => (
    //         <div>
    //             <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
    //             <p>
    //                 You can render anything here, also you can add additional
    //                 data on every row object
    //             </p>
    //             <p>
    //                 expandRow.renderer callback will pass the origin row object
    //                 to you
    //             </p>
    //         </div>
    //     ),
    // };

    // function handleDeleteRow(rowId) {
    //   console.log(selectedRows)
    // }

    function handleOnSelect(row, isSelect) {
        if (isSelect) {
            setSelectedRow(row);
        } else {
            setSelectedRow("");
        }
        // console.log(selectedRows)
        // handleDeleteRow(row.id);
    }
    // console.log(books)
    return (
        <BootstrapTable
            classes="table"
            // condensed
            bootstrap4
            // striped
            hover
            keyField="id"
            data={books}
            columns={columns}
            filter={filterFactory()}
            selectRow={selectRow}
            // expandRow={expandRow}
            cellEdit={ cellEditFactory({ mode: 'click' }) }
        />
    );
}

export default Table;
