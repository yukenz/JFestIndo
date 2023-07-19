import { createBrowserRouter } from 'react-router-dom'
import EventPage from './pages/EventPage'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout><HomePage /></RootLayout>,
        children: [{
            path: "event",
            element: <EventPage />
        }]

    }
])

export default router