export default () =>(
  <div className="channelImage simpleChannel show">
    <div className="channelBar">
        <div className="titleApplication">
            <span style={{"flex":"1"}} >Channel</span>
            <img src="/medias/icons/add.svg" style={{"width":"20.8px","height":"20.8px","marginTop":"4px"}} alt=""/>
        </div>
        <div className="channel">
            <img className="channelEmoji" src="/medias/icons/emoji_6.png" alt=""/>
            <div className="channelTitle">Général</div>
        </div>
        <div className="titleApplication" style={{"marginTop":"14px"}}>
            Developpment
        </div>
        <div className="channel">
            <img className="channelEmoji" src="/medias/icons/emoji_4.png" alt=""/>
            <div className="channelTitle" style={{"fontWeight":"bold"}}>Albatros</div>
            <div className="redNotification pulse" style={{"animationDelay":"1s"}}>1</div>
        </div>
        <div className="channel">
            <img className="channelEmoji" src="/medias/icons/emoji_3.png" alt=""/>
            <div className="channelTitle">Connectors</div>
        </div>
        <div className="channel">
            <img className="channelEmoji" src="/medias/icons/emoji.png" alt=""/>
            <div className="channelTitle">Monitoring</div>
        </div>
        <div className="channel channelSelected">
            <img className="channelEmoji" src="/medias/icons/emoji_2.png" alt=""/>
            <div className="channelTitle">UI/UX</div>
        </div>
    </div>
</div>
)
