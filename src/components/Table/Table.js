import "./Table.css";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import {columns} from '../utils/constants';



function Table({books}) {
    return <BootstrapTable classes="table" condensed bootstrap4 striped hover keyField="id" data={books} columns={columns} />;
}

export default Table;
