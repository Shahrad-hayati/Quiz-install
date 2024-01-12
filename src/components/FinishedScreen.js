function FinishedScreen({dispatch,points,maxPossiblePoints,highscore}) {
  const percentage = (points/maxPossiblePoints)* 100
  return (
    <>
    <p className="result">
      You Scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
    <p className="highscore">(highscore: {highscore} points)</p>



    <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>
        Restart quiz
      </button>
    </>
  )
}

export default FinishedScreen
