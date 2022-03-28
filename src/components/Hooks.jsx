import React, {useState, useEffect} from 'react'

export default function Header() {
  // 初始化变量counter
  const [count, setCount] = useState(0)
  // 加载时触发，每次更新都会触发， 注意不是ES6方法！！注意写法
  useEffect(() => alert("Count: " + count))

  // function
  const increment = () => setCount(count + 1)

  return (
		<div>
			<p>{count}</p>
			<button onClick={increment}>+</button>
		</div>
	);
}
