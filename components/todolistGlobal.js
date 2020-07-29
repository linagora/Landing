export default ()=>(

<div className="todolistGlobal">
    <div className="column">
        <div className="card" >
            <div className="cardTitle">
                <div className="titleText">
                    Adopt a lama
                </div>
                <div className="elipsisBloc">
                    <div className="elipsis">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#444" fillRule="evenodd" d="M12 9.5c-1.411 0-2.556 1.12-2.556 2.5S10.59 14.5 12 14.5s2.556-1.12 2.556-2.5S13.41 9.5 12 9.5zm-8.944 0C1.644 9.5.5 10.62.5 12s1.144 2.5 2.556 2.5c1.41 0 2.555-1.12 2.555-2.5S4.467 9.5 3.056 9.5zm17.888 0c-1.41 0-2.555 1.12-2.555 2.5s1.144 2.5 2.555 2.5c1.412 0 2.556-1.12 2.556-2.5s-1.144-2.5-2.556-2.5z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="iconCard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                   <path fill="#92929C" fillRule="evenodd" d="M1.2 6h21.6a1.2 1.2 0 1 0 0-2.4H1.2a1.2 1.2 0 1 0 0 2.4zm0 4.8H18a1.2 1.2 0 1 0 0-2.4H1.2a1.2 1.2 0 1 0 0 2.4zm21.6 2.4H1.2a1.2 1.2 0 1 0 0 2.4h21.6a1.2 1.2 0 1 0 0-2.4zM18 18H1.2a1.2 1.2 0 1 0 0 2.4H18a1.2 1.2 0 1 0 0-2.4z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                   <path fill="#92929C" fillRule="evenodd" d="M21.5 8.328a1.586 1.586 0 0 0-.071-.324v-.108a1.285 1.285 0 0 0-.226-.336L14.078.36a1.27 1.27 0 0 0-.332-.228h-.107A1.038 1.038 0 0 0 13.247 0H6.063C4.095 0 2.5 1.612 2.5 3.6v16.8c0 1.988 1.595 3.6 3.563 3.6h11.875c1.967 0 3.562-1.612 3.562-3.6v-12-.072zm-7.125-4.236L17.451 7.2h-1.889A1.194 1.194 0 0 1 14.376 6V4.092zm4.75 16.308c0 .663-.532 1.2-1.188 1.2H6.063a1.194 1.194 0 0 1-1.187-1.2V3.6c0-.663.532-1.2 1.188-1.2H12V6c0 1.988 1.595 3.6 3.563 3.6h3.562v10.8z"/>
                </svg>
                <svg className="checkIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 6 6" style={{marginRight:"4px"}}>
                   <path  fillRule="evenodd" d="M5 0a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4zm.333 5V1A.333.333 0 0 0 5 .667H1A.333.333 0 0 0 .667 1v4c0 .184.149.333.333.333h4c.184 0 .333-.149.333-.333zM3.9 1.797h-.003a.335.335 0 1 1 .533.406l-1.523 2a.333.333 0 0 1-.527.004L1.57 3.17a.334.334 0 1 1 .527-.41l.543.703L3.9 1.797z"/>
               </svg>
               <div className="percentBloc">
                   <div className="percent">33%</div>
                   <div className="percent" style={{animationDelay:"2s"}}>75%</div>
                   <div className="percent percent100" style={{animationDelay:"4s"}}>100%</div>
               </div>
            </div>
            <div className="content">
                <img src="/medias/lama.jpg" alt="Lama"/>
            </div>
            <div className="labels">
                <div className="label" style={{backgroundColor: "var(--yellow)"}}>
                    office
                </div>
                <div className="label animatedLabel" style={{backgroundColor: "var(--red)",animationDelay:"1s"}}>
                    urgent
                </div>
            </div>
            <div className="users">
                <div className="user">
                    <img src="/medias/users/user1.jpg" alt="" className="user"/>
                </div>
                <div className="user">
                    <img src="/medias/users/user3.jpg" alt="" className="user"/>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="cardTitle">
                <div className="titleText">
                    Call Mme Peach
                </div>
            </div>
            <div className="iconCard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                   <path fill="#92929C" fillRule="evenodd" d="M1.2 6h21.6a1.2 1.2 0 1 0 0-2.4H1.2a1.2 1.2 0 1 0 0 2.4zm0 4.8H18a1.2 1.2 0 1 0 0-2.4H1.2a1.2 1.2 0 1 0 0 2.4zm21.6 2.4H1.2a1.2 1.2 0 1 0 0 2.4h21.6a1.2 1.2 0 1 0 0-2.4zM18 18H1.2a1.2 1.2 0 1 0 0 2.4H18a1.2 1.2 0 1 0 0-2.4z"/>
                </svg>
            </div>
            <div className="labels">
                <div className="label" style={{backgroundColor: "var(--green)"}}>
                    Low priority
                </div>
            </div>
            <div className="users">
                <div className="user">
                    <img src="/medias/users/user2.jpg" alt="" className="user"/>
                </div>
            </div>
        </div>
    </div>

</div>
)
