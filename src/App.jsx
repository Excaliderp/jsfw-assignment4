import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArticleComponent from "./Article"

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(insert url)
    .then((response) => {
      return response.json()
      debugger
    })
    .then((data) => {
      console.log(data)
      setArticles(data)
      //debugger
    })
  }, [])

  return (
    <div className='App'>
      {articles.map((article) => <ArticleComponent></ArticleComponent>)}
    </div>
  )
}

export default App
