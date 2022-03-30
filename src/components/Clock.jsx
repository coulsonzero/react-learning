import React from 'react'



class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    // 挂载 - 挂载完成后执行
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000)
    }
  
    // 卸载
    componentWillUnmount() {
      // 组件卸载后清除定时器，释放内存
      clearInterval(this.timerID)
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
    }
  
    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
}
  
export default Clock