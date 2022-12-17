export default function Result({correctWords, minutes}){
    return(
        <div>Speed: {((correctWords/minutes) || (0)).toFixed(0)} WPM</div>
    )

}