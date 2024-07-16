import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
    const [output, setOutput] = useState("root@jdk3410.com ~:# ");
    const [showResume, setShowResume] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = output.replace('root@jdk3410.com ~:# ', '').trim();
            setIsLoading(true);
            handleCommand(command);
            setOutput(prevOutput => prevOutput + "\nroot@jdk3410.com ~:# ");
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (!newValue.endsWith('\n')) {
            setOutput(newValue);
        }
    };

    const handleCommand = (command) => {
        setIsLoading(true);
        setShowResume(false);
        let commandOutput = '';
        if (command === 'resume') {
            commandOutput = 'Finding the best candidate... For you!';
        } else if (command === 'contact') {
            commandOutput = '----------------------------------\nYour primary server admin is jdk3410!\nIt just so happens he\'s seeking a DevOps position!\nEmail him @ jdk3410@jdk3410.com\n----------------------------------\n';
        } else if (command === 'github') {
            window.location.href = 'https://github.com/jdk3410/resume';
        } else if (command === 'asaconfig-webapp') {
            window.location.href = 'https://asaconfig-webapp.jdk3410.com/';
        } else if (command === 'asaconfig-gitlab') {
            window.location.href = 'https://gitlab.com/personal8152828/asaconfig-webapp';
        } else if (command === 'exit') {
            commandOutput = 'Crashing this plane... With no survivors!!!';
        } else {
            commandOutput = "Command not found: " + command;
        }

        setOutput(prevOutput => prevOutput + '\n' + commandOutput + "\nroot@jdk3410.com ~:# ");

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        if (command === 'resume') {
            const timer = setTimeout(() => {
                setShowResume(true);
            }, 2000);
            return () => clearTimeout(timer);
        } else if (command === 'exit') {
            const timer = setTimeout(() => {
                window.location.href = 'about:blank';
            }, 2000);
            return () => clearTimeout(timer);
        }
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        handleCommand(event.target.getAttribute('data-command'));
    };

    return (
        <div>
            <nav style={{backgroundColor: '#696969', padding: '10px'}}>
                <a href="/resume" data-command="resume" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>Resume</a>
                <a href="/contact" data-command="contact" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>Contact</a>
                <a href="/github" data-command="github" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>GitHub</a>
                <a href="/asaconfig-webapp" data-command="asaconfig-webapp" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>Asaconfig-Webapp</a>
                <a href="/asaconfig-gitlab" data-command="asaconfig-gitlab" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>Asaconfig-GitLab</a>
                <a href="/exit" data-command="exit" onClick={handleLinkClick} style={{color: '#FFFFFF', marginRight: '10px'}}>Exit</a>
            </nav>
            <p style={{color: '#000000'}}>Description of available options: <strong>resume</strong> (displays résumé), <strong>contact</strong> (displays contact info), <strong>github</strong> (opens GitHub repo for this site), <strong>exit</strong> (leaves site)</p>
            <div className="flashing-text">Welcome to UNIX System V!</div>
            <div className="flashing-text">Select an option from the menu above</div>
            <div className="flashing-text">Advanced users could attempt typing commands below</div>
            {isLoading && <div className="spinner"></div>}
            <textarea
                style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#000',
                    color: '#00ff00',
                    fontFamily: 'Courier New, monospace',
                    fontSize: '16px',
                    padding: '10px',
                    border: '2px solid #555',
                    borderRadius: '5px',
                    resize: 'none',
                    outline: 'none'
                }}
                value={output}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            {isLoading && <div className="spinner"></div>}
            {showResume && <embed src="/resume.pdf" type="application/pdf" style={{width: '100%', height: '600px'}} />}
            {isLoading && <div className="spinner"></div>}
        </div>
    );
};

export default Terminal;
