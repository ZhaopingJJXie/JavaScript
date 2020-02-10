class FontChooser extends React.Component {
    // componentDidMount();
    constructor(props) {
	super(props);
    //handle errors and default values

    if (parseInt(this.props.min) <= 0){
      console.log("min is negative")
      this.props.min = '1';
      // console.log("min is " +);
      console.log("this.props .min is" + this.props.min);
    }
    if (parseInt(this.props.min) > parseInt(this.props.max)){
      this.props.max = this.props.min;
    }
    if(parseInt(this.props.size) < parseInt(this.props.min)){

      this.props.size = this.props.min;
    }
    if(parseInt(this.props.size) > parseInt(this.props.max)){
      this.props.size = this.props.max;
    }

  console.log(this.props.size);
  this.state={fontSize: parseInt(this.props.size),
    color: (this.props.size==this.props.min || this.props.size==this.props.max)? 'red': 'black', 
              fontWeight: (this.props.bold=='false' ? 'normal': 'bold'),
              checked: (this.props.bold=='false' ? false : true)
               };
  this.handleDoubleClick = this.handleDoubleClick.bind(this);
  // documen.getElementById("checkbox").check = this.prop.bold;
}
    handleClickText( checkbox,increaseButton, decreaseButton, fontSizeSpan){
      //click on the text will pop upi the form
    // this.setState({color: 'green', fontSize: 20 });
    for (var i = 0 ; i < arguments.length; i++){
      var currentElement = document.getElementById(arguments[i]);
      //if the element has attr hidden, remove it
      if (currentElement.hasAttribute('hidden')){
        currentElement.removeAttribute('hidden')
      }else{
        //else create an attr hidden with the value of true
        currentElement.setAttribute('hidden', 'true')
      }
    }

    }

    handleClickDecreaseButton(textSpan){

      var fontSize = this.state.fontSize;
      if (fontSize > parseInt(this.props.min)){
        //if the current state of fontSize is bigger than the min
        //decrease textSizeSpan
        var textSize = document.getElementById(textSpan);
        textSize.innerHTML--;
        // decrease the fontSize by 1
        fontSize = fontSize - 1;
        this.setState({fontSize: fontSize});
        // console.log("fontSize after decrease " +fontSize );
        //make sure the color is black
        this.setState({color: 'black'});
      }
      if (fontSize == parseInt(this.props.min)){
        //if the size equals to the min, the color should be red
        this.setState({color: 'red'});
      }

    }
    handleClickIncreaseButton(textSpan){

      var fontSize = this.state.fontSize;
      if (fontSize < parseInt(this.props.max)){
        // if the current state dontsize is smaller than max
        //increase textSizeSpan by 1
        var textSize = document.getElementById(textSpan);
        textSize.innerHTML++;
        // console.log(textSize.innerHTML);
        //increase the fontSize by 1
        fontSize = fontSize + 1;
        this.setState({fontSize: fontSize});
        // console.log("fontSize after increase " +fontSize );
        this.setState({color: 'black'});
      }
      if(fontSize == parseInt(this.props.max)){
        //if the size equals to the max, the color should be red
        this.setState({color: 'red'});
      }

    }

    handleCheckbox(id){
    this.setState({fontWeight: (this.state.fontWeight=='normal' ? 'bold' : 'normal'),
  checked: this.state.checked? false: true});


  }

    handleDoubleClick(id1, id2){
      var size = parseInt(this.props.size);
      console.log(size) ;
      document.getElementById(id1).innerHTML = this.props.size;
      // this.setState()
      // this.setState({color: 'green'});
      this.setState({fontWeight: this.props.bold=='false' ? 'normal' : 'bold',
      color: 'black', fontSize: size, checked: this.props.bold=='false'? false: true});
      //check box should reset to the initial state


      console.log('after doubleclick, fontSiez is: ' + this.state.fontSize+
      ' color: ' + this.state.color + ' fontWeight: ' + this.state.fontWeight);
    }

    render() {

	return(

	       <div>

	       <input type="checkbox" id="boldCheckbox" hidden='true'
         checked={this.state.checked}
         onChange={this.handleCheckbox.bind(this, 'boldCheckbox')}/>

	       <button id="decreaseButton" hidden='true'
         onClick={this.handleClickDecreaseButton.bind(this, "fontSizeSpan")}>-</button>

	       <span id="fontSizeSpan" hidden='true'
         onDoubleClick={this.handleDoubleClick.bind(this, 'fontSizeSpan','boldCheckbox')}>
         {this.props.size}</span>

	       <button id="increaseButton" hidden='true'
         onClick={this.handleClickIncreaseButton.bind(this, "fontSizeSpan")}>+</button>

	       <span id="textSpan" style={{
           fontWeight: this.state.fontWeight,
           color:this.state.color,
           fontSize:this.state.fontSize}}
         onClick={this.handleClickText.bind(this ,'boldCheckbox','decreaseButton',
       'fontSizeSpan', 'increaseButton')}>{this.props.text}</span>

	       </div>
	);
    }
}
