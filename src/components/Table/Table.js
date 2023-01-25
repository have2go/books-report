import "./Table.css";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory from "react-bootstrap-table2-filter";

import { columns } from "../utils/constants";

const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    clickToExpand: true,
};

const expandRow = {
    showExpandColumn: true,
    renderer: row => (
      <div>
        <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
      </div>
    )
  };

function Table({ books }) {
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
            expandRow={expandRow}
        />
    );
}

export default Table;
