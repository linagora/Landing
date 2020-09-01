export default ()=>(
  <div className="channelImage">
    <div className="sidebar">
        <div className="groupBlock groupSelected">
            <div className="selectionBar"></div>
            <div className="groupSquare ">
                <div className="notification"></div>
            </div>
            <div className="groupName">Devs</div>
        </div>
        <div className="groupBlock">
            <div className="groupSquare"></div>
            <div className="groupName">Biz</div>
        </div>
        <div className="groupBlock">
            <div className="groupSquare"></div>
            <div className="groupName">HR</div>
        </div>
    </div>
    <div className="channelBar">
        <div className="titleApplication">
            Applications
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{"background-image":"url(/medias/icons/calendar.svg)"}} alt=""></div>
            <div className="channelTitle">Calendar</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/folder.svg)"}} alt=""></div>
            <div className="channelTitle">Documents</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/tasks.svg)"}} alt=""></div>
            <div className="channelTitle">Task</div>
        </div>
        <div className="titleApplication" style={{marginTop:"25px"}}>
            Channel
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_6.png)"}} alt=""></div>
            <div className="channelTitle">Général</div>
        </div>
        <div className="titleApplication">
            Development
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_4.png)"}} alt=""></div>
            <div className="channelTitle">Albatros</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_3.png)"}} alt=""></div>
            <div className="channelTitle">Connectors</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji.png)"}} alt=""></div>
            <div className="channelTitle">Monitoring</div>
        </div>
        <div className="channel channelSelected" >
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_8.png)"}} alt=""></div>
            <div className="channelTitle">UI/UX</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_5.png)"}} alt=""></div>
            <div className="channelTitle">Mobile</div>
        </div>
        <div className="channel">
            <div className="channelEmoji" style={{backgroundImage:"url(/medias/icons/emoji_2.png)"}} alt=""></div>
            <div className="channelTitle">Launch</div>
        </div>
    </div>
</div>

)
