export default ()=>(
    <div className="mailInvitationCalendar sharedCalendar">
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
      <div className="invitations">
          <div className="invitation">
              <div className="user">
                  <img src="/medias/users/user4.jpg" alt="" className="userImage"/>
                  <div className="invitatedIcon">
                      <img src="/medias/icons/mail-add.svg" alt=""/>
                  </div>
              </div>
              <div className="textInvitation">
                  <img src="/medias/icons/going.svg" alt=""/>
                  <div className="email">
                      marie@soylentcorp.com
                  </div>
              </div>
          </div>
          <div className="invitation">
              <div className="user">
                  <img src="/medias/users/user2.jpg" alt="" className="userImage"/>
                  <div className="invitatedIcon">
                      <img src="/medias/icons/mail-add.svg" alt=""/>
                  </div>
              </div>
              <div className="textInvitation">
                  <img src="/medias/icons/going-maybe.svg" alt=""/>
                  <div className="email">
                      andrew@massivedynamic.com
                  </div>
              </div>
          </div>
          <div className="invitation">
              <div className="user">
                  <img src="/medias/users/user6.jpg" alt="" className="userImage"/>
                  <div className="invitatedIcon">
                      <img src="/medias/icons/mail-add.svg" alt=""/>
                  </div>
              </div>
              <div className="textInvitation">
                  <img src="/medias/icons/not-going.svg" alt=""/>
                  <div className="email">
                      david@initech.com
                  </div>
              </div>
          </div>
      </div>
  </div>

)
