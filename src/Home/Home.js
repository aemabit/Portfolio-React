import React, { Component } from 'react'
import './home.css'
import baffle from 'baffle'
import SecondLateralBar from './components/secondBar'
import ActiveBar from './components/activeBar'
import Mars from './components/viewMars'
import GreenLink from './components/viewGreenLink';
import Swapi from './components/viewSwapi'
import Jokes from './components/viewJokes'
import Scraping from './components/viewPuppeteer';
import MyJson from './components/viewPkgJson'
import MyEnv from './components/viewEnv'
import Welcome from './components/viewWelcome'
import MyTerminal from './components/terminal'
import MyReadme from './components/ViewReadme'


export default class Home extends Component {
    state = {
        z: 2,
        renderMsgMars: false,
        renderMsgGl: false,
        renderMsgSwapi: false,
        renderMsgJokes: false,
        renderMsgGithub: false,
        videoMars: false,
        videothgl: false,
        videoswpi: false,
        videojoke: false,
        videogith: false,
        activeSubmenu: true,
        commandValue: '',
        code: [],
        terminal: true
    }

    handleChange = (evt) => {
        this.state.code.push(evt.key)
        if (this.state.code.length === 3 && this.state.code[0] === "Control" && this.state.code[1] === "Shift" && this.state.code[2] === "~") {
            this.closeTerminal()
        } else if (this.state.code.length === 3 && this.state.code[0] === "Control" && this.state.code[1] === "Alt" && this.state.code[2] === "o") {
            document.querySelector('.second-lateral-bar').classList.toggle('hidden')
        } else if (this.state.code.length === 3 && this.state.code[0] === "Control" && this.state.code[1] === "Alt" && this.state.code[2] === "g") {
            window.open(
                'https://github.com/aemabit',
                '_blank'
            );
        } else if (this.state.code.length === 3 && this.state.code[0] === "Control" && this.state.code[1] === "Alt" && this.state.code[2] === "l") {
            window.open(
                'https://www.linkedin.com/in/andres-mejias/',
                '_blank'
            );
        } else if (this.state.code.length === 2 && this.state.code[0] === "Control" && this.state.code[1] !== "Shift" && this.state.code[1] !== "Alt") {
            this.setState({ code: [] })
        } else if (this.state.code[0] !== "Control") {
            this.setState({ code: [] })
        } else if (this.state.code.length > 3) {
            this.setState({ code: [] })
        } else {
            return
        }
    }

    clearTerminal = () => {
        document.querySelector(".command-box").innerHTML = ""
    }
    closeTerminal = () => {
        this.setState({ terminal: !this.state.terminal })
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
            renderMsgGithub: true
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
        })
        const readme = document.querySelector('#readme')
        readme.classList.remove('hidden')
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
                characters: '<▒▓▓< ▓▓<<▒ ▓▓<'
            })
            .start()
            .reveal(4000)

        aeEnv.classList.remove('hidden')
        aeEnv.style.zIndex = this.state.z
        document.querySelector('.env-view').classList.remove('hidden')
    }

    /* CLOSE VIEWS */

    closeGl = () => {
        document.querySelector('#screen-greenlink').classList.add('hidden')
        document.querySelector('.tag-gl').classList.add('hidden')
    }
    closeJokes = () => {
        document.querySelector('#screen-st-jokes').classList.add('hidden')
        document.querySelector('.tag-jokes').classList.add('hidden')
    }
    closeMars = () => {
        document.querySelector('#screen-mars').classList.add('hidden')
        document.querySelector('.tag-mars').classList.add('hidden')
    }
    closePupp = () => {
        document.querySelector('#screen-puppeteer').classList.add('hidden')
        document.querySelector('.tag-pupp').classList.add('hidden')
    }
    closeSwapi = () => {
        document.querySelector('#screen-swapi').classList.add('hidden')
        document.querySelector('.tag-swapi').classList.add('hidden')
    }
    closeReadme = () => {
        document.querySelector('#readme').classList.add('hidden')
        document.querySelector('.readme-view').classList.add('hidden')
    }
    closeJson = () => {
        document.querySelector('#pkg-json').classList.add('hidden')
        document.querySelector('.json-view').classList.add('hidden')
    }
    closeEnv = () => {
        document.querySelector('#aemabit-env').classList.add('hidden')
        document.querySelector('.env-view').classList.add('hidden')
    }

    closePlayerGl = () => {
        document.querySelector('#player-greenlink').classList.add('hidden')
        document.querySelector('.tag-video-gl').classList.add('hidden')
    }
    closePlayerJokes = () => {
        document.querySelector('#player-st-jokes').classList.add('hidden')
        document.querySelector('.tag-video-jokes').classList.add('hidden')
    }
    closePlayerMars = () => {
        document.querySelector('#player-mars').classList.add('hidden')
        document.querySelector('.tag-video-mars').classList.add('hidden')
    }
    closePlayerPupp = () => {
        document.querySelector('#player-puppeteer').classList.add('hidden')
        document.querySelector('.tag-video-pupp').classList.add('hidden')
    }
    closePlayerSwapi = () => {
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
        if (this.state.commandValue === "aemabit run introMars.js") {
            const showCommand =
                `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML = commandLine.innerHTML + showCommand
            window.open(
                'https://mars-curiosity-api.herokuapp.com/',
                '_blank'
            );
        } else if (this.state.commandValue.length <= 0) {
            const forDefault =
                `
                <div className="wrapper-input">
                    <span>user@aemabit</span><span id="client">[client]</span><span id="master">(master)</span><span>$ </span>
                </div>
            `
            commandLine.innerHTML = commandLine.innerHTML + forDefault
        } else if (this.state.commandValue === "aemabit run introGL.js") {
            const showCommand =
                `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML = commandLine.innerHTML + showCommand
            window.open(
                'https://thegreenlink.herokuapp.com/',
                '_blank'
            );
        } else if (this.state.commandValue === "aemabit run starWars.js") {
            const showCommand =
                `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML = commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Swapi-project',
                '_blank'
            );
        } else if (this.state.commandValue === "aemabit run starWarsJokes.js") {
            const showCommand =
                `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML = commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Star-API',
                '_blank'
            );
        } else if (this.state.commandValue === "aemabit run puppeteer.js") {
            const showCommand =
                `
                <div>${this.state.commandValue}</div>
                <span id="ae-script">aemabit script start</span>
                <span>Loading browser</span>
                <span>Update features</span>
                <span>Happy Journey!</span>
            `
            commandLine.innerHTML = commandLine.innerHTML + showCommand
            window.open(
                'https://github.com/aemabit/Web-Scraping-with-Puppeteer',
                '_blank'
            );
        } else if (this.state.commandValue === "aemabit eject") {
            window.location.reload()
        } else {
            const commandError =
                `
                <div className="wrapper-input">
                    <span>${this.state.commandValue}: command not found</span>
                </div>
            `
            commandLine.innerHTML = commandLine.innerHTML + commandError
        }
        inputspace.value = "";
        commandLine.scrollTop = commandLine.scrollHeight
        this.setState({
            commandValue: ''
        })
    }

    linkValueGL = () => {
        window.open(
            'https://thegreenlink.herokuapp.com/',
            '_blank'
        )
    }
    linkValueMars = () => {
        window.open(
            'https://mars-curiosity-api.herokuapp.com/',
            '_blank'
        )
    }
    linkValuePupp = () => {
        window.open(
            'https://github.com/aemabit/Web-Scraping-with-Puppeteer',
            '_blank'
        )
    }
    linkValueSwapi = () => {
        window.open(
            'https://github.com/aemabit/Swapi-project',
            '_blank'
        )
    }
    linkValueJokes = () => {
        window.open(
            'https://github.com/aemabit/Star-API',
            '_blank'
        )
    }
    linkValueGithub = () => {
        window.open(
            'https://github.com/aemabit',
            '_blank'
        )
    }
    linkValueLinkedin = () => {
        window.open(
            'https://www.linkedin.com/in/andres-mejias/',
            '_blank'
        )
    }

    render() {
        return (
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
                    <SecondLateralBar
                        handleSubMenu={this.handleSubMenu}
                        activeSubmenu={this.state.activeSubmenu}
                        handleMars={this.handleMars}
                        showSnippetMars={this.showSnippetMars}
                        showVideoMars={this.showVideoMars}
                        handleGl={this.handleGl}
                        showSnippetGl={this.showSnippetGl}
                        showVideoGl={this.showVideoGl}
                        handleSwapi={this.handleSwapi}
                        showSnippetSwapi={this.showSnippetSwapi}
                        showVideoSwapi={this.showVideoSwapi}
                        handleJokes={this.handleJokes}
                        showSnippetJokes={this.showSnippetJokes}
                        showVideoJokes={this.showVideoJokes}
                        handlePuppeteer={this.handlePuppeteer}
                        showSnippetPupp={this.showSnippetPupp}
                        showVideoPupp={this.showVideoPupp}
                        showJson={this.showJson}
                        showReadme={this.showReadme}
                        showEnv={this.showEnv}
                    />
                    <div className="wrapper-screen-terminal">
                        <ActiveBar
                            showReadme={this.showReadme}
                            closeReadme={this.closeReadme}
                            showJson={this.showJson}
                            closeJson={this.closeJson}
                            showEnv={this.showEnv}
                            closeEnv={this.closeEnv}
                            showSnippetMars={this.showSnippetMars}
                            closeMars={this.closeMars}
                            showVideoMars={this.showVideoMars}
                            closePlayerMars={this.closePlayerMars}
                            showSnippetGl={this.showSnippetGl}
                            closeGl={this.closeGl}
                            showVideoGl={this.showVideoGl}
                            closePlayerGl={this.closePlayerGl}
                            showSnippetSwapi={this.showSnippetSwapi}
                            closeSwapi={this.closeSwapi}
                            showVideoSwapi={this.showVideoSwapi}
                            closePlayerSwapi={this.closePlayerSwapi}
                            showSnippetJokes={this.showSnippetJokes}
                            closeJokes={this.closeJokes}
                            showVideoJokes={this.showVideoJokes}
                            closePlayerJokes={this.closePlayerJokes}
                            showSnippetPupp={this.showSnippetPupp}
                            closePupp={this.closePupp}
                            showVideoPupp={this.showVideoPupp}
                            closePlayerPupp={this.closePlayerPupp}
                        />
                        <div className="box-screen">
                            <Mars
                                renderMsgMars={this.state.renderMsgMars}
                                showMarsVideo={this.showMarsVideo}
                                videoMars={this.state.videoMars}
                            />
                            <GreenLink
                                renderMsgGl={this.state.renderMsgGl}
                                showTglVideo={this.showTglVideo}
                                videothgl={this.state.videothgl}
                            />
                            <Swapi
                                renderMsgSwapi={this.state.renderMsgSwapi}
                                showSwapiVideo={this.showSwapiVideo}
                                videoswpi={this.state.videoswpi}
                            />
                            <Jokes
                                renderMsgJokes={this.state.renderMsgJokes}
                                showJokesVideo={this.showJokesVideo}
                                videojoke={this.state.videojoke}
                            />
                            <Scraping
                                renderMsgGithub={this.state.renderMsgGithub}
                                showGithubVideo={this.showGithubVideo}
                                videogith={this.state.videogith}
                            />
                            <MyReadme
                                linkValueGithub = {this.linkValueGithub}
                                linkValueLinkedin = {this.linkValueLinkedin}
                                linkValueMars = {this.linkValueMars}
                                linkValueGL = {this.linkValueGL}
                                linkValueSwapi = {this.linkValueSwapi}
                                linkValueJokes = {this.linkValueJokes}
                                linkValuePupp = {this.linkValuePupp}
                            />
                            <MyJson />
                            <MyEnv />
                            <Welcome />
                        </div>
                        <MyTerminal
                            terminal={this.state.terminal}
                            clearTerminal={this.clearTerminal}
                            closeTerminal={this.closeTerminal}
                            submitCommand={this.submitCommand}
                            commandValue={this.state.commandValue}
                            handleCommandChange={this.handleCommandChange}
                        />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleChange)
    }

}
