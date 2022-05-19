import React from "react"
import {Button, Radio, DatePicker, version, Tooltip} from "antd"
import {
	DownloadOutlined,
	SearchOutlined,
	PoweroffOutlined,
} from "@ant-design/icons"

import "antd/dist/antd.css"

class AntdButton extends React.Component {
	state = {
		size: "large",
		loadings: [],
	}

	handleSizeChange = (e) => {
		this.setState({size: e.target.value})
	}
	enterLoading = (index) => {
		this.setState(({loadings}) => {
			const newLoadings = [...loadings]
			newLoadings[index] = true

			return {
				loadings: newLoadings,
			}
		})
		setTimeout(() => {
			this.setState(({loadings}) => {
				const newLoadings = [...loadings]
				newLoadings[index] = false

				return {
					loadings: newLoadings,
				}
			})
		}, 6000)
	}

	render() {
		const {size, loadings} = this.state
		return (
			<div className="container">
				<h1>antd version: {version}</h1>

				{/* 单选框组 */}
				<Radio.Group value={size} onChange={this.handleSizeChange}>
					<Radio.Button value="large">Large</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="small">Small</Radio.Button>
				</Radio.Group>

				{/* 日期选择框 */}
				<DatePicker />

				{/* 按钮 */}
				<Button type="primary">Primary Button</Button>
				<Button
					type="primary"
					shape="circle"
					icon={<DownloadOutlined />}
					size={size}
				/>
				<Button
					type="primary"
					shape="round"
					icon={<DownloadOutlined />}
					size={size}>
					Download
				</Button>

				<Button
					type="primary"
					loading={loadings[0]}
					onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined />}
					loading={loadings[1]}
					onClick={() => this.enterLoading(1)}>
					Click me!
				</Button>

				{/* 搜索按钮 */}
				<Tooltip title="search">
					<Button type="primary" shape="circle" icon={<SearchOutlined />} />
				</Tooltip>
			</div>
		)
	}
}

export default AntdButton
