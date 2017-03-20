(function() {
	var prerem = document.documentElement.clientWidth / 5;
	var cssEl = document.createElement("style");
	document.documentElement.firstElementChild.appendChild(cssEl);
	cssEl.innerHTML = 'html{font-size:' + prerem + 'px!important;}';
})();

class Poster extends React.Component {
    constructor(props){
        super(props);
        var angle = Math.random();
		var distanceX = Number(Math.random());
		var distanceY = Number(Math.random());
        this.state = {
            transform: "translate(" + Number(distanceX * 5) + "rem," + Number(distanceY * 1) + "rem) rotate(" + Number(angle * 360) + "deg) rotateY(0deg)"       
        };

    }
	
	
	handleClick(event){	
		var transform = this.state.transform;
		var centerAndPositive = 'translate(2rem,0.2rem) rotate(0deg) rotateY(0deg)';
		var centerAndNegative = 'translate(2rem,0.2rem) rotate(0deg) rotateY(180deg)';
		var posision = (transform==centerAndPositive?centerAndNegative:centerAndPositive);
		this.setState({transform: posision});
		
		for(var i=1;i<=10;i++){
			var id = this.props.filename;
			if(i!=id){
				
				      
        
			}
		}
	}
	
    
    render() {
    	
        return (
            <div className="poster" onClick={e=>this.handleClick(e)} style={{transform: this.state.transform}} >
            <div className="photo">
                
            </div>

            <div className="font">
                {this.props.title}
            </div>            
            <div className="description">
                {this.props.desc}
            </div>
            </div>
             );
    }
}

var postersInformation = [
{filename:"1",title:"左耳",desc:"评论栏"},
{filename:"2",title:"中耳",desc:"评论栏"},
{filename:"3",title:"右耳",desc:"评论栏"}
];

class Posters extends React.Component {		
	render() {
		
		var posterNode = this.props.posterInfo.map(function (info,index) {
            return <Poster key={'info'+index}  filename={info.filename} title={info.title} desc={info.desc}  />
        	
		});
		
		return(
		<div>
            {posterNode}
        </div>
		);
	}	
}


class Navigation extends React.Component {
	render() {
		return(
			<div className="circleBox">
			<div className="circle" id="1"></div>
			<div className="circle" id="2"></div>
			<div className="circle" id="3"></div>
			<div className="circle" id="4"></div>
			<div className="circle" id="5"></div>
			<div className="circle" id="6"></div>
			<div className="circle" id="7"></div>
			<div className="circle" id="8"></div>
			<div className="circle" id="9"></div>
			<div className="circle" id="10"></div>
		</div>
		);
	}
}

class Stage extends React.Component {
	
	loadData(){
        $.ajax({
           url:this.props.url,
            dataType:"json",
            success:(comments)=>{
               this.setState({comments:comments});
            },
            error:(xhr,status,err)=>{
               console.log(err.toString());
        }
        });
    }
	
	render() {
		return(
			<div className="">
                 <Posters posterInfo={postersInformation}/>
                 <Navigation/>
             </div>
		);
	}
}

var box = ReactDOM.render(
	<Stage url="../posters.json"/>,
	document.getElementById('content')
);