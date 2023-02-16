import React from "react";

const Table = (props) => {
    return(
    <> 
    <tr>
    <td>{props.id}</td>
    <td>{props.particular}</td>
    <td>{props.amount}</td>
    </tr>
    </>
    );
}

export default Table;