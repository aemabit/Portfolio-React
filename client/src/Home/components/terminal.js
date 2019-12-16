import React from 'react'

const MyTerminal = props => {
    return(
        <>
            {
                props.terminal? (
                    <div className="box-terminal">
                        <div className="bar-console">
                            <div className="selector-terminal">
                                <span>TERMINAL</span>
                            </div>
                            <div className="end-terminal">
                                <div className="box-node">
                                    <span>1:node</span>
                                </div>
                                <div className="kill-terminal" onClick={props.clearTerminal}>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                                <div className="close-terminal" onClick={props.closeTerminal}>
                                    <i className="far fa-times-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="command-box"></div>
                        <div className="container-input">
                            <div className="wrapper-input">
                                <form id="command-space" onSubmit={props.submitCommand}>
                                <span>user@aemabit</span><span>[client]</span><span>(master)</span><span>$ </span>
                                <input 
                                    autoComplete="off" 
                                    type="text" 
                                    id="theInput" 
                                    autoCorrect="off" 
                                    value={props.commandValue}
                                    onChange = {props.handleCommandChange}
                                    spellCheck="false"
                                />
                                </form>
                            </div>
                        </div>
                    </div>
                ):null
            }
        </>
    )
}

export default MyTerminal
