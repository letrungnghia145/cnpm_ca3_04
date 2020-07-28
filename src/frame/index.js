import { Header, Main, Footer, PageLoader } from './components'


import React from 'react'

const Frame = (props) => {
    return (
        <React.Fragment>
            {/* <PageLoader></PageLoader> */}
            <Header></Header>
            <Main>{props.content}</Main>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Frame;
