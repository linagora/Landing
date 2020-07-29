export default ()=>(
  <div className="synchCalendar">
    <div className="blocCalendar" >
        <div className="event" style={{backgroundColor: "var(--blue-green)"}}>
            <div className="titleEvent">
                <span style={{fontWeight:"bold"}}>Outside meeting</span>
                <span>(Google Calendar)</span>
            </div>
            <div className="clock">
                2:15 pm - 3:30 pm
            </div>
        </div>
        <div className="calendar">
            <img src="/medias/app/gcalendar.png"  alt=""/>
        </div>
    </div>
    <div className="blocCalendar" >
        <div className="event" style={{backgroundColor: "var(--primary)"}}>
            <div className="titleEvent">
                <span style={{fontWeight:"bold"}}>Picth ignition</span>
                <span>(Outlook Calendar)</span>
            </div>
            <div className="clock">
                6:45 pm - 7:45 pm
            </div>
        </div>
        <div className="calendar">
            <img src="/medias/app/outlook.png" alt=""/>
        </div>
    </div>
    <div className="blocCalendar" >
        <div className="event" style={{backgroundColor: "var(--yellow)"}}>
            <div className="titleEvent">
                <span style={{fontWeight:"bold"}}>Business lunch</span>
                <span>(Apple Calendar)</span>
            </div>
            <div className="clock">
                1:00 pm - 2:15 pm
            </div>
        </div>
        <div className="calendar">
            <img src="/medias/app/calendar-mac.png" alt=""/>
        </div>
    </div>
</div>

)
