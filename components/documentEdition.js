export default ()=>(
    <div className="documentEditionBlock show">
      <div className="documentEdition">
          <div className="document" style={{marginLeft:"0px"}}>
              <div className="">
                  <img className="fileImage" src="/medias/word.svg" alt="Word"/>
              </div>
              <div className="users">
                  <img src="/medias/users/user1.jpg" alt="User" className="user"/>
                  <img src="/medias/users/user2.jpg" alt="User" style={{animationDelay: "1s"}} className="user pulse"/>
                  <img src="/medias/users/user3.jpg" alt="User" style={{animationDelay: "1.2s"}} className="user pulse"/>
              </div>
          </div>
          <div className="document" style={{marginLeft:"80px"}}>
              <div className="">
                  <img className="fileImage" src="/medias/excel.svg" alt="Excel"/>
              </div>
              <div className="users">
                  <img src="/medias/users/user1.jpg" alt="User" className="user"/>
                  <img src="/medias/users/user5.jpg" alt="User" style={{animationDelay: "1s"}}  className="user pulse"/>
              </div>
          </div>
          <div className="document" style={{marginTop:"23px",marginRight:"0px"}}>
              <div className="">
                  <img className="fileImage" src="/medias/pdf.svg" alt="PDF"/>
              </div>
              <div className="users">
                  <img src="/medias/users/user4.jpg" alt="User" className="user"/>
                  <img src="/medias/users/user3.jpg" alt="User" className="user pulse" style={{animationDelay: "0.8s"}} />
                  <img src="/medias/users/user6.jpg" alt="User" style={{animationDelay: "1.5s"}}   className="user pulse"/>
              </div>
          </div>
      </div>
  </div>

)
