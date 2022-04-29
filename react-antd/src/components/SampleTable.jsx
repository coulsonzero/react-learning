import React from "react"
import {Table} from "antd"

export class SampleTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{
					title: "姓名",
					dataIndex: "name",
					key: "name",
				},
				{
					title: "年龄",
					dataIndex: "age",
					key: "age",
				},
				{
					title: "住址",
					dataIndex: "address",
					key: "address",
				},
			],
			dataSource: [
				{
					key: "1",
					name: "胡彦斌",
					age: 32,
					address: "西湖区湖底公园1号",
				},
				{
					key: "2",
					name: "胡彦祖",
					age: 42,
					address: "西湖区湖底公园1号",
				},
			],
		}
	}
	render() {
		const {dataSource, columns} = this.state
		return <Table dataSource={dataSource} columns={columns} />
	}
}

export default SampleTable
