export default ()=>[
  <div className="sharedCalendar d-none d-xl-flex d-sm-flex">
    <div className="calendarBloc" style={{height: "124px",backgroundColor: "var(--bluey-green)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Weekly catch-up</div>
            <div className="clock">12:30 pm - 2:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user1.jpg" alt="" className="user"/>
            <img src="/medias/users/user4.jpg" alt="" className="user"/>
        </div>
    </div>
    <div className="calendarBloc" style={{height: "83px",marginTop:"62px",backgroundColor: "var(--light-periwinkle)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Q4 forecast</div>
            <div className="clock">2:15 pm - 3:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user5.jpg" alt="" className="user"/>
            <img src="/medias/users/user3.jpg" alt="" className="user"/>
            <img src="/medias/users/user1.jpg" alt="" className="user"/>
            <img src="/medias/users/user6.jpg" alt="" className="user"/>
        </div>
    </div>
    <div className="calendarBloc" style={{height: "111px",marginTop:"22px",backgroundColor: "var(--light-salmon)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Design meeting</div>
            <div className="clock">1:00 pm - 2:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user2.jpg" alt="" className="user"/>
            <img src="/medias/users/user6.jpg" alt="" className="user"/>
            <img src="/medias/users/user3.jpg" alt="" className="user"/>
        </div>
    </div>
</div>,
<div className="sharedCalendar d-xl-none d-sm-none d-flex" style={{flexWrap:"wrap"}}>
    <div className="calendarBloc" style={{height: "124px",backgroundColor: "var(--bluey-green)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Weekly catch-up</div>
            <div className="clock">12:30 pm - 2:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user1.jpg" alt="" className="user"/>
            <img src="/medias/users/user4.jpg" alt="" className="user"/>
        </div>
    </div>
    <div className="calendarBloc" style={{height: "111px",backgroundColor: "var(--light-salmon)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Design meeting</div>
            <div className="clock">1:00 pm - 2:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user2.jpg" alt="" className="user"/>
            <img src="/medias/users/user6.jpg" alt="" className="user"/>
            <img src="/medias/users/user3.jpg" alt="" className="user"/>
        </div>
    </div>
    <div className="calendarBloc" style={{height: "83px",backgroundColor: "var(--light-periwinkle)"}}>
        <div className="calendarText">
            <div className="titleCalendar">Q4 forecast</div>
            <div className="clock">2:15 pm - 3:30 pm</div>
        </div>
        <div className="users">
            <img src="/medias/users/user5.jpg" alt="" className="user"/>
            <img src="/medias/users/user3.jpg" alt="" className="user"/>
            <img src="/medias/users/user1.jpg" alt="" className="user"/>
            <img src="/medias/users/user6.jpg" alt="" className="user"/>
        </div>
    </div>
</div>
]
