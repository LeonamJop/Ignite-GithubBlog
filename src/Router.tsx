import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts' 

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<h1>Teste</h1>} />
        <Route path="/" element={<h1>Teste</h1>} />
      </Route>
    </Routes>
  )
}