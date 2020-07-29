export default ()=>(
  <div className="versionFile">
    <div className="versionBlock currentDocument">
        <div className="date">Actual version</div>
        <img className="imgHistory clockRotate" src="/medias/icons/history.svg" alt=""/>
        <div className="blockFile">
            <img className="fileImg" src="/medias/icons/file-pdf.svg" alt=""/>
            <div className="nameFile">
                presentation_v3.pdf
            </div>
            <div className="sizeFile">
                44Mo
            </div>
        </div>
    </div>
    <div className="oldVersion">
        <div className="versionBlock versionBlock1" >
            <div className="date greyDate">3 hours ago</div>
            <img className="imgHistory" src="/medias/icons/history-lite.svg" alt=""/>
            <div className="blockFile">
                <img className="fileImg" src="/medias/icons/file-pdf.svg" alt=""/>
                <div className="nameFile">
                    presentation_v2.pdf
                </div>
                <div className="sizeFile">
                    30Mo
                </div>
            </div>
        </div>
        <div className="versionBlock versionBlock2">
            <div className="date greyDate">4 days ago</div>
            <img className="imgHistory" src="/medias/icons/history-lite.svg" alt=""/>
            <div className="blockFile">
                <img className="fileImg" src="/medias/icons/file-pdf.svg" alt=""/>
                <div className="nameFile">
                    presentation.pdf
                </div>
                <div className="sizeFile">
                    25Mo
                </div>
            </div>
        </div>
    </div>
</div>

)
