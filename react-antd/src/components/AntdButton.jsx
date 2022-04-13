import React from "react"
import {Button} from "antd"
import {DownloadOutlined} from "@ant-design/icons"

function AntdButton() {
	const size = "large"
	return (
		<div className="container">
			<Button type="primary">Button</Button>
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
		</div>
	)
}

export default AntdButton
