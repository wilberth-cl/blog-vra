import { useState } from 'react'
import viteLogo from './../assets/vite.svg'
import reactLogo from './../assets/react.svg'
import Layout from '../component/layout/Layout';
import './../App.css'

function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    <div className="App pt-10">
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl'>Vite + React</h1>
      <div className="mt-6">
        <button className="rounded-md bg-slate-800 p-2 hover:border-2 border-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </Layout>
  )
}

export default Welcome;
