import { Component } from "react";
import IPropNumber from "../../types/IPropNumber";

class Ball extends Component<IPropNumber> {
	constructor(props: IPropNumber) {
		super(props);
	}
	render() {
		return (
			<div className="ball">
				<h1>{this.props.num}</h1>
			</div>
		);
	}
}

export default Ball;
