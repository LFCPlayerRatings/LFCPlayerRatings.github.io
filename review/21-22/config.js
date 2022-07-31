const configs = [];

function getPlayerResultList(player, colour, list, show = false) {
	return {
			label: player,
			backgroundColor: colour,
			borderColor: colour,
			data: list,
			fill: false,
			spanGaps: false,
			lineTension: 0,
			hidden: !show
	}
}

const TEAM_AVERAGE_LIST = [
	7.62,8.24,6.31,8.06,7.38,7.78,7.45,5.26,8.12,6.61,8.46,6.76,9.11,6.45,5.61,8.31,4.81,8.51,7.65,8.39,8.3,7,7.96,7.26,7.46,6.29,6.48,5.02,6.21,7.06,4.83,7.49,7.75,6.83,6.74,8.09,6.76,7.15,7.28,8.71,8.08,7.32,7.52,6.51,7.57,7.78,6.57,7.38,7.54,6.49,6.96,7.97,8.95,7.52,8.48,7.99,6.38,5.71,6.86,8.31,7.61,7.02,5.97
]

const defaultOptions = {
	responsive: true,
	title: {
		display: true,
		text: 'Season Review Player Performances'
	},
	tooltips: {
		mode: 'index',
		intersect: false,
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	scales: {
		xAxes: [{
			display: true,
			scaleLabel: {
				display: true,
				labelString: 'Opponent'
			}
		}],
		yAxes: [{
			display: true,
			scaleLabel: {
				display: true,
				labelString: 'Performance'
			}
		}]
	}
};

const TEAMS = [
	'Norwich',
	'Burnley',
	'Chelsea',
	'Leeds',
	'Milan',
	'Crystal Palace',
	'Norwich',
	'Brentford',
	'Porto',
	'Man City',
	'Watford',
	'Atletico Madrid',
	'Man United',
	'Preston North End',
	'Brighton',
	'Atletico Madrid',
	'West Ham',
	'Arsenal',
	'Porto',
	'Southampton',
	'Everton',
	'Wolves',
	'Milan',
	'Aston Villa',
	'Newcastle',
	'Spurs',
	'Leicester',
	'Leicester',
	'Chelsea',
	'Shrewsbury',
	'Arsenal',
	'Brentford',
	'Arsenal',
	'Crystal Palace',
	'Cardiff',
	'Leicester',
	'Burnley',
	'Inter',
	'Norwich',
	'Leeds',
	'Chelsea',
	'Norwich',
	'West Ham',
	'Inter',
	'Brighton',
	'Arsenal',
	'Nottingham Forest',
	'Watford',
	'Benfica',
	'Man City',
	'Benfica',
	'Man City',
	'Man United',
	'Everton',
	'Villarreal',
	'Newcastle',
	'Villarreal',
	'Spurs',
	'Aston Villa',
	'Chelsea',
	'Southampton',
	'Wolves',
	'Real Madrid'
];

configs.push({
	type: 'line',
	data: {
		labels: TEAMS,
		datasets: [
			getPlayerResultList('Team Average', '#000000', TEAM_AVERAGE_LIST, true),
			getPlayerResultList('Alisson', '#db0404', [
					8.88,8.88,6.96,8.27,7.01,9.11,undefined,5.09,7.72,7.75,undefined,9.2,9.09,undefined,7.62,7.81,2.9,8.26,7.28,9.03,7.54,7.81,8.05,4.94,7.09,7.09,undefined,5.27,undefined,undefined,7.28,7.05,undefined,9.69,undefined,8.05,9.36,7.74,8.34,7.69,undefined,7.13,7.58,7.13,8.53,9.06,7.55,8.44,7.56,7.71,6.82,7.88,8.98,8.67,7.93,8.17,6.83,6.65,7.47,9.48,7.78,8.17,6.14
				],
				true
			),
			getPlayerResultList('Robertson', '#fccf19', [
					undefined,undefined,4.93,7.41,7.67,undefined,6.72,3.74,8.35,7.04,7.9,6.2,8.95,undefined,4.4,undefined,3.63,undefined,7.66,8.99,8.62,7.19,undefined,8.25,7.27,7.18,undefined,undefined,undefined,7.12,5.01,7.8,8.06,8.07,6.94,8.14,7.02,7.31,undefined,8.73,7.96,undefined,7.85,6.73,7.37,9.05,undefined,7.32,7.5,6.49,undefined,6.66,9.01,9.28,8.48,8.3,5.73,4.67,undefined,7.82,undefined,7.22,5.76
				],
				true
			),
			getPlayerResultList('Van Dijk', '#710aad', [
					7.75,8.49,8.03,8.13,undefined,8.15,undefined,4.43,7.92,6.47,8.36,5.93,9.02,undefined,5.82,8.06,6.68,8.47,undefined,9.17,8.16,7.3,undefined,7.44,undefined,undefined,undefined,6.17,5.99,7,5.84,7.63,7.57,6.33,7.59,9.02,7.53,9.37,8.15,9.48,8.89,undefined,7.66,7.35,7.8,8.21,7.36,7.61,7.8,6.89,undefined,7.56,8.49,7.75,8.41,8.06,6.8,6.27,7.74,8.46,undefined,undefined,6.68
				],
				true
			),
			getPlayerResultList('Matip', '#2a891f', [
					7.99,8.45,7.44,8.57,7.37,undefined,undefined,4.21,7.85,7.41,8.4,6.27,undefined,5.78,undefined,8.05,4.91,7.96,7.58,undefined,7.49,7.97,undefined,8.68,8.15,6.35,undefined,7.29,undefined,undefined,7.18,8.31,6.35,5.16,undefined,8.28,6.88,undefined,6.45,9.55,8.2,undefined,undefined,6.6,8.68,8.63,undefined,7.46,undefined,6.5,5.99,undefined,8.52,7.65,undefined,7.96,undefined,undefined,7.87,8.58,8.44,7.02,undefined
				],
				true
			),
			getPlayerResultList('Trent', '#1999fc', [
					8.12,8.75,6.88,8.24,7.39,undefined,undefined,4.59,undefined,undefined,8.27,6.52,9.13,undefined,5.65,9.21,6.13,9.33,undefined,8.12,7.89,7.08,undefined,7.26,9.04,7.1,undefined,4.49,6.16,undefined,3.92,7.39,9.14,6.68,7.34,7.71,6.31,5.97,undefined,7.91,8.03,undefined,8.96,7.39,7.32,7.22,undefined,undefined,8.48,5.95,undefined,7.86,8.53,6.53,8.13,undefined,6.43,4.31,6.91,8.93,undefined,7.11,4.72
				],
				true
			),
			getPlayerResultList('Kelleher', '#ff26ab', [
					undefined,undefined,undefined,undefined,undefined,undefined,8.97,undefined,undefined,undefined,8.04,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.46,undefined,8.03,7.29,undefined,undefined,8.46,undefined,5.93,undefined,undefined,undefined,undefined,undefined,9.47,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Tsimikas', '#c79f00', [
					6.94,8.9,undefined,undefined,undefined,7.93,8.31,undefined,undefined,undefined,7.59,undefined,undefined,6.2,undefined,8.44,undefined,8.26,7.22,undefined,undefined,undefined,7.52,undefined,undefined,5.86,6.88,6.44,6.94,undefined,undefined,undefined,undefined,undefined,7.4,undefined,undefined,undefined,7.56,undefined,undefined,7.75,undefined,undefined,undefined,undefined,7.49,undefined,undefined,undefined,8.81,undefined,undefined,undefined,undefined,undefined,undefined,5.43,6.64,9.08,7.93,undefined,undefined
				]
			),
			getPlayerResultList('Konat\xE9', '#4e3549', [
					undefined,undefined,undefined,undefined,undefined,7.37,7.51,undefined,undefined,undefined,undefined,undefined,9.11,undefined,4.61,undefined,undefined,undefined,6.75,7.19,undefined,undefined,8.91,undefined,8.64,6.94,8.7,undefined,6.49,6.3,undefined,undefined,7.53,undefined,6.27,undefined,undefined,8.96,undefined,undefined,8,7.6,7.51,undefined,undefined,undefined,6.83,undefined,7.01,undefined,7.05,8.43,undefined,undefined,8.52,undefined,6.76,5.86,undefined,8.68,8.59,5.47,7.53
				]
			),
			getPlayerResultList('Gomez', '#8bc700', [
					undefined,undefined,undefined,undefined,6.52,undefined,7.79,undefined,6.49,5.33,undefined,undefined,undefined,5.87,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.78,undefined,undefined,undefined,4.75,undefined,undefined,undefined,5.42,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.44,undefined,undefined,7.01,undefined,undefined,undefined,undefined,7.12,8.15,undefined,undefined,6.21,undefined,undefined,undefined,undefined,8.65,undefined,undefined,undefined,undefined,6.69,undefined,undefined
				]
			),
			getPlayerResultList('Neco', '#0e1599', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.59,undefined,undefined,7.48,undefined,undefined,undefined,undefined,7.47,undefined,undefined,undefined,8.05,undefined,undefined,undefined,6.65,undefined,undefined,undefined,6.32,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Adrian', '#721010', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Beck', '#888855', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.39,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.22,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Phillips', '#558888', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.32,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.49,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Koumetio', '#00c781', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.37,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Bradley', '#555588', [
					undefined,undefined,undefined,undefined,undefined,undefined,6.31,undefined,undefined,undefined,undefined,undefined,undefined,6.92,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.43,undefined,undefined,7.36,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			)
		]
	},
	options: defaultOptions
});


configs.push( {
	type: 'line',
	data: {
		labels: TEAMS,
		datasets: [
			getPlayerResultList('Team Average', '#000000', TEAM_AVERAGE_LIST, true),
			getPlayerResultList('Fabinho', '#db0404', [
					7.82,undefined,6.12,9.03,8.29,7.29,undefined,5.02,8.25,5.25,undefined,7.75,undefined,undefined,undefined,8.35,4.79,8.93,7.03,8.38,8.17,7.62,6.72,7.57,undefined,undefined,undefined,5.96,5.34,8.88,5.23,8.69,8.35,7.1,undefined,8.6,8.8,7.34,undefined,8.6,8.4,undefined,7.19,6.89,7.26,8.25,7.07,7.96,7.68,4.67,6.33,7.7,8.65,7.36,8.68,7.17,7.25,5.94,4.52,undefined,undefined,undefined,5.99
				],
				true
			),
			getPlayerResultList('Henderson', '#fccf19', [
					undefined,7.68,5.25,7.1,8.32,7.66,undefined,5.67,7.83,5.16,7.85,6.18,9.14,undefined,6.49,8.05,4.77,7.74,7.37,7.95,9.63,6.46,undefined,7.5,6.95,undefined,5.94,4.44,4.3,undefined,3.35,7.19,6.85,5.99,6.54,undefined,5,7.99,7.95,8.31,7.54,7.61,7.5,6.71,6.68,7.07,6.48,6.96,6.77,6.01,6.27,6.42,8.19,7.77,8.43,7.74,6.92,5.74,7.48,8.52,7.51,7.14,5.69
				],
				true
			),
			getPlayerResultList('Thiago', '#710aad', [
					undefined,undefined,5.69,8.35,6.74,7.6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.08,4.14,8.17,9.35,8.21,7.9,8.16,undefined,7.28,5.43,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.58,8.37,7.66,7,8.72,8.8,undefined,undefined,undefined,6.69,7.07,7.39,6.69,8.68,7.33,6.42,6.61,9.11,9.89,7.51,9.3,7.08,6.13,6.45,7.08,8.34,undefined,7.6,5.75
				],
				true
			),
			getPlayerResultList('Keita', '#2a891f', [
					7.04,7.29,undefined,undefined,6.61,8.15,6.45,undefined,undefined,undefined,7.77,5.5,9.36,undefined,6.38,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.54,undefined,7.53,5.33,8.61,4.26,5.28,undefined,undefined,undefined,undefined,undefined,5.69,undefined,6.51,7.53,6.28,undefined,7.01,undefined,7.65,6.41,6.95,undefined,6.04,undefined,8.37,5.89,6.73,8.36,7.69,6.77,7.19,9.01,5.7,undefined,5.83,7.41,undefined,5.94,3.79
				]
			),
			getPlayerResultList('Milner', '#1999fc', [
					6.52,undefined,undefined,undefined,6.81,7.85,undefined,undefined,8.03,5.12,8.23,6.46,8.26,undefined,undefined,undefined,undefined,undefined,undefined,7.08,7.16,undefined,undefined,undefined,undefined,5.26,7.38,4.29,5.09,undefined,3.08,6.41,6.51,undefined,5.72,undefined,undefined,undefined,undefined,7.69,7.4,7.63,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.55,undefined,undefined,undefined,undefined,8.37,undefined,undefined,undefined,8.06,7.51,6.92,undefined
				]
			),
			getPlayerResultList('Ox', '#ff26ab', [
					5.45,undefined,undefined,5.16,undefined,undefined,5.14,undefined,6.18,undefined,6.92,7.35,8.06,6.25,4.16,8.1,4.54,8.25,7.92,7.27,undefined,6.67,8.16,5.88,6.38,undefined,7.75,4.35,4.58,undefined,5.1,6.99,undefined,7.01,undefined,undefined,undefined,undefined,4.39,undefined,undefined,5.32,undefined,undefined,undefined,undefined,5.12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Jones', '#c79f00', [
					undefined,undefined,undefined,undefined,6.67,6.97,7.59,6.79,9.59,5.12,undefined,undefined,8.51,6.14,3.37,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.33,6.42,7.37,7.55,6.6,5.36,6.3,undefined,undefined,undefined,7.68,undefined,7.5,undefined,6.14,undefined,undefined,undefined,5.37,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.03,undefined,6.85,undefined,undefined
				]
			),
			getPlayerResultList('Elliott', '#4e3549', [
					undefined,7.94,7,8.01,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.86,7.49,undefined,5.68,undefined,undefined,7.15,7.17,undefined,undefined,undefined,undefined,5.09,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.83,undefined,undefined
				]
			),
			getPlayerResultList('Morton', '#8bc700', [
					undefined,undefined,undefined,undefined,undefined,undefined,7.53,undefined,undefined,undefined,undefined,undefined,undefined,6.65,undefined,undefined,undefined,undefined,7.73,undefined,undefined,undefined,7.92,undefined,undefined,4.91,5.66,undefined,undefined,7.42,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.67,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Dixon-Bonner', '#0e1599', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.46,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Frauendorf', '#721010', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.39,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			)
		]
	},
	options: defaultOptions
});


configs.push({
	type: 'line',
	data: {
		labels: TEAMS,
		datasets: [
			getPlayerResultList('Team Average', '#000000', TEAM_AVERAGE_LIST, true),
			getPlayerResultList('Salah', '#db0404', [
					9.43,7.9,6.86,8.72,8.18,8.97,undefined,6.94,9.07,9.56,9.84,8.44,9.97,undefined,6.05,8.07,5.52,8.75,8.3,7.96,9.62,7.36,8.28,7.99,8.16,5.15,undefined,3.86,7.43,undefined,undefined,undefined,undefined,undefined,undefined,8.11,5.92,7.09,8.59,9.39,7.04,undefined,5.22,6,6.86,6.86,undefined,5.58,5.26,6.46,6.55,6.14,9.31,7.84,8.41,6.75,6.48,4.12,5.61,6.94,undefined,7.61,5.84
				],
				true
			),
			getPlayerResultList('Jota', '#fccf19', [
					8.01,8.26,5.96,7.3,6.58,5.73,undefined,6.44,6.98,6.3,undefined,6.23,9.1,undefined,4.94,8.63,4.93,8.6,undefined,9.15,8.85,4.69,undefined,6.23,7.72,7.2,8.69,4.22,5.74,undefined,4.18,6.54,9.62,6.34,8.26,9.24,6.3,6.05,undefined,undefined,7.05,6.62,6.1,4.94,6.49,7.42,6.27,7.98,6.43,6.81,6.91,undefined,8.32,6.54,7.13,7.09,4.56,4.22,6.29,7.55,6.49,5.71,5
				],
				true
			),
			getPlayerResultList('Man\xE9', '#710aad', [
					7.69,8.07,4.31,6.66,5.71,7.89,undefined,4.9,7.76,7.52,8.77,6.41,7.83,undefined,6.89,8.64,4.13,8.68,7.35,8.12,7.4,5.33,7.06,7.09,7.23,6.74,undefined,2.72,6.79,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.89,6.17,8.05,9.32,7.47,undefined,7.66,5.75,7.18,6.63,undefined,6.22,7.21,7.51,6.24,9.51,9.64,6.76,8.61,6.8,7.46,4.8,8.26,7.77,undefined,8.32,6.1
				],
				true
			),
			getPlayerResultList('Firmino', '#2a891f', [
					8.38,undefined,5.65,undefined,undefined,undefined,undefined,5.15,8.76,5.57,9.62,7.25,9.14,undefined,4.39,7.08,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.81,5.74,7.38,4.18,undefined,8.05,4.32,7.44,7.3,6.16,6.35,6.91,5.08,7.74,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.77,6.29,7.61,6.93,undefined,8.69,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.31,8.24,5.48,5.52
				]
			),
			getPlayerResultList('Diaz', '#1999fc', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.95,8.38,undefined,7.96,7.91,8.67,8.86,undefined,7.93,6.66,8.67,6.65,5.86,undefined,8.76,6.2,7.53,8.51,9.21,8.93,8.39,7.75,9.28,8,7.92,9.05,undefined,7.54,5.49
				]
			),
			getPlayerResultList('Origi', '#ff26ab', [
					undefined,undefined,undefined,undefined,7.2,undefined,8.16,undefined,undefined,undefined,undefined,undefined,undefined,7.29,undefined,6.85,7.39,undefined,6.63,undefined,undefined,9.72,8.35,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.98,8.01,7.14,7,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,9.49,undefined,undefined,undefined,undefined,undefined,undefined,6.72,undefined,undefined
				]
			),
			getPlayerResultList('Minamino', '#c79f00', [
					undefined,undefined,undefined,undefined,undefined,undefined,9,undefined,6.53,undefined,undefined,undefined,undefined,6.56,undefined,7.06,5.97,8.33,7.16,undefined,undefined,undefined,6.75,undefined,undefined,undefined,8,undefined,undefined,6.21,3.72,7.73,6.85,5.39,7.46,undefined,undefined,undefined,undefined,undefined,undefined,9.39,undefined,undefined,undefined,undefined,6.25,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.36,undefined,undefined
				]
			),
			getPlayerResultList('Gordon', '#4e3549', [
					undefined,undefined,undefined,undefined,undefined,undefined,6.77,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.88,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Blair', '#8bc700', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.58,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			),
			getPlayerResultList('Woltman', '#0e1599', [
					undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.65,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
				]
			)
		]
	},
	options: defaultOptions
});
