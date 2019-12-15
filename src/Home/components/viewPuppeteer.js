import React from 'react'
import Typist from 'react-typist';
import ReactPlayer from 'react-player'

const Scraping = props => {
    return(
        <>
            <div id="screen-puppeteer" className="screen hidden">
            {   
                props.renderMsgGithub? (
                    <div className="wrapper-screen">
                        <div className="numbers">
                        <Typist cursor={{ hideWhenDone: true }}>
                                <Typist.Delay ms={0} />
                                <div>1</div>
                                <Typist.Delay ms={500} />
                                <div>2</div>
                                <Typist.Delay ms={500} />
                                <div>3</div>
                                <Typist.Delay ms={700} />
                                <div>4</div>
                                <Typist.Delay ms={0} />
                                <div>5</div>
                                <Typist.Delay ms={500} />
                                <div>6</div>
                                <Typist.Delay ms={500} />
                                <div>7</div>
                                <Typist.Delay ms={500} />
                                <div>8</div>
                                <Typist.Delay ms={500} />
                                <div>9</div>                             	
                                <Typist.Delay ms={500} />
                                <div>10</div>
                                <Typist.Delay ms={500} />
                                <div>11</div>
                                <Typist.Delay ms={700} />
                                <div>12</div>
                                <Typist.Delay ms={700} />
                                <div>13</div>
                                <Typist.Delay ms={700} />
                                <div>14</div>
                            </Typist>
                            </div>
                        <Typist 
                            avgTypingDelay={20} 
                            cursor={{ hideWhenDone: true }}
                        >
                            <div className="code-snippet">
                                <span><span id="blue">import</span> React from <span id="yellow">'react'</span></span><br></br>
                                <span><span id="blue">import</span> <span id="yellow">'./App.css'</span></span><br></br>
                                <span><span id="blue">import</span> ScrapingGithub from <span id="yellow">'./src/NodeAndPuppeteer'</span></span><br></br>
                                <br></br>
                                <br></br>
                                <span id="blue">const App = <span id="yellow">{` () `}</span>=><span id="yellow">{`(`}</span></span> <br></br>
                                <span id="blue">&nbsp;&nbsp;{`return (`}                                    </span><br></br>
                                <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`<div className='container'>`}     </span><br></br>
                                <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<ScrapingGithub />`}    </span><br></br>
                                <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}                          </span><br></br>
                                <span id="blue">&nbsp;&nbsp;{`)`}                                           </span><br></br>
                                <span id="yellow">{`)`}                                                       </span><br></br>
                                <span>export default <span id="yellow">App</span>                 </span><br></br>
                            </div>
                        </Typist>
                    </div>
                ) :null
            }
            </div>
            <div id="player-puppeteer" className="player hidden">
                <div>
                    <span> previewScr.ogv is not displayed in the editor because it is either binary or uses an unsupported text encoding. 
                        <span className="video-puppeteer" onClick={props.showGithubVideo}>Do you want to open it anyway?</span>
                    </span>
                </div>
                <div className="container-player">
                    {
                        props.videogith ? (
                        <div className="end-video">
                            <ReactPlayer
                                className='react-player'
                                url="https://aemabitfolder.sfo2.digitaloceanspaces.com/scrapinggithub.ogv"
                                width='50%'
                                height='50%'
                                controls={true}
                                muted={true}
                            />
                        </div>
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}

export default Scraping
