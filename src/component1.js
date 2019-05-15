import React, {Component} from 'react';
import Main from'./Main';
import tunis from './tunis.jpg';
import sfax from './sfax.jpg';
import sousse from './sousse.jpg';
import './component1.css'
class GetImages extends React.Component {
  
  content =[
     
      {
        id: 1,
        name: "omrane",
        imgSrc: tunis,
        text:"great"
      },
      {
        id: 2,
        name: "anas",
        imgSrc: sfax,
        text:"hello"

      },
      {
        id: 3,
        name: "sami",
        imgSrc: sousse,
        text:"hello world"
      },
     
    ]
  
getComponents(){
  const cpt=this.content.map(e=>(
    <Main name={e.name} imgSrc={e.imgSrc} text={e.text} key={this.props.id}/>
  ));
  return cpt;
  }
  
render(){
  return(<span>{this.getComponents()}</span>)
 
}
 
  
}

  
          
         
  
  
export default GetImages;
