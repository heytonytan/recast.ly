var VideoDetails = (props) => {
  return (<div className="video-details">
    <div className="details-body">
      <span className="glyphicon glyphicon-eye-open"></span><span className="video-details-views">&nbsp;10&nbsp;&nbsp;&nbsp;</span>
      <span className="glyphicon glyphicon-thumbs-up"></span><span className="video-details-likes">&nbsp;100&nbsp;&nbsp;&nbsp;</span>
      <span className="glyphicon glyphicon-thumbs-down"></span><span className="video-details-dislikes">&nbsp;92&nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>);
};

window.VideoDetails = VideoDetails;