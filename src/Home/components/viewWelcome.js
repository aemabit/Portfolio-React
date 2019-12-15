import React from 'react'

const Welcome = () => {
    return(
        <div className="wrapper-welcome">
            <div className="container-welcome screen">
                <div className="welcome-to">
                    <span>Welcome to Aemabit Studio Code</span>
                    <h4>by: Andres Mejias</h4>
                    <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MejiasAndres.png" alt="Andres Mejias"/>
                </div>
                <div className="command-ref">
                    <span>Open and Close Terminal</span>
                        <div className="guideC">
                            <span className="simbol">Ctrl</span> <span>+</span>
                            <span className="simbol">Shift</span> <span>+</span>
                            <span className="simbol">~</span>
                        </div>
                </div>
                <div className="command-ref">
                    <span>Open Explorer Nav</span>
                    <div className="guideC">
                        <span className="simbol">Ctrl</span> <span>+</span>
                        <span className="simbol">Alt</span> <span>+</span>
                        <span className="simbol">O</span> 
                    </div>
                </div>
                <div className="command-ref">
                    <span>Open Andres Mejias Github</span>
                        <div className="guideC">
                            <span className="simbol">Ctrl</span> <span>+</span>
                            <span className="simbol">Alt</span> <span>+</span>
                            <span className="simbol">G</span> 
                        </div>
                </div>
                <div className="command-ref">
                    <span>Open Andres Mejias Linkedin</span>
                        <div className="guideC">
                            <span className="simbol">Ctrl</span> <span>+</span>
                            <span className="simbol">Alt</span> <span>+</span>
                            <span className="simbol">L</span> 
                        </div>
                </div>
            </div>   
        </div>
    )
}

export default Welcome
