import * as React from "react";
import "./BarChart.css";

export interface BarChartProps {
	top5: number;
	top3: number;
	top1: number;
}

export default class BarChart extends React.Component<BarChartProps, any> {
	static defaultProps: Partial<BarChartProps> = {
		top5: 0,
		top3: 0,
		top1: 0,
	};

	calculateMargin = (value: number) => {
		return value < 20 ? 0 : -25;
	}

	calculateTextColor = (value: number) => {
		return value < 20 ? "black" : "white";
	}

	render() {
		const { top5, top3, top1 } = this.props;

		const min = 0;
		const max = Math.max(...[top5, top3, top1]);

		const top5new = ((top5 - min) / (max - min)) * 250;
		const top3new = ((top3 - min) / (max - min)) * 250;
		const top1new = ((top1 - min) / (max - min)) * 250;

		const styles = {
			top5: {
				marginBottom: top5new + this.calculateMargin(top5new),
				color: this.calculateTextColor(top5new),
			},
			top3: {
				marginBottom: top3new + this.calculateMargin(top3new),
				color: this.calculateTextColor(top3new),
			},
			top1: {
				marginBottom: top1new + this.calculateMargin(top1new),
				color: this.calculateTextColor(top1new),
			},
		};

		return (
			<div className="bar-chart">
				<div className="wrapper">
					<div className="bar-chart-bars">
						<div className="bar-values">
							<div style={styles.top5}>{top5}</div>
							<div style={styles.top3}>{top3}</div>
							<div style={styles.top1}>{top1}</div>
						</div>

						<div className="bar top5" style={{ height: top5new }} />
						<div className="bar top3" style={{ height: top3new }} />
						<div className="bar top1" style={{ height: top1new }} />
					</div>
					<div className="bar-chart-x-axis">
						<div>Top5</div>
						<div>Top3</div>
						<div>Top1</div>
					</div>
				</div>
			</div>
		);
	}
}
