import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default/DefaultLayout'
import { Home } from './pages/Home'
import { CardSection } from './pages/CardSection'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/card-section" element={<CardSection />} />
      </Route>
    </Routes>
  )
}
