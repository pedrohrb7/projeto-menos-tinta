import React, { Component } from "react";
import Highcharts from "highcharts";

class Grafico1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: "",
					colorByPoint: true,
					data: [],
				},
			],
		};
	}

	highChartsRender() {
		Highcharts.chart({
			chart: {
				type: "column",
				renderTo: "grafico1",
			},
			title: {
				text: "",
			},
			subtitle: {
				text: "",
			},
			accessibility: {
				announceNewData: {
					enabled: true,
				},
			},
			xAxis: {
				type: "category",
			},
			yAxis: {
				title: {
					text: "Porcentagem de uso por usuário",
				},
			},
			legend: {
				enabled: false,
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: "{point.y:.1f}%",
					},
				},
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat:
					'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
			},
			series: this.state.series,
		});
	}

	componentDidMount() {
		let state = this.state;
		const { xAxis } = Highcharts.chart;
		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};
		fetch(
			"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/GrafXMediaEconomiaUsu?7AE67B",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				for (let item in result) {
					state.series[0].data.push({
						name: result[item].usu_nome,
						y: result[item].media,
					});
					this.setState(state);
				}

				this.highChartsRender();
			})

			.catch((error) => console.log("error", error));
	}

	render() {
		return (
			<div className="area-grafico">
				<h2 className="blue">Média de economia por usuário</h2>
				<div id="grafico1"></div>
			</div>
		);
	}
}

export default Grafico1;
