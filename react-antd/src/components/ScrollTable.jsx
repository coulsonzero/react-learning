import React from "react"
import {Card, Table, Tag} from "antd"

class ScrollTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{
					title: "项目名称",
					dataIndex: "projectName",
					fixed: "left",
					width: 100,
				},
				{
					title: "主管合伙人",
					dataIndex: "partner",
					fixed: "left",
					width: 120,
				},
				{
					title: "负责人",
					dataIndex: "leader",
					fixed: "left",
					width: 100,
				},
				{
					title: "投资基金",
					dataIndex: "investmentFund",
					render: (text, record) => {
						return text == null ? "-" : <Tag color="default">{text}</Tag>
					},
					fixed: "left",
					width: 120,
				},
				{
					title: "当前财务公允价值",
					dataIndex: "curFinancialFairValue",
					align: "right",
					width: 160,
					render: (text, record) => {
						return text == null ? "-" : <span>${parseFloat(text).toFixed(2)}</span>
					},
				},
				{
					title: "Project IRR",
					dataIndex: "projectIRR",
					align: "right",
					render: (text, record) => {
						return text == null ? "-" : <span>{parseFloat(text).toFixed(2) + "%"}</span>
					},
					width: 150,
				},
				{
					title: "预测财务公允价值1",
					dataIndex: "forecastFinancialFairValue1",
					// ellipsis: true,
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR1",
					dataIndex: "forecastProjectIRR1",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值2",
					dataIndex: "forecastFinancialFairValue2",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR2",
					dataIndex: "forecastProjectIRR2",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值3",
					dataIndex: "forecastFinancialFairValue3",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR3",
					dataIndex: "forecastProjectIRR3",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值4",
					dataIndex: "forecastFinancialFairValue4",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR4",
					dataIndex: "forecastProjectIRR4",
					align: "right",
					width: 150,
				},

				{
					title: "累计投资金额",
					dataIndex: "total_investment_amount",
					width: 150,
				},
				{
					title: "工场当前成本",
					dataIndex: "current_cost",
					width: 150,
				},
				{
					title: "累积退出收入",
					dataIndex: "total_exit_income",
					width: 150,
				},
				{
					title: "累积退出收益/亏损",
					dataIndex: "total_exit_income_loss",
					width: 150,
				},
				{
					title: "公司当前投后估值",
					dataIndex: "company_current_valuation",
					width: 150,
				},
				{
					title: "唯一编码",
					dataIndex: "unique_code",
					width: 150,
				},

				{
					title: "计算值",
					dataIndex: "CalculatValue",
					align: "right",
					fixed: "right",
					width: 150,
				},
			],
			dataSource: [
				{
					key: 1,
					projectName: "项目名称1",
					partner: "合伙人1",
					leader: "负责人1",
					investmentFund: "RMB Fundl",
					projectIRR: "-34.32",
					curFinancialFairValue: "870479.00",
				},
				{
					key: 2,
					projectName: "项目名称2",
					partner: "合伙人2",
					leader: "负责人2",
					investmentFund: "Fundl",
					projectIRR: "83.67",
					curFinancialFairValue: "1870479.00",
				},
				{
					key: 3,
					projectName: "项目名称3",
					partner: "合伙人3",
					leader: "负责人3",
					investmentFund: "Marvel Fundl",
					projectIRR: "62.46",
					curFinancialFairValue: "70479.00",
				},
			],
		}
	}
	render() {
		const {dataSource, columns} = this.state
		return (
			<div style={{width: "80vw"}}>
				<Card style={{width: "100%", borderRadius: 15, marginTop: 15, overflow: "hidden"}} bodyStyle={{padding: 0}}>
					<Table columns={columns} dataSource={dataSource} scroll={{x: 1500, y: 300}} bordered={false} pagination={false} />
				</Card>
			</div>
		)
	}
}

export default ScrollTable
