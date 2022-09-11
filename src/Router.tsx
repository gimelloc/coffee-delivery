import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Delivery } from './pages/Delivery'
import { Home } from './pages/Home'
import { Payment } from './pages/Payment'

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Payment" element={<Payment />}/>
            <Route path="/Delivery" element={<Delivery />}/>
            </Route>
        </Routes>
    )
}