import React from"react";
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.typeStyle={display:"none"}

    }
    showContent=()=>{
        this.setState({
            typeStyle:{display:this.state.typeStyle.display==="block"?"none":"block"}
        })
    }
    showContent2=()=>{
        this.setState({
            typeStyle:{display:this.state.typeStyle.display==="block"?"block":"none"}
        })
    }
    render(){
        return(
            <div key={this.props.id}>
                <button className="button" onClick={this.showContent} onClick={this.showContent2}>{this.props.name}</button>
                <div style={this.state.typeStyle} key={this.props.id}>
                <img src={this.props.imgSrc}></img>
                <h1>{this.props.text}</h1>
                </div>
            </div>
        )
    }

}
export default Main;