import React from 'react'

const SecondLateralBar = props => {
    return(
        <div className="second-lateral-bar hidden">
            <div className="container-sample">
                <div className="title-oe">
                    <span>PORTFOLIO-REACT</span>
                </div>
                <div className="wrapper-portfolio-editor">
                    <div className="layer client-main" onClick={props.handleSubMenu}>
                        <i className="fas fa-angle-down rotate"></i>
                        <span>client</span>
                    </div>
                        {
                        props.activeSubmenu ? (
                        <div className="sub-menu">
                            <div className="layer api-mars" onClick={props.handleMars}>
                                <i className="fas fa-angle-down"></i>
                                <span>Mars</span>
                            </div>
                            <div id="mars" className="sub-container hidden">
                                <div id="sub-mars" className="sub-layer" onClick={props.showSnippetMars}>
                                    <i className="fab fa-js"></i>
                                    <span>introMars.js</span>
                                </div>
                                <div className="sub-layer" onClick={props.showVideoMars}>
                                    <i className="fas fa-play-circle"></i>
                                    <span>previewMars.ogv</span>
                                </div>
                            </div>
                            <div className="layer greenlink" onClick={props.handleGl}>
                                <i className="fas fa-angle-down"></i>
                                <span>TheGreenLink</span>
                            </div>
                            <div id="gl" className="sub-container hidden">
                                <div className="sub-layer" onClick={props.showSnippetGl}>
                                    <i className="fab fa-js"></i>
                                    <span>introGL.js</span>
                                </div>
                                <div className="sub-layer" onClick={props.showVideoGl}>
                                    <i className="fas fa-play-circle"></i>
                                    <span>previewGL.ogv</span>
                                </div>
                            </div>
                            <div className="layer st-swapi" onClick={props.handleSwapi}>
                                <i className="fas fa-angle-down"></i>
                                <span>StarWarsApi-Swapi</span>
                            </div>
                            <div id="swapi" className="sub-container hidden">
                                <div className="sub-layer" onClick={props.showSnippetSwapi}>
                                    <i className="fab fa-js"></i>
                                    <span>starWars.js</span>
                                </div>
                                <div className="sub-layer" onClick={props.showVideoSwapi}>
                                    <i className="fas fa-play-circle"></i>
                                    <span>previewSW.ogv</span>
                                </div>
                            </div>
                            <div className="layer starwars" onClick={props.handleJokes}>
                                <i className="fas fa-angle-down"></i>
                                <span>StarWars-Jokes</span>
                            </div>
                            <div id="jokes" className="sub-container hidden">
                                <div className="sub-layer" onClick={props.showSnippetJokes}>
                                    <i className="fab fa-js"></i>
                                    <span>starWarsJokes.js</span>
                                </div>
                                <div className="sub-layer" onClick={props.showVideoJokes}>
                                    <i className="fas fa-play-circle"></i>
                                    <span>previewJokes.ogv</span>
                                </div>
                            </div>
                            <div className="layer puppeteer" onClick={props.handlePuppeteer}>
                                <i className="fas fa-angle-down"></i>
                                <span>Scraping-Github</span>
                            </div>
                            <div id="pupp" className="sub-container hidden">
                                <div className="sub-layer" onClick={props.showSnippetPupp}>
                                    <i className="fab fa-js"></i>
                                    <span>puppeteer.js</span>
                                </div>
                                <div className="sub-layer" onClick={props.showVideoPupp}>
                                    <i className="fas fa-play-circle"></i>
                                    <span>previewScr.ogv</span>
                                </div>
                            </div>
                        </div>
                            ) : null
                        }
                    <div className="layer last-layer" onClick={props.showJson}>
                        <span className="ae-curly">{`{}`}</span>
                        <span>package.json</span>
                    </div> 
                    <div className="layer last-layer" onClick={props.showReadme}>
                        <i className="fas fa-info-circle"></i>
                        <span>README.md</span>
                    </div>    
                    <div className="layer last-layer" onClick={props.showEnv}>
                        <i className="fas fa-cog"></i>
                        <span>.aemabit</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SecondLateralBar
