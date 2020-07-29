export default ()=>(
  <div className="deadline_calendar">
    <div className="deadline" style={{backgroundColor: "var(--yellow)",marginLeft:"38px"}}>
        <img src="/medias/icons/bell.svg" className="bell" alt="Bell" />
        <span style={{fontWeight:"bold"}}>Reminder :</span>
        Testflight build #43
    </div>
    <div className="deadline" style={{backgroundColor: "var(--red)"}}>
        <img src="/medias/icons/bell.svg" className="bell" style={{animationDelay:"1s"}} alt="Bell" />
        <span style={{fontWeight:"bold"}}>Reminder :</span>
        Release #73 at 2
    </div>
</div>

)
