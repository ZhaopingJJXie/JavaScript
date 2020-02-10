// const request = new XMLHttpRequest();
// open()
class FontChooser extends React.Component {

    constructor(props) {
	super(props);
    }


    render() {

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" />
	       <button id="decreaseButton" >-</button>
	       <span id="fontSizeSpan" >{this.props.size}</span>
	       <button id="increaseButton" >+</button>
	       <span id="textSpan" style={{color: 'green'}}>{this.props.text}</span>
	       </div>
	);
    }
}
