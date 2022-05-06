import React from "react"
import {Dropdown, Button, Space, Menu, message} from "antd"
import {DownOutlined, UserOutlined} from "@ant-design/icons"

function CheckboxList() {
	const dropdownLabel = ["全部基金", "全部主管合伙人", "全部负责人"]
	const menu = (
		<Menu
			onClick={handleMenuClick}
			items={[
				{
					label: "1st menu item",
					key: "1",
					icon: <UserOutlined />
				},
				{
					label: "2nd menu item",
					key: "2",
					icon: <UserOutlined />
				},
				{
					label: "3rd menu item",
					key: "3",
					icon: <UserOutlined />
				}
			]}
		/>
	)

	function handleMenuClick(e) {
		message.info("Click on menu item.")
		console.log("click", e)
	}

	const labelArr = dropdownLabel.map((item, index) => {
		return (
			<div key={index}>
				<Dropdown overlay={menu}>
					<Button>
						<Space>
							{item}
							<DownOutlined />
						</Space>
					</Button>
				</Dropdown>
			</div>
		)
	})
	return (
		<div>
			<ul style={{display: "flex", columnGap: "10px"}}>{labelArr}</ul>
		</div>
	)
}

export default CheckboxList
