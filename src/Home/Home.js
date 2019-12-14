import React, { Component } from 'react'
import './home.css'
import Typist from 'react-typist';
import ReactPlayer from 'react-player'
import marsVideo from './media/mars.ogv'
import swapiVideo from './media/swapi.ogv'
import thegreenlink from './media/thegreenlink.mov'
import jokesVideo from './media/starwarsjokes.ogv'
import scrapingVideo from './media/scrappinggithub.ogv'
import baffle from 'baffle'

export default class Home extends Component{
    state = {
        z: 2,
        renderMsgMars: false,
        renderMsgGl: false,
        renderMsgSwapi: false,
        renderMsgJokes: false,
        renderMsgGithub: false,
        rendeReadmeMd: false,
        videoMars: false,
        videothgl: false,
        videoswpi: false,
        videojoke: false,
        videogith: false,
        activeSubmenu: true,
        commandValue: ''
    }

    handleSubMenu = () => {
        this.setState({ activeSubmenu: !this.state.activeSubmenu })
        document.querySelectorAll('.fa-angle-down')[0].classList.toggle('rotate')
    }

    handleSecondNav = () => {
        document.querySelector('.second-lateral-bar').classList.toggle('hidden')
    }

    handleMars = () => {
        document.querySelector('#mars').classList.toggle('hidden')
        document.querySelectorAll('.fa-angle-down')[1].classList.toggle('rotate')
    }

    handleGl = () => {
        document.querySelector('#gl').classList.toggle('hidden')
        document.querySelectorAll('.fa-angle-down')[2].classList.toggle('rotate')
    }

    handleSwapi = () => {
        document.querySelector('#swapi').classList.toggle('hidden')
        document.querySelectorAll('.fa-angle-down')[3].classList.toggle('rotate')
    }

    handleJokes = () => {
        document.querySelector('#jokes').classList.toggle('hidden')
        document.querySelectorAll('.fa-angle-down')[4].classList.toggle('rotate')
    }

    handlePuppeteer = () => {
        document.querySelector('#pupp').classList.toggle('hidden')
        document.querySelectorAll('.fa-angle-down')[5].classList.toggle('rotate')
    }

    /* SCREENS */

    showSnippetMars = () => {
        this.setState({
            z: this.state.z + 1,
            renderMsgMars: true
        })
        const screenMars = document.querySelector('#screen-mars')
        screenMars.classList.remove('hidden')
        screenMars.style.zIndex = this.state.z
        document.querySelector('.tag-mars').classList.remove('hidden')
    }

    showSnippetGl = () => {
        this.setState({
            z: this.state.z + 1,
            renderMsgGl: true
        })
        const screenGl = document.querySelector('#screen-greenlink')
        screenGl.classList.remove('hidden')
        screenGl.style.zIndex = this.state.z
        document.querySelector('.tag-gl').classList.remove('hidden')
    }

    showSnippetJokes = () => {
        this.setState({
            z: this.state.z + 1,
            renderMsgJokes: true
        })
        const screenJokes = document.querySelector('#screen-st-jokes')
        screenJokes.classList.remove('hidden')
        screenJokes.style.zIndex = this.state.z
        document.querySelector('.tag-jokes').classList.remove('hidden')
    }

    showSnippetSwapi = () => {
        this.setState({
            z: this.state.z + 1,
            renderMsgSwapi: true
        })
        const screenSwapi = document.querySelector('#screen-swapi')
        screenSwapi.classList.remove('hidden')
        screenSwapi.style.zIndex = this.state.z
        document.querySelector('.tag-swapi').classList.remove('hidden')
    }

    showSnippetPupp = () => {
        this.setState({
            z: this.state.z + 1,
            renderMsgGithub : true
        })
        const screenPupp = document.querySelector('#screen-puppeteer')
        screenPupp.classList.remove('hidden')
        screenPupp.style.zIndex = this.state.z
        document.querySelector('.tag-pupp').classList.remove('hidden')
    }
    
    showVideoPupp = () => {
        this.setState({
            z: this.state.z + 1
        })
        const playerPupp = document.querySelector('#player-puppeteer')
        playerPupp.classList.remove('hidden')
        playerPupp.style.zIndex = this.state.z
        document.querySelector('.tag-video-pupp').classList.remove('hidden')
    }

    showVideoSwapi = () => {
        this.setState({
            z: this.state.z + 1
        })
        const playerSwapi = document.querySelector('#player-swapi')
        playerSwapi.classList.remove('hidden')
        playerSwapi.style.zIndex = this.state.z
        document.querySelector('.tag-video-swapi').classList.remove('hidden')
    }

    showVideoJokes = () => {
        this.setState({
            z: this.state.z + 1
        })
        const playerJokes = document.querySelector('#player-st-jokes')
        playerJokes.classList.remove('hidden')
        playerJokes.style.zIndex = this.state.z
        document.querySelector('.tag-video-jokes').classList.remove('hidden')
    }

    showVideoGl = () => {
        this.setState({
            z: this.state.z + 1
        })
        const playerGl = document.querySelector('#player-greenlink')
        playerGl.classList.remove('hidden')
        playerGl.style.zIndex = this.state.z
        document.querySelector('.tag-video-gl').classList.remove('hidden')
    }

    showVideoMars = () => {
        this.setState({
            z: this.state.z + 1
        })
        const playerMars = document.querySelector('#player-mars')
        playerMars.classList.remove('hidden')
        playerMars.style.zIndex = this.state.z
        document.querySelector('.tag-video-mars').classList.remove('hidden')
    }

    showReadme = () => {
        this.setState({
            z: this.state.z + 1,
            rendeReadmeMd: true
        })
        const readme = document.querySelector('#readme')
        readme.style.zIndex = this.state.z
        document.querySelector('.readme-view').classList.remove('hidden')
    }

    showJson = () => {
        this.setState({
            z: this.state.z + 1
        })
        const pkgJson = document.querySelector('#pkg-json')
        pkgJson.classList.remove('hidden')
        pkgJson.style.zIndex = this.state.z
        document.querySelector('.json-view').classList.remove('hidden')
    }

    showEnv = () => {
        this.setState({
            z: this.state.z + 1
        })
        const aeEnv = document.querySelector('#aemabit-env')
        baffle(".change")
            .set({
                characters : '<▒▓▓< ▓▓<<▒ ▓▓<'
            })
            .start()
            .reveal(4000)
        
        aeEnv.classList.remove('hidden')
        aeEnv.style.zIndex = this.state.z
        document.querySelector('.env-view').classList.remove('hidden')
    }

    /* CLOSE VIEWS */

    closeGl = () =>{
        document.querySelector('#screen-greenlink').classList.add('hidden')
        document.querySelector('.tag-gl').classList.add('hidden')
    }
    closeJokes = () =>{
        document.querySelector('#screen-st-jokes').classList.add('hidden')
        document.querySelector('.tag-jokes').classList.add('hidden')
    }
    closeMars = () =>{
        document.querySelector('#screen-mars').classList.add('hidden')
        document.querySelector('.tag-mars').classList.add('hidden')  
    }
    closePupp = () =>{
        document.querySelector('#screen-puppeteer').classList.add('hidden')
        document.querySelector('.tag-pupp').classList.add('hidden')
    }
    closeSwapi = () =>{
        document.querySelector('#screen-swapi').classList.add('hidden')
        document.querySelector('.tag-swapi').classList.add('hidden')
    }
    closeReadme = () =>{
        this.setState({
            rendeReadmeMd: false
        })
        document.querySelector('.readme-view').classList.add('hidden')
    }
    closeJson = () =>{
        document.querySelector('#pkg-json').classList.add('hidden')
        document.querySelector('.json-view').classList.add('hidden')
    }
    closeEnv = () =>{
        document.querySelector('#aemabit-env').classList.add('hidden')
        document.querySelector('.env-view').classList.add('hidden')
    }

    closePlayerGl = () =>{
        document.querySelector('#player-greenlink').classList.add('hidden')
        document.querySelector('.tag-video-gl').classList.add('hidden')
    }
    closePlayerJokes = () =>{
        document.querySelector('#player-st-jokes').classList.add('hidden')
        document.querySelector('.tag-video-jokes').classList.add('hidden')
    }
    closePlayerMars = () =>{
        document.querySelector('#player-mars').classList.add('hidden')
        document.querySelector('.tag-video-mars').classList.add('hidden')
    }
    closePlayerPupp = () =>{
        document.querySelector('#player-puppeteer').classList.add('hidden')
        document.querySelector('.tag-video-pupp').classList.add('hidden')
    }
    closePlayerSwapi = () =>{
        document.querySelector('#player-swapi').classList.add('hidden')
        document.querySelector('.tag-video-swapi').classList.add('hidden')
    }

    /* OPEN VIDEOS */
    
    showSwapiVideo = () => {
        this.setState({
            videoswpi: true
        })
    }
    showJokesVideo = () => {
        this.setState({
            videojoke: true
        })
    }
    showGithubVideo = () => {
        this.setState({
            videogith: true
        })
    }
    showMarsVideo = () => {
        this.setState({
            videoMars: true
        })
    }
    showTglVideo = () => {
        this.setState({
            videothgl: true
        })
    }

    /* TERMINAL */

    handleCommandChange = (event) => {       
        this.setState({
            commandValue: event.target.value
        });
    }

    submitCommand = (event) => {
        event.preventDefault();
        const inputspace = document.querySelector('#theInput')
        const commandLine = document.querySelector(".command-box")
        if(this.state.commandValue === "aemabit run introMars.js"){
            const showCommand = 
            `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML =  commandLine.innerHTML + showCommand
            window.open(
                'https://mars-curiosity-api.herokuapp.com/',
                '_blank' 
              );
        }else if(this.state.commandValue.length <= 0){
            const forDefault = 
            `
                <div className="wrapper-input">
                    <span>user@aemabit</span><span id="client">[client]</span><span id="master">(master)</span><span>$ </span>
                </div>
            `
            commandLine.innerHTML =  commandLine.innerHTML + forDefault
        }else if(this.state.commandValue === "aemabit run introGL.js"){
            const showCommand = 
            `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML =  commandLine.innerHTML + showCommand
            window.open(
                'https://thegreenlink.herokuapp.com/',
                '_blank' 
              );
        }else if(this.state.commandValue === "aemabit run starWars.js"){
            const showCommand = 
            `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML =  commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Swapi-project',
                '_blank' 
              );
        }else if(this.state.commandValue === "aemabit run starWarsJokes.js"){
            const showCommand = 
            `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML =  commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Star-API',
                '_blank' 
              );
        }else if(this.state.commandValue === "aemabit run puppeteer.js"){
            const showCommand = 
            `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML =  commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Web-Scraping-with-Puppeteer',
                '_blank' 
              );
        }else if(this.state.commandValue === "aemabit eject"){
            window.location.reload()
        }else{
            const commandError = 
            `
                <div className="wrapper-input">
                    <span>${this.state.commandValue}: command not found</span>
                </div>
            `
            commandLine.innerHTML =  commandLine.innerHTML + commandError
        }
        inputspace.value = "";
        commandLine.scrollTop = commandLine.scrollHeight
        this.setState({
            commandValue: ''
        })
    }

    render(){
        return(
            <div className="container-studio">
                <div className="title-studio">
                    <span>PORTFOLIO-REACT ANDRES MEJIAS - AEMABIT STUDIO CODE</span>
                </div>
                <div className="wrapper-box-studio">
                    <div className="first-lateral-bar">
                        <div className="lat-upper">
                            <div className="icon-acces">
                                <i className="far fa-file" onClick={this.handleSecondNav}></i>
                            </div>
                            <div className="icon-acces">
                                <i className="fas fa-hard-hat"></i>
                            </div>
                            <div className="icon-acces">
                                <i className="fas fa-hard-hat"></i>
                            </div>
                        </div>
                        <div className="lat-down">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <div className="second-lateral-bar hidden">
                        <div className="container-sample">
                            <div className="title-oe">
                                <span>PORTFOLIO-REACT</span>
                            </div>
                            <div className="wrapper-portfolio-editor">
                                <div className="layer client-main" onClick={this.handleSubMenu}>
                                    <i className="fas fa-angle-down rotate"></i>
                                    <span>client</span>
                                </div>
                                    {
                                    this.state.activeSubmenu ? (
                                    <div className="sub-menu">
                                        <div className="layer api-mars" onClick={this.handleMars}>
                                            <i className="fas fa-angle-down"></i>
                                            <span>Mars</span>
                                        </div>
                                        <div id="mars" className="sub-container hidden">
                                            <div id="sub-mars" className="sub-layer" onClick={this.showSnippetMars}>
                                                <i className="fab fa-js"></i>
                                                <span>introMars.js</span>
                                            </div>
                                            <div className="sub-layer" onClick={this.showVideoMars}>
                                                <i className="fas fa-play-circle"></i>
                                                <span>previewMars.ogv</span>
                                            </div>
                                        </div>

                                        <div className="layer greenlink" onClick={this.handleGl}>
                                            <i className="fas fa-angle-down"></i>
                                            <span>TheGreenLink</span>
                                        </div>
                                        <div id="gl" className="sub-container hidden">
                                            <div className="sub-layer" onClick={this.showSnippetGl}>
                                                <i className="fab fa-js"></i>
                                                <span>introGL.js</span>
                                            </div>
                                            <div className="sub-layer" onClick={this.showVideoGl}>
                                                <i className="fas fa-play-circle"></i>
                                                <span>previewGL.ogv</span>
                                            </div>
                                        </div>

                                        <div className="layer st-swapi" onClick={this.handleSwapi}>
                                            <i className="fas fa-angle-down"></i>
                                            <span>StarWarsApi-Swapi</span>
                                        </div>
                                        <div id="swapi" className="sub-container hidden">
                                            <div className="sub-layer" onClick={this.showSnippetSwapi}>
                                                <i className="fab fa-js"></i>
                                                <span>starWars.js</span>
                                            </div>
                                            <div className="sub-layer" onClick={this.showVideoSwapi}>
                                                <i className="fas fa-play-circle"></i>
                                                <span>previewSW.ogv</span>
                                            </div>
                                        </div>

                                        <div className="layer starwars" onClick={this.handleJokes}>
                                            <i className="fas fa-angle-down"></i>
                                            <span>StarWars-Jokes</span>
                                        </div>
                                        <div id="jokes" className="sub-container hidden">
                                            <div className="sub-layer" onClick={this.showSnippetJokes}>
                                                <i className="fab fa-js"></i>
                                                <span>starWarsJokes.js</span>
                                            </div>
                                            <div className="sub-layer" onClick={this.showVideoJokes}>
                                                <i className="fas fa-play-circle"></i>
                                                <span>previewJokes.ogv</span>
                                            </div>
                                        </div>

                                        <div className="layer puppeteer" onClick={this.handlePuppeteer}>
                                            <i className="fas fa-angle-down"></i>
                                            <span>Scraping-Github</span>
                                        </div>
                                        <div id="pupp" className="sub-container hidden">
                                            <div className="sub-layer" onClick={this.showSnippetPupp}>
                                                <i className="fab fa-js"></i>
                                                <span>puppeteer.js</span>
                                            </div>
                                            <div className="sub-layer" onClick={this.showVideoPupp}>
                                                <i className="fas fa-play-circle"></i>
                                                <span>previewScr.ogv</span>
                                            </div>
                                        </div>
                                    </div>
                                        ) : null
                                    }
                                <div className="layer last-layer" onClick={this.showJson}>
                                    <span className="ae-curly">{`{}`}</span>
                                    <span>package.json</span>
                                </div> 
                                <div className="layer last-layer" onClick={this.showReadme}>
                                    <i className="fas fa-info-circle"></i>
                                    <span>README.md</span>
                                </div>    
                                <div className="layer last-layer" onClick={this.showEnv}>
                                    <i className="fas fa-cog"></i>
                                    <span>.aemabit</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-screen-terminal">
                        <div className="bar-active">
                            <div className="hidden tags-bar readme-view">
                                <i className="fas fa-info-circle"></i>
                                <span onClick={this.showReadme}>README.md</span>
                                <i onClick={this.closeReadme} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar json-view">
                                <span className="ae-curly">{`{}`}</span>
                                <span onClick={this.showJson}>package.json</span>
                                <i onClick={this.closeJson} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar env-view">
                                <i className="fas fa-cog"></i>
                                <span onClick={this.showEnv}>.aemabit</span>
                                <i onClick={this.closeEnv} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-mars">
                                <i className="fab fa-js"></i>
                                <span onClick={this.showSnippetMars}>introMars.js</span>
                                <i onClick={this.closeMars} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-video-mars">
                                <i className="fas fa-play-circle"></i>
                                <span onClick={this.showVideoMars}>previewMars.ogv</span>
                                <i onClick={this.closePlayerMars} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-gl">
                                <i className="fab fa-js"></i>
                                <span onClick={this.showSnippetGl}>introGL.js</span>
                                <i onClick={this.closeGl} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-video-gl">
                                <i className="fas fa-play-circle"></i>
                                <span onClick={this.showVideoGl}>previewGL.ogv</span>
                                <i onClick={this.closePlayerGl} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-swapi">
                                <i className="fab fa-js"></i>
                                <span onClick={this.showSnippetSwapi}>starWars.js</span>
                                <i onClick={this.closeSwapi} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-video-swapi">
                                <i className="fas fa-play-circle"></i>
                                <span onClick={this.showVideoSwapi}>previewSW.ogv</span>
                                <i onClick={this.closePlayerSwapi} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-jokes">
                                <i className="fab fa-js"></i>
                                <span onClick={this.showSnippetJokes}>starWarsJokes.js</span>
                                <i onClick={this.closeJokes} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-video-jokes">
                                <i className="fas fa-play-circle"></i>
                                <span onClick={this.showVideoJokes}>previewJokes.ogv</span>
                                <i onClick={this.closePlayerJokes} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-pupp">
                                <i className="fab fa-js"></i>
                                <span onClick={this.showSnippetPupp}>puppeteer.js</span>
                                <i onClick={this.closePupp} className="fas fa-times"></i>
                            </div>
                            <div className="hidden tags-bar tag-video-pupp">
                                <i className="fas fa-play-circle"></i>
                                <span onClick={this.showVideoPupp}>previewScr.ogv</span>
                                <i onClick={this.closePlayerPupp} className="fas fa-times"></i>
                            </div>
                        </div> 
                        <div className="box-screen">

                            <div>
                                <div id="screen-mars" className="screen hidden">
                                    {   
                                        this.state.renderMsgMars ? (
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
                                                    <span><span id="blue">import</span> MarsProject from <span id="yellow">'./src/NasaApi'</span></span><br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <span id="blue">const App = <span id="yellow">{` () `}</span>=><span id="yellow">{`(`}</span></span> <br></br>
                                                    <span id="blue">&nbsp;&nbsp;{`return (`}                                    </span><br></br>
                                                    <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`<div className='container'>`}     </span><br></br>
                                                    <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<MarsProject />`}    </span><br></br>
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
                                <div id="player-mars" className="player hidden">
                                    <div>
                                        <span> previewMars.ogv is not displayed in the editor because it is either binary or uses an unsupported text encoding. 
                                            <span className="video-mars" onClick={this.showMarsVideo}>Do you want to open it anyway?</span>
                                        </span>
                                    </div>
                                    <div className="container-player">
                                        {
                                            this.state.videoMars ? (
                                                <div className="end-video">
                                                    <ReactPlayer
                                                        className='react-player'
                                                        url={marsVideo}
                                                        width='50%'
                                                        height='50%'
                                                        controls={true}
                                                    />
                                                </div>                                            
                                            ) : null
                                        }

                                    </div>
                                </div>
                            </div>

                            <div>
                                <div id="screen-greenlink" className="screen hidden">
                                {   
                                        this.state.renderMsgGl ? (
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
                                                    <span><span id="blue">import</span> TheGreenLink from <span id="yellow">'./src/TheGreenLink'</span></span><br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <span id="blue">const App = <span id="yellow">{` () `}</span>=><span id="yellow">{`(`}</span></span> <br></br>
                                                    <span id="blue">&nbsp;&nbsp;{`return (`}                                    </span><br></br>
                                                    <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`<div className='container'>`}     </span><br></br>
                                                    <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TheGreenLink />`}    </span><br></br>
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
                                <div id="player-greenlink" className="player hidden">
                                    <div>
                                        <span> previewGL.ogv is not displayed in the editor because it is either binary or uses an unsupported text encoding. 
                                            <span className="video-thegreenlink" onClick={this.showTglVideo}>Do you want to open it anyway?</span>
                                        </span>
                                    </div>
                                    <div className="container-player">
                                        {
                                            this.state.videothgl ? (
                                                <div className="end-video">
                                                    <ReactPlayer
                                                        className='react-player'
                                                        url={thegreenlink}
                                                        width='50%'
                                                        height='50%'
                                                        controls={true}
                                                    />
                                                </div>
                                            ) : null 
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="screen-swapi" className="screen hidden">
                                {   
                                        this.state.renderMsgSwapi ? (
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
                                                    <span><span id="blue">import</span> SwapiProject from <span id="yellow">'./src/SwapiApi'</span></span><br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <span id="blue">const App = <span id="yellow">{` () `}</span>=><span id="yellow">{`(`}</span></span> <br></br>
                                                    <span id="blue">&nbsp;&nbsp;{`return (`}                                    </span><br></br>
                                                    <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`<div className='container'>`}     </span><br></br>
                                                    <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<SwapiProject />`}    </span><br></br>
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
                                <div id="player-swapi" className="player hidden">
                                    <div>
                                        <span> previewSW.ogv is not displayed in the editor because it is either binary or uses an unsupported text encoding. 
                                            <span className="video-swapi" onClick={this.showSwapiVideo}>Do you want to open it anyway?</span>
                                        </span>
                                    </div>
                                    <div className="container-player">
                                        {
                                            this.state.videoswpi ? (
                                                <div className="end-video">
                                                    <ReactPlayer
                                                        className='react-player'
                                                        url={swapiVideo}
                                                        width='50%'
                                                        height='50%'
                                                        controls={true}
                                                    />
                                                </div>
                                            ): null
                                        }
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div id="screen-st-jokes" className="screen hidden">
                                {   
                                        this.state.renderMsgJokes ? (
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
                                                    <span><span id="blue">import</span> StarWarsProject from <span id="yellow">'./src/STWJokesApi'</span></span><br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <span id="blue">const App = <span id="yellow">{` () `}</span>=><span id="yellow">{`(`}</span></span> <br></br>
                                                    <span id="blue">&nbsp;&nbsp;{`return (`}                                    </span><br></br>
                                                    <span id="red">&nbsp;&nbsp;&nbsp;&nbsp;{`<div className='container'>`}     </span><br></br>
                                                    <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<StarWarsProject />`}    </span><br></br>
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
                                <div id="player-st-jokes" className="player hidden">
                                    <div>
                                        <span> previewJokes.ogv is not displayed in the editor because it is either binary or uses an unsupported text encoding. 
                                            <span className="video-jokes" onClick={this.showJokesVideo}>Do you want to open it anyway?</span>
                                        </span>
                                    </div>
                                    <div className="container-player">
                                        {
                                            this.state.videojoke ? (
                                                <div className="end-video">
                                                    <ReactPlayer
                                                        className='react-player'
                                                        url={jokesVideo}
                                                        width='50%'
                                                        height='50%'
                                                        controls={true}
                                                    />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div id="screen-puppeteer" className="screen hidden">
                                {   
                                        this.state.renderMsgGithub? (
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
                                            <span className="video-puppeteer" onClick={this.showGithubVideo}>Do you want to open it anyway?</span>
                                        </span>
                                    </div>
                                    <div className="container-player">
                                        {
                                            this.state.videogith ? (
                                            <div className="end-video">
                                                <ReactPlayer
                                                    className='react-player'
                                                    url={scrapingVideo}
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
                            </div>

                            <div>
                                <div id="readme" className="screen">
                                    {
                                    this.state.rendeReadmeMd ? (
                                    <div id="readme">
                                        <div className="numbers">
                                            <span>1</span>
                                            <span>2</span>
                                            <span>3</span>
                                            <span>4</span>
                                            <span>5</span>
                                            <span>6</span>
                                            <span>7</span>
                                            <span>8</span>
                                            <span>9</span>
                                            <span>10</span>
                                            <span>11</span>
                                            <span>12</span>
                                            <span>13</span>
                                            <span>14</span>
                                            <span>15</span>
                                            <span>16</span>
                                            <span>17</span>
                                            <span>18</span>
                                            <span>19</span>
                                            <span>20</span>
                                            <span>21</span>
                                            <span>22</span>
                                            <span>23</span>
                                            <span>24</span>
                                            <span>25</span>
                                            <span>26</span>
                                            <span>27</span>
                                            <span>28</span>
                                            <span>29</span>
                                            <span>30</span>
                                            <span>31</span>
                                            <span>32</span>
                                            <span>33</span>
                                            <span>34</span>
                                            <span>35</span>
                                            <span>36</span>
                                            <span>37</span>
                                            <span>38</span>
                                            <span>39</span>
                                            <span>40</span>
                                            <span>41</span>
                                            <span>42</span>
                                            <span>43</span>
                                            <span>44</span>
                                            <span>45</span>
                                            <span>46</span>
                                            <span>47</span>
                                            <span>48</span>
                                            <span>49</span>
                                            <span>50</span>
                                            <span>51</span>
                                            <span>52</span>
                                            <span>53</span>
                                            <span>54</span>
                                            <span>55</span>
                                        </div> 
                                        <div className="text-readme">
                                            <span>This project was bootstrapped with <span id="blue">[Create ANDRES MEJIAS (Aemabit) App]</span><span id="orange">(https://github.com/aemabit)</span>.</span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">## Get more information about the maker of this site...</span>
                                            <br></br>
                                            <br></br>
                                            <span>Linkedin: <span id="blue">[https://www.linkedin.com/in/andres-mejias/]</span><span id="orange">(https://www.linkedin.com/in/andres-mejias/)</span></span>
                                            <br></br>
                                            <span>Gmail: <span id="blue">[aemabit@gmail.com]</span><span id="orange">(aemabit@gmail.com)</span></span>
                                            <br></br>
                                            <span>Github: <span id="blue">[https://github.com/aemabit]</span><span id="orange">(https://github.com/aemabit)</span></span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">## Available Scripts</span>
                                            <br></br>
                                            <span>In the project directory, you can run:</span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit run introMars.js </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Runs the app in the development mode.<br></br>
                                                Open <span id="blue">[https://mars-curiosity-api.herokuapp.com/]</span><span id="orange">(https://mars-curiosity-api.herokuapp.com/)</span> to view in the browser. 
                                                <br></br>
                                                <br></br>
                                                The page will reload if you make edits.<br />
                                                You will also see any lint errors in the console.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit run introGL.js </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Runs the app in the development mode.<br></br>
                                                Open <span id="blue">[https://mars-curiosity-api.herokuapp.com/]</span><span id="orange">(https://mars-curiosity-api.herokuapp.com/)</span> to view in the browser. 
                                                <br></br>
                                                <br></br>
                                                The page will reload if you make edits.<br />
                                                You will also see any lint errors in the console.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit run starWars.js </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Runs the app in the development mode.<br></br>
                                                Open <span id="blue">[https://mars-curiosity-api.herokuapp.com/]</span><span id="orange">(https://mars-curiosity-api.herokuapp.com/)</span> to view in the browser. 
                                                <br></br>
                                                <br></br>
                                                The page will reload if you make edits.<br />
                                                You will also see any lint errors in the console.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit run starWarsJokes.js </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Runs the app in the development mode.<br></br>
                                                Open <span id="blue">[https://mars-curiosity-api.herokuapp.com/]</span><span id="orange">(https://mars-curiosity-api.herokuapp.com/)</span> to view in the browser. 
                                                <br></br>
                                                <br></br>
                                                The page will reload if you make edits.<br />
                                                You will also see any lint errors in the console.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit run puppeteer.js </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Runs the app in the development mode.<br></br>
                                                Open <span id="blue">[https://mars-curiosity-api.herokuapp.com/]</span><span id="orange">(https://mars-curiosity-api.herokuapp.com/)</span> to view in the browser. 
                                                <br></br>
                                                <br></br>
                                                The page will reload if you make edits.<br />
                                                You will also see any lint errors in the console.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span id="orange">### aemabit eject </span>
                                            <br></br>
                                            <br></br>
                                            <span id="red">**Note: this is a one-way operation. Once you `eject`, you can’t go back!**</span>
                                            <br></br>
                                            <br></br>
                                        </div>
                                    </div>
                                    ): null
                                    }
                                </div>
                            </div>
                            <div>
                            <div id="pkg-json"className="screen hidden">
                                <div className="wrapper-json">
                                <div className="numbers">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>
                                        <span>11</span>
                                        <span>12</span>
                                        <span>13</span>
                                        <span>14</span>
                                        <span>15</span>
                                        <span>16</span>
                                        <span>17</span>
                                        <span>18</span>
                                        <span>19</span>
                                        <span>20</span>
                                        <span>21</span>
                                        <span>22</span>
                                        <span>23</span>
                                        <span>24</span>
                                        <span>25</span>
                                        <span>26</span>
                                        <span>27</span>
                                        <span>28</span>
                                        <span>29</span>
                                        <span>30</span>
                                        <span>31</span>
                                        <span>32</span>
                                        <span>33</span>
                                        <span>34</span>
                                        <span>35</span>
                                        <span>36</span>
                                        <span>37</span>
                                        <span>38</span>
                                        <span>39</span>
                                        <span>40</span>
                                        <span>41</span>
                                        <span>42</span>
                                        <span>43</span>
                                        <span>44</span>
                                        <span>45</span>
                                        <span>46</span>
                                        <span>47</span>
                                        <span>48</span>
                                        <span>49</span>
                                    </div>
                                    <div className="json-text">
                                        <span id="orange">{`{`}</span>
                                        <span id="blue">&nbsp;&nbsp;{`"author"`}<span id="orange">{`"Andres Mejias",`}</span></span>                                
                                        <span id="blue">&nbsp;&nbsp;{`"name":`}<span id="orange">{`"client",` }</span></span>                       
                                        <span id="blue">&nbsp;&nbsp;{`"version":`}<span id="orange">{`"0.1.0",`}</span></span> 
                                        <span id="blue">&nbsp;&nbsp;{`"private":`}<span id="orange">{`true,`}</span></span> 
                                        <span id="blue">&nbsp;&nbsp;{`"dependencies":`}<span id="blue">{`{`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{  `"react":`}<span id="yellow">{`"^16.12.0",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{  `"express":`}<span id="yellow">{`"^4.16.3",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{  `"react-dom":`}<span id="yellow">{`"^16.12.0",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"connect-history-api-fallback":`}<span id="yellow">{` "^1.5.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"copy-webpack-plugin":`}<span id="yellow">{` "^4.5.1",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"css-loader":`}<span id="yellow">{` "^0.28.11",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"express":`}<span id="yellow">{` "^4.16.3",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"extract-text-webpack-plugin":`}<span id="yellow">{` "^4.0.0-beta.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"html-webpack-plugin":`}<span id="yellow">{` "^3.1.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"mongoose":`}<span id="yellow">{` "^5.0.11",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"node-sass": `}<span id="yellow">{`"^4.7.2",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"nodemon":`}<span id="yellow">{` "^1.17.2",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"postcss-loader":`}<span id="yellow">{` "^2.1.3",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"react":`}<span id="yellow">{` "^16.2.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"react-dom":`}<span id="yellow">{` "^16.2.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"react-hot-loader":`}<span id="yellow">{` "^4.0.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"react-router":`}<span id="yellow">{` "^4.2.0",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"react-router-dom":`}<span id="yellow">{` "^4.2.2",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"sass-loader":`}<span id="yellow">{` "^6.0.7",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"style-loader":`}<span id="yellow">{` "^0.20.3",`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{`"webpack":`}<span id="yellow">{` "^4.2.0",`}</span></span>

                                        <span id="blue">&nbsp;&nbsp;{`},`}</span> 
                                        <span id="blue">&nbsp;&nbsp;{`"scripts":`}<span id="blue">{`{`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "start":`}<span id="yellow">{`"aemabit run introMars.js",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "start":`}<span id="yellow">{`"aemabit run introGL.js",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "start":`}<span id="yellow">{`"aemabit run starWars.js",`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "start":`}<span id="yellow">{`"aemabit run starWarsJokes.js"`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "start":`}<span id="yellow">{`"aemabit run puppeteer.js"`}</span></span>
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "eject":`}<span id="yellow">{`"aemabit eject"`}</span></span>
                                        <span id="blue">&nbsp;&nbsp;{`},`}</span> 
                                        <span id="blue">&nbsp;&nbsp;{`"browserslist":`}<span id="blue">{`{`}</span></span> 
                                        <span id="orange">&nbsp;&nbsp;&nbsp;&nbsp;{ ` "production":`}<span id="blue">{`[`}</span></span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{   ` ">0.2%",`}</span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{   ` "not dead",`}</span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{   ` "not op_mini all"`}</span> 
                                        <span id="blue">&nbsp;&nbsp;{ `],`}</span> 
                                        <span id="blue">&nbsp;&nbsp;{  `"development":`}<span id="blue">{`[`}</span></span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  `"last 1 chrome version",`}</span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  `"last 1 firefox version",`}</span> 
                                        <span id="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  `"last 1 safari version"`}</span> 
                                        <span id="blue">&nbsp;&nbsp;{  `]`}</span> 
                                        <span id="orange">{`}`}</span> 
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="aemabit-env" className="screen hidden">
                                <div className="wrapper-json">
                                <div className="numbers">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>
                                        <span>11</span>
                                        <span>12</span>
                                        <span>13</span>
                                        <span>14</span>
                                        <span>15</span>
                                        <span>16</span>
                                        <span>17</span>
                                        <span>18</span>
                                        <span>19</span>
                                        <span>20</span>
                                        <span>21</span>
                                        <span>22</span>
                                        <span>23</span>
                                        <span>24</span>
                                        <span>25</span>
                                        <span>26</span>
                                        <span>27</span>
                                        <span>28</span>
                                        <span>29</span>
                                        <span>30</span>
                                        <span>31</span>
                                        <span>32</span>
                                        <span>33</span>
                                    </div>
                                    <div className="env-content">
                                        <span>Hi, my name is <span className="sm-ttl">Andres Mejias</span></span>
                                        <span className="change sm-ttl">&nbsp;&nbsp;I design and develop webapps</span>
                                        <br></br>
                                        <br></br>
                                        <span className="sm-ttl">{`// I'm ambitious and love new challenges :)`}</span>
                                        <span className="sm-ttl">{`// My vast variety of skills is continuously expanding.`}</span>
                                        <br></br>
                                        <br></br>
                                        <span className="sm-ttl">Education {`= [`} </span>
                                        <span id="yellow">&nbsp;&nbsp;{`{`} '2019' : Wyncode Academy - Full Stack Web Developer {`},`} </span>
                                        <span id="yellow">&nbsp;&nbsp;{`{`} '2015' : Technological University Institute Americo Vespucio - Information Technology {`}`} </span>
                                        <span id="red">{`]`}</span>
                                        <br></br>
                                        <br></br>
                                        <span className="sm-ttl">{`Skills = [`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Passport.js',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'HTML/CSS/JS',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Node.js',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'React.js',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Express.js',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'MongoDB',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'PostgreSQL',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Puppeteer',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Bootstrap',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'npm/yarn',  `}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'GIT',`}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Ruby on Rails', `}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Photoshop', `}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'Illustrator', `}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'After Effects', `}</span>
                                        <span id="yellow">&nbsp;&nbsp;{`'UX/UI'`}</span>
                                        <span id="red">{`] `}</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="box-terminal">
                            <div className="bar-console">
                                <div className="selector-terminal">
                                    <span>TERMINAL</span>
                                </div>
                                <div className="end-terminal">
                                    <div className="box-node">
                                        <span>1:node</span>
                                    </div>
                                    <div className="kill-terminal">
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                    <div className="close-terminal">
                                        <i className="far fa-times-circle"></i>
                                    </div>
                                </div>
                            </div>
                                <div className="command-box"></div>
                            <div className="container-input">
                                <div className="wrapper-input">
                                    <form id="command-space" onSubmit={this.submitCommand}>
                                    <span>user@aemabit</span><span>[client]</span><span>(master)</span><span>$ </span>
                                    <input 
                                        autoComplete="off" 
                                        type="text" 
                                        id="theInput" 
                                        autoCorrect="off" 
                                        value={this.state.commandValue}
                                        onChange = {this.handleCommandChange}
                                        spellCheck="false"
                                    />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
