import classes from "../styles/Word.module.css";

export default function Word(porps){
    const{text, active, correct} = porps;
    if(active){
        return <span className={classes.active}>{text} </span>
    }
    if(correct===true){
        return <span className={classes.correct}>{text} </span>
    }
    if(correct===false){
        return <span className={classes.incorrect}>{text} </span>
    }
    return <span>{text} </span>
}