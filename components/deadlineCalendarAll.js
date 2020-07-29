export default ()=>(
  <div className="deadline_calendar deadline_calendar_all">
    <div className="deadlineBlock" style={{marginLeft:"38px"}}>
        <div className="deadline" style={{backgroundColor: "var(--yellow)"}}>
            <img src="/medias/icons/bell.svg" className="bell" style={{"animation-delay":"0s"}} alt="Bell"/>
            <span style={{"font-weight":"bold"}}>Reminder :</span>
            Testflight build #43
        </div>
        <div className="deadline" style={{backgroundColor: "var(--bluey-green)"}}>
            <img src="/medias/icons/bell.svg" className="bell" style="animation-delay:3s" alt="Bell"/>
            <span style={{"font-weight":"bold"}}>Reminder :</span>
            Send meeting report
        </div>
    </div>
    <div className="">
        <div className="deadline" style={{backgroundColor: "var(--red)"}}>
            <img src="/medias/icons/bell.svg" className="bell" style={{"animation-delay":"2s"}} alt="Bell"/>
            <span style={{"font-weight":"bold"}}>Reminder :</span>
            Release #73 at 2
        </div>
        <div className="deadline" style={{backgroundColor: "var(--primary)"}}>
            <img src="/medias/icons/bell.svg" className="bell" style={{animationDelay:"1s"}} alt="Bell"/>
            <span style={{"font-weight":"bold"}}>Reminder :</span>
            Call Mr Taminou
        </div>
    </div>
</div>

)
