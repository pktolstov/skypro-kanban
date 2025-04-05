import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PopNewCard from '../components/PopNewCard/PopNewCard'
import PopBrowse from '../components/PopBrowse/PopBrowse'
import Main from '../components/Main/Main'
import { LoadExpect } from '../components/Adition/Adition'
import PopUser from '../components/PopUser/PopUser'
import { GlobalStyles } from '../GlobalStyles.styled'
import Header from '../components/Header/Header'

function MainPage({ loading }) {
    return (
        <>
            <GlobalStyles />
            <div className="wrapper">
                <Header />
                {loading ? <LoadExpect /> : <Main />}
                <Outlet />
            </div>
        </>
    )
}

export default MainPage
