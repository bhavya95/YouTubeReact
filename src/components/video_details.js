import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div> Loading...</div> //app component fetching data or it will throw an error and video will be undefined
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //"https://www.youtube.com/embed/" + videoId;
  return(
    <div className = "video-details col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className = "embed-responsive" src = {url}></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div className = "container">{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
