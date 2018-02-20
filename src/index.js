import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import API_KEY from '../config/keys';
const API_KEY = API_KEY.youtube;

class App extends Component {
  constructor(props){
  super(props);

  this.state = {
    videos : [],
    selectedVideo : null
  };
this.videoSearch('');
}

videoSearch(term){
  YTsearch({key:API_KEY, term :term},(videos) => {
  this.setState({
    videos:videos,
    selectedVideo: videos[0]}); //this.setState({videos:videos}) in es6 it can be shorten
  });

}



  render(){
     const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
     //debounce calls the inside function every x ms in this case after 300

  return (
    <div>
    <SearchBar onSearchTermChange = {videoSearch} />
    <VideoDetail video ={this.state.selectedVideo}/>
    <VideoList
     onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
     videos ={this.state.videos}/>
    </div>
  );
  }
 }


ReactDOM.render(<App />, document.querySelector('.container'));
