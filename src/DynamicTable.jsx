import Table from "./Table";
import myData from "./myData";

const DynamicTable = () => {
    return(
    <>
       <table>
  <tr>
    <th>S.No.</th>
    <th>Particulars</th>
    <th>Amount</th>
  </tr>
    {
    myData.map((val,ind)=>{
    return <Table 
    key={ind}
    id={val.id}
    particular={val.particular}
    amount={val.amount} />
    })
    }
    </table>
    </>
    );
}

export default DynamicTable;