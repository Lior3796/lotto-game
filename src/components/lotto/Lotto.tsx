import { Component } from "react";
import Ball from "../ball/Ball";
import ILotto from "../../types/ILotto";
import IBalls from "../../types/IBalls";

class Lotto extends Component<ILotto, IBalls> {
	constructor(props: ILotto) {
		super(props);
		this.state = {
			balls: Array.from({ length: this.props.numBalls }),
		};
		this.shuffle = this.shuffle.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	shuffle() {
		this.setState((curState) => {
			return {
				balls: curState.balls.map(
					(n) => Math.floor(Math.random() * this.props.maxNum) + 1
				),
			};
		});
	}

	handleClick(): void {
		this.shuffle();
	}
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div className="balls-container">
					{this.state.balls.map((b) => (
						<Ball num={b} />
					))}
				</div>
				<button className="Lotto-btn" onClick={this.handleClick}>
					Generate
				</button>
			</div>
		);
	}
}

export default Lotto;
