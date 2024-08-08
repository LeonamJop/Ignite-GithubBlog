import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts' 
import { Home } from './components/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  )
}