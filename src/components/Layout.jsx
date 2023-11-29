import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus vero sequi quasi numquam, ipsum quam labore nulla
            quae voluptatum harum delectus laudantium illo mollitia nisi n
            emo quidem temporibus dolor deleniti pariatur veritatis esse! Corporis aut incidunt natus ipsam, nam explicabo nulla quos nemo a asperiores possimus accusamus. Adipisci culpa, eum blanditiis consequuntur vel recusandae dicta dolores error ipsam! Explicabo nihil magnam at, quisquam aut libero placeat quasi suscipit maxime rem cupiditate nemo, alias rerum eaque aliquam repudiandae possimus est ipsam! Odit eaque quia illum, sapiente iure vel fuga at quod culpa deleniti suscipit
            placeat ab nemo quos itaque neque asperiores?
            <Footer />
        </>
    )
}

export default Layout