import { useEffect, useState } from 'react'

type HealthResponse = {
  status: string
  service: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data: HealthResponse) => {
        setHealth(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <main>
      <h1>Fullstack Base</h1>

      <p>React funcionando.</p>

      <p>
        API:{' '}
        {health
          ? `${health.service} - ${health.status}`
          : 'carregando...'}
      </p>
    </main>
  )
}

export default App