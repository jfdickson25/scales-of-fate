import React from "react";
import './App.css';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
export default function App() {

    const [demis, setDemis] = React.useState([
        { name: "Pentha", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Agamar", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Klar", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Aponi", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Saghari", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Namari", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Naka", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Belan", status: { yes: false, no: false, maybe: false}, notes: "" },
        { name: "Isabel", status: { yes: false, no: false, maybe: false}, notes: "" }
    ]);

    const [scores, setScores] = React.useState({
        position: null,
        guess: null,
        powers: null
    });

    useEffect(() => {
        // Set up local storage for demis so the information persists across page reloads
        const storedDemis = localStorage.getItem("demis");
        const storedScores = localStorage.getItem("scores");
        if(storedDemis) {
            setDemis(JSON.parse(storedDemis));
        }
        if(storedScores) {
            setScores(JSON.parse(storedScores));
        }
    }, []);

    return (
        <React.Fragment>
            <div id="title-area">
                <img src={`${process.env.PUBLIC_URL}/images/title-and-logo.png`} alt="Scales of Fate" id="title-image"/>
            </div>
            <FontAwesomeIcon icon={faArrowRotateLeft} id="refresh-icon" onClick={() => {
                const icon = document.getElementById("refresh-icon");
                icon.classList.add("refreshing");
                
                setTimeout(() => {
                    icon.classList.remove("refreshing");

                    setDemis([
                        { name: "Pentha", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Agamar", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Klar", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Aponi", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Saghari", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Namari", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Naka", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Belan", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Isabel", status: { yes: false, no: false, maybe: false}, notes: "" }
                    ]);
                    setScores({
                        position: null,
                        guess: null,
                        powers: null
                    }); 

                    localStorage.setItem("demis", JSON.stringify([
                        { name: "Pentha", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Agamar", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Klar", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Aponi", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Saghari", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Namari", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Naka", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Belan", status: { yes: false, no: false, maybe: false}, notes: "" },
                        { name: "Isabel", status: { yes: false, no: false, maybe: false}, notes: "" }
                    ]));
                    localStorage.setItem("scores", JSON.stringify({
                        position: null,
                        guess: null,
                        powers: null
                    }));
                }, 500);

            }} />
            <div id="demis-area">
                {
                        demis.map((demi, index) => (
                    
                            <div className="demi">
                                <div className="demi-header">
                                    <img className="demi-icon" src={`${process.env.PUBLIC_URL}/images/demi-icons/${demi.name}.png`}  />
                                    <div className="demi-name">{demi.name.toLocaleUpperCase()}</div>
                                </div>
                                <div className="demi-content">
                                    <img className="demi-img" src={`${process.env.PUBLIC_URL}/images/demis/${demi.name}.png`} 
                                    style={ demis[index].status.yes ? { opacity: 1 } : demis[index].status.no ? { opacity: .1 } : {} }
                                    />
                                    <div className="demi-status">
                                        <div className="status status-yes"
                                            style={ demis[index].status.yes ? { backgroundColor: '#EFB869', color: 'white', border: '1px solid #EFB869' } : {} }
                                            onClick={() => {
                                                    demis[index].status.yes = !demis[index].status.yes;
                                                    demis[index].status.no = false;
                                                    demis[index].status.maybe = false;
                                                    setDemis([...demis]);
                                                    localStorage.setItem("demis", JSON.stringify(demis));
                                            }}
                                        >✓</div>
                                        <div className="status status-no"
                                            style={ demis[index].status.no ? { backgroundColor: '#AE3F3D', color: 'white', border: '1px solid #AE3F3D' } : {} }
                                            onClick={() => {
                                                demis[index].status.no = !demis[index].status.no;
                                                demis[index].status.yes = false;
                                                demis[index].status.maybe = false;
                                                setDemis([...demis]);
                                                localStorage.setItem("demis", JSON.stringify(demis));
                                            }}
                                        >X</div>
                                        <div className="status status-maybe"
                                            style={ demis[index].status.maybe ? { backgroundColor: '#303030', color: 'white', border: '1px solid #303030' } : {} }
                                            onClick={() => {
                                                demis[index].status.maybe = !demis[index].status.maybe;
                                                demis[index].status.yes = false;
                                                demis[index].status.no = false;
                                                setDemis([...demis]);
                                                localStorage.setItem("demis", JSON.stringify(demis));
                                            }}
                                        >?</div>
                                    </div>
                                </div>
                                <textarea className="demi-notes" placeholder="Notes..." style={ demi.notes !== "" ? { color: "black" } : {}} 
                                    value={demi.notes}
                                    onChange={(event) => {
                                        demis[index].notes = event.target.value;
                                        setDemis([...demis]);
                                        localStorage.setItem("demis", JSON.stringify(demis));
                                    }}
                                />
                            </div>
                        ))
                }
            </div>
            <div id="score-area">
                <div id="score-header">
                    <div className="score-criteria">POSITION</div>
                    <div className="score-criteria">GUESS</div>
                    <div className="score-criteria">POWERS</div>
                    <div className="score-criteria">TOTAL</div>
                </div>
                <div id="score-content">
                    <input type="number" className="score-item" value={scores.position} placeholder="0" 
                        onChange={(event) => {
                            if(event.target.value === "") {
                                setScores({
                                    ...scores,
                                    position: null
                                });
                                return;
                            }

                            setScores({
                                ...scores,
                                position: parseInt(event.target.value) || 0
                            });
                            localStorage.setItem("scores", JSON.stringify(scores));
                        }} 
                    />
                    <input type="number" className="score-item" value={scores.guess} placeholder="0" 
                        onChange={(event) => {
                            if(event.target.value === "") {
                                setScores({
                                    ...scores,
                                    guess: null
                                });
                                return;
                            }

                            setScores({
                                ...scores,
                                guess: parseInt(event.target.value) || 0
                            });
                            localStorage.setItem("scores", JSON.stringify(scores));
                        }} 
                    />
                    <input type="number" className="score-item" value={scores.powers} placeholder="0"
                        onChange={(event) => {
                            if(event.target.powers === "") {
                                setScores({
                                    ...scores,
                                    powers: null
                                });
                                return;
                            }

                            const value = parseInt(event.target.value);
                            setScores({
                                ...scores,
                                powers: value > 0 ? -value : value
                            });
                            localStorage.setItem("scores", JSON.stringify(scores));
                        }} 
                    />
                    <div id="total" className="score-item">{ (scores.position || 0) + (scores.guess || 0) + (scores.powers || 0)}</div>
                </div>
            </div>
        </React.Fragment>
    );
}