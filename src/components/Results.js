export default function Result({ correctWords, minutes }) {
  return (
    <>
      {/* <div>Correct word: {correctWords}</div> */}
      <div><b>Speed:</b> {(correctWords / minutes || 0).toFixed(0)} WPM</div>
    </>
  );
}
