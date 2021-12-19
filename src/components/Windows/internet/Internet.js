import React, { useState, useEffect } from 'react'
import Homepage from './Homepage'
import NotFound from './NotFound'
import NewPage from './NewPage'
import NewPage2 from './NewPage2'
import '../../../style/net.css'

import Loading from './Loading'
import NetButtons from './NetButtons'

function Internet() {
    const [pageList, setPageList] = useState([
        {component: <Homepage />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net"},
        {component: <NewPage />, title: "New Page", id: "newpage", url: "http://www.newpage.com"},
        {component: <NewPage2 />, title: "New Page 2", id: "newpage2", url: "http://www.newpage2.com"},
        {component: <NotFound />, title: "404 Not Found", id: "not-found", url: ""},
    ])

    const homePage = {current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"}

    const [page, setPage] = useState(homePage)

    const [pageTerm, setPageTerm] = useState("http://www.scape.net")

    const [prevPage, setPrevPage] = useState([])
    const [nextPage, setNextPage] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        if (!loading) {
            let netWindow = document.getElementById("net-window")
            let winTitle = netWindow.firstChild.firstChild
            winTitle.innerHTML = page.title
    
            let netInput = document.querySelector(".net-input")
            netInput.value = page.url
        }
    }, [page, loading])

    useEffect(()=> {

    }, [loading])

    useEffect(()=> {
        let enterEvent = (e) => {
            if (e.key === 'Enter') {
                findPage()
            }
        }

        document.addEventListener('keypress', enterEvent);
        return () => {
            document.removeEventListener('keypress', enterEvent);
        }
    })

    const handleVisit = () => {
        findPage()
    }

    useEffect(()=> {
        let checkValue = pageTerm
        let link = `http://www.`
        if (!checkValue.includes(link)) {
            setPageTerm(`http://www.${pageTerm}`)
        }
    }, [pageTerm])

    const isLoading = () => {
        setLoading(true)
        let loadInterval = (Math.random() * (3 - 2) + 2) * 1000;
        console.log(loadInterval)
        setInterval(() => {setLoading(false)}, loadInterval);
    }

    const setHome = () => {
        isLoading()
        setPrevPage([...prevPage, page])
        setPage({...page, current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"})
    }
    
    const refresh = () => {
        isLoading()
        setPage({...page, current: page.current, title: page.title, pageID: page.pageID, url: page.url})
    }

    const searchPageTerm = e => {
        setPageTerm(e.target.value)
    }

    const findPage = () => {
        isLoading()
        let match = false
        for (let i = 0; i < pageList.length; i++) {
            if (pageTerm === pageList[i].url) {
                match = true
                setPrevPage([...prevPage, page])
                setPage({...page, current: pageList[i].component, title: pageList[i].title, pageID: pageList[i].id, url: pageList[i].url})
            }
        }
        if (!match) {
            setPrevPage([...prevPage, page])
            setPage({...page, current: <NotFound />, title: "404 Not Found", pageID: "not-found", url: pageTerm}) 
        }
    }

    const setBack = () => {
        setPrevPage(prevPage => prevPage.filter(item => item !== prevPage[prevPage.length  - 1]));
    }

    const goBack = () => {
        isLoading()
        if (prevPage.length > 0) {
            setNextPage([...nextPage, page])
            setPage(prevPage[prevPage.length  - 1])
            setBack()
        }
    }

    const setForward = () => {
        setNextPage(nextPage => nextPage.filter(item => item !== nextPage[nextPage.length  - 1]));
    }

    const goForward = () => {
        isLoading()
        if (nextPage.length > 0) {
            setPrevPage([...prevPage, page])
            setPage(nextPage[nextPage.length  - 1])
            setForward()
        }
    }

    if (loading) {
        return (
            <div className="internet">
                <div className="net-header">
                    <NetButtons setHome={setHome} goBack={goBack} goForward={goForward} refresh={refresh}/>
    
                    <div className="net-input-container">
                        <div className="net-location">Location:</div>
                        <input className="net-input" type="text" defaultValue={page.url} onChange={searchPageTerm} />
                    </div>
                </div>
                <div className="net-page" id={page.pageID}>
                    <Loading />
                </div>
            </div>
        )
    } else {
        return (
            <div className="internet">
                <div className="net-header">
                    <NetButtons setHome={setHome} goBack={goBack} goForward={goForward} refresh={refresh}/>
    
                    <div className="net-input-container">
                        <div className="net-location">Location:</div>
                        <input className="net-input" type="text" defaultValue={page.url} onChange={searchPageTerm} />
                        <button className="visit-page-button" onClick={handleVisit}>Enter</button>
                    </div>
                </div>
                <div className="net-page" id={page.pageID}>
                    {page.current}
                </div>
            </div>
        )
    }
}

export default Internet
