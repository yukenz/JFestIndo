import { createBrowserRouter } from 'react-router-dom'
import EventPage from './pages/EventPage'
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children : [{
            path: "event",
            element : <EventPage/>
        }]

    }
])

export default router