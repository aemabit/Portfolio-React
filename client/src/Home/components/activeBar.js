import React from 'react'

const ActiveBar = props => {
    return(
        <div className="bar-active">
            <div className="hidden tags-bar readme-view">
                <i className="fas fa-info-circle"></i>
                <span onClick={props.showReadme}>README.md</span>
                <i onClick={props.closeReadme} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar json-view">
                <span className="ae-curly">{`{}`}</span>
                <span onClick={props.showJson}>package.json</span>
                <i onClick={props.closeJson} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar env-view">
                <i className="fas fa-cog"></i>
                <span onClick={props.showEnv}>.aemabit</span>
                <i onClick={props.closeEnv} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-mars">
                <i className="fab fa-js"></i>
                <span onClick={props.showSnippetMars}>introMars.js</span>
                <i onClick={props.closeMars} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-video-mars">
                <i className="fas fa-play-circle"></i>
                <span onClick={props.showVideoMars}>previewMars.ogv</span>
                <i onClick={props.closePlayerMars} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-gl">
                <i className="fab fa-js"></i>
                <span onClick={props.showSnippetGl}>introGL.js</span>
                <i onClick={props.closeGl} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-video-gl">
                <i className="fas fa-play-circle"></i>
                <span onClick={props.showVideoGl}>previewGL.ogv</span>
                <i onClick={props.closePlayerGl} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-swapi">
                <i className="fab fa-js"></i>
                <span onClick={props.showSnippetSwapi}>starWars.js</span>
                <i onClick={props.closeSwapi} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-video-swapi">
                <i className="fas fa-play-circle"></i>
                <span onClick={props.showVideoSwapi}>previewSW.ogv</span>
                <i onClick={props.closePlayerSwapi} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-jokes">
                <i className="fab fa-js"></i>
                <span onClick={props.showSnippetJokes}>starWarsJokes.js</span>
                <i onClick={props.closeJokes} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-video-jokes">
                <i className="fas fa-play-circle"></i>
                <span onClick={props.showVideoJokes}>previewJokes.ogv</span>
                <i onClick={props.closePlayerJokes} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-pupp">
                <i className="fab fa-js"></i>
                <span onClick={props.showSnippetPupp}>puppeteer.js</span>
                <i onClick={props.closePupp} className="fas fa-times"></i>
            </div>
            <div className="hidden tags-bar tag-video-pupp">
                <i className="fas fa-play-circle"></i>
                <span onClick={props.showVideoPupp}>previewScr.ogv</span>
                <i onClick={props.closePlayerPupp} className="fas fa-times"></i>
            </div>
        </div> 
    )
}

export default ActiveBar
