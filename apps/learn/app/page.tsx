"use client";
import {useMemo,useState} from "react";
import {a1Foundations,speakingMissions} from "../content/a1-foundations";
export default function Home(){
 const [index,setIndex]=useState(0),[answers,setAnswers]=useState<Record<number,number>>({}),[checked,setChecked]=useState(false),[mission,setMission]=useState(0);
 const q=a1Foundations[index],selected=answers[index],score=useMemo(()=>a1Foundations.reduce((n,item,i)=>n+(answers[i]===item.answer?1:0),0),[answers]);
 const stage=index<5?"Warm-up":index<10?"Build the basics":index<15?"Use the language":"Think in French";
 function choose(v:number){if(!checked)setAnswers(p=>({...p,[index]:v}))}
 return <main className="shell"><nav className="nav"><a className="brand" href="/">LE CARNET <i>OUGANDAIS</i></a><span>LEARNING STUDIO</span></nav>
 <section className="hero"><p className="eyebrow">FRENCH, IN THE REAL WORLD · A1</p><h1>Learn it.<br/><em>Live it.</em></h1><p>French is not a set of answers to memorise. It is a way to meet people, ask for help, tell a story and take part.</p><div className="hero-meta"><span>20 questions</span><span>4 stages</span><span>3 speaking missions</span></div></section>
 <section className="quiz"><div className="quiz-top"><div><p className="eyebrow">A1 FOUNDATION CHECK</p><h2>Start with what you can say.</h2></div><div className="score">{score}<small>/20</small></div></div>
 <div className="progress"><span style={{width:((index+1)/20*100)+"%"}}/></div><div className="qmeta"><span>QUESTION {String(index+1).padStart(2,"0")} / 20</span><span>{stage}</span></div><h3>{q.prompt}</h3>
 <div className="options">{q.options.map((o,i)=><button key={o} onClick={()=>choose(i)} className={selected===i?"selected":""} disabled={checked}>{String.fromCharCode(65+i)} <span>{o}</span></button>)}</div>
 {checked&&<div className={selected===q.answer?"feedback good":"feedback"}><b>{selected===q.answer?"Bien joué.":"Let's learn from this."}</b><p>{q.why}</p></div>}
 <div className="quiz-actions"><button className="quiet" disabled={index===0} onClick={()=>{setChecked(false);setIndex(i=>Math.max(0,i-1))}}>Previous</button>{!checked?<button className="primary" disabled={selected===undefined} onClick={()=>setChecked(true)}>Check my answer</button>:index<19?<button className="primary" onClick={()=>{setChecked(false);setIndex(i=>i+1)}}>Next question</button>:<button className="primary" onClick={()=>{setIndex(0);setChecked(false)}}>Review from the start</button>}</div><p className="note">The first questions build confidence. The later ones ask you to choose language for a real situation.</p></section>
 <section className="missions"><p className="eyebrow">BEYOND THE SCORE</p><h2>Can you use it in a conversation?</h2><p className="intro">A correct answer matters. Being able to use the sentence with another person matters more.</p><div className="mission-card"><span>MISSION 0{mission+1} / 03</span><h3>{speakingMissions[mission].title}</h3><p>{speakingMissions[mission].prompt}</p><div className="mission-controls"><button className="quiet" disabled={mission===0} onClick={()=>setMission(m=>Math.max(0,m-1))}>Previous</button><button className="primary" onClick={()=>setMission(m=>(m+1)%speakingMissions.length)}>Next mission</button></div></div><p className="note">Speak aloud, record yourself on your phone if helpful, then try the same task with a classmate. These are practice missions, not a pronunciation grade.</p></section>
 <footer>LE CARNET OUGANDAIS <span>French learning, rooted in real life.</span></footer></main>
}
