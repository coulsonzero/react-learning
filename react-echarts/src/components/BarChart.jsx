import React from 'react'
import * as echarts from 'echarts'
import { useEffect, useRef  } from 'react'

const BarChart = () => {
    // 使用ref获取dom元素
    const domRef = useRef()

    function chartInit() {
        const myChart = echarts.init(domRef.current)

        myChart.setOption({
            title: {
                text: "ECharts 入门示例"
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        })
    }

    // 控制挂载时机
    useEffect(() => {
        chartInit()
    }, [])

    return (
        <div>
            <div ref={domRef} style={{width: '600px', height: '400px'}}></div>
        </div>
    )
}

export default BarChart