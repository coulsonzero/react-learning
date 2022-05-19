import React, {Component} from "react"
import axios from "axios"

import {Input, Table, Tag, Popconfirm} from "antd"
const {Search} = Input

class SearchInput extends Component {
	state = {
		url: "http://localhost:8080/data",
		data: [],
		columns: [
			{
				title: "Name",
				dataIndex: "name",
				key: "name",
				render: (text) => <>{text}</>
			},
			{
				title: "Age",
				dataIndex: "age",
				key: "age",
			},
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
			},
			{
				title: "Tags",
				key: "tags",
				dataIndex: "tags",
				render: (tags) => (
					<>
						{tags.map((tag) => {
							let color = tag.length > 5 ? "geekblue" : "green"
							if (tag === "loser") {
								color = "volcano"
							}
							return (
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							)
						})}
					</>
				),
			},
			{
				title: "Action",
				key: "action",
				render: (record) => (
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => this.handleDelete(record)}>
						<a href="#">Delete</a>
					</Popconfirm>
				),
			},
		],
	}

	// 1. 获取表格数据：Get请求
	axiosRequest = async () => {
		let res = await axios.get(this.state.url)
		res = res.data.data.reactData
		this.setState({
			data: res.data,
		})
	}

	// 2.删除表格数据：Delete请求
	handleDelete = async (record) => {
		console.log(record)
		await axios.delete(this.state.url + "/reactData/" + record.key)
		// 刷新表格数据
		this.axiosRequest()
	}

	// 3. 搜索功能：get请求
	onSearch = async (value) => {
		console.log(value)
		let res = await axios.get(this.state.url + `/?q=${value}`)
		res = res.data.data.reactData
		this.setState({
			data: res.data
		})
	}

	componentDidMount = () => {
		this.axiosRequest()
	}

	render() {
		const {data, columns} = this.state
		return (
			<>
				<Search
					placeholder="input search text"
					allowClear
					enterButton="Search"
					size="large"
					onSearch={this.onSearch}
				/>
				<Table columns={columns} dataSource={data} />
			</>
		)
	}
}

export default SearchInput
