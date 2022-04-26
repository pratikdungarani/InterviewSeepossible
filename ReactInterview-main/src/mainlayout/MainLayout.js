import React from 'react'
const Header = React.lazy(() => import("components/Hader"));
const Footer = React.lazy(() => import("components/Footer"));


const  MainLayout = ({children}) =>  {
  return (
    <React.Fragment>
        <div>
            <Header />
                <div className='page_content'>
                    {children}
                </div>
            <Footer />
        </div>
    </React.Fragment>
  )
}

export default MainLayout;