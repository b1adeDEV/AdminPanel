import {Table, TableColumnsType} from "antd";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'First name',
        dataIndex: 'first_name',
    },
    {
        title: 'Last name',
        dataIndex: 'last_name',
    },
];


type TProps = {
    data:DataType[]
}

const Tables = (props:TProps) => {
    const data = props.data
    return(
        <div className={"table"}>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    )
};

export default Tables;