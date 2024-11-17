import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './store/store.js'
import SignUpPage from './pages/SignuP.JSX'
import Loginpage from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Allposts from './pages/AllPosts.jsx'
import AddForm from './pages/Add.jsx'
import Edit from './pages/Edit.jsx'
import Post from './pages/Post.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Protect from './components/Header/Authenticate.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: (
                <Protect authentication={false}>
                    <Loginpage />
                </Protect>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protect authentication={false}>
                    <SignUpPage />
                </Protect>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protect authentication>
                    {" "}
                    <Allposts />
                </Protect>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protect authentication>
                    {" "}
                    <AddForm />
                </Protect>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protect authentication>
                    {" "}
                    <Edit />
                </Protect>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post/>,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
