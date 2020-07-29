export default () => (
  <div className="history">
      <div className="whiteMessage">
          <img src="/medias/icons/emoji_7.png" alt=""/>
          <span style={{padding:"0px 8px"}}>Afficher plus de messages</span>
          <img src="/medias/icons/emoji_7.png" alt=""/>
      </div>
      <div className="">
          <div style={{marginTop:"8px"}}>
              <div className="square displayNoneForMobile"></div>
              <div className="long" style={{"width":"68px","display":"inline-block","verticalAlign":"super"}}></div>
              <div className="long" style={{"width":"40px","display":"inline-block","verticalAlign":"super"}}></div>
          </div>
          <div className="long marginLeft27" style={{"animationDelay":"0.7s","width":"251px"}}></div>
          <div className="long marginLeft27" style={{"animationDelay":"1.4s","margin":"8px 0px","width":"68px"}}></div>
      </div>
  </div>
)
