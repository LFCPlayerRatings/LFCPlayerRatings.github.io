const configs = [];

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
    'Arsenal(CS)',
    'Leeds (H)',
    'Chelsea (A)',
    'Lincoln (A)',
    'Arsenal (H)',
    'Arsenal (LC)',
    'Aston Villa (A)',
    'Everton (A)',
    'Ajax (A)',
    'Sheffield United (H)',
    'Midtjylland (H)',
    'West Ham (H)',
    'Atalanta (A)',
    'Man City (A)',
    'Leicester (H)',
    'Atalanta (H)',
    'Brighton (A)',
    'Ajax (H)',
    'Wolves (H)',
    'Midtjylland (A)',
    'Fulham (A)',
    'Spurs (H)',
    'Crystal Palace (A)',
    'West Brom (H)',
    'Newcastle (A)',
    'Southampton (A)',
    'Aston Villa (FA)',
    'Man United (H)',
    'Burnley (H)',
    'Man United (FA)',
    'Spurs (A)',
    'West Ham (A)',
    'Brighton (H)',
    'Man City (H)',
    'Leicester (A)',
    'Leipzig (A)',
    'Everton (H)',
    'Sheffield United (A)',
    'Chelsea (H)',
    'Fulham (H)',
    'Leipzig (H)',
    'Wolves (A)',
    'Arsenal (A)',
    'Real Madrid (A)',
    'Aston Villa (H)',
    'Real Madrid (H)',
    'Leeds (A)',
    'Newcastle (H)',
    'Southampton (H)',
    'Man United (A)',
    'West Brom (A)',
    'Burnley (A)',
    'Crystal Palace (H)'
];

configs.push({
    type: 'line',
    data: {
        labels: TEAMS,
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [
                5.81,5.94,7.8,7.25,8,6.37,3.65,7.05,7.06,7.57,6.79,7.16,8.22,6.81,8.27,4.9,6.36,7.63,8.35,6.45,5.87,8.12,8.97,5.42,5.38,4.3,6.3,6.04,4.54,5.02,7.85,7.81,4.24,4.27,4.81,7.36,4.46,7.07,4.23,4.33,7.8,6.86,8,4.43,6.55,6.23,6.25,5.46,7.16,7.8,7.32,7.68,8.14
            ],
            fill: false,
            spanGaps: false,
            lineTension: 0
        }, {
            label: 'Alisson',
            fill: false,
            backgroundColor: '#db0404',
            borderColor: '#db0404',
            data: [5.79,5.44,9.03,undefined,8.83,undefined,undefined,undefined,undefined,7.42,8.07,6.87,9.05,7.97,8.2,6.45,7.52,undefined,undefined,undefined,8.09,7.39,8.56,6.71,7.69,4.78,undefined,8.94,6.16,5.06,7.37,7.48,undefined,1.88,3.19,7.17,5.45,undefined,5.71,5.49,7.85,6.55,7.91,4.48,5.24,7.62,8.53,6.97,8.96,6.71,9.91,8.24,8.18],
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Fabinho',
                backgroundColor: '#fc7b19',
                borderColor: '#fc7b19',
                data: [undefined,undefined,9.48,undefined,undefined,undefined,undefined,undefined,9.34,7.08,6.59,undefined,undefined,undefined,8.34,5.46,6.77,8.17,8.71,8.39,6.34,8.47,8.96,6.31,6.84,4.96,6.56,8.23,5.42,4.9,undefined,undefined,undefined,4.1,undefined,undefined,undefined,undefined,4.25,5.12,9.26,7.41,9.27,4.86,7.14,6.83,6.5,6.13,7.42,7.93,7.29,7.01,7.78],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Kabak',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.93,8.26,3.83,6.38,4.63,undefined,7.92,8.3,8.07,5.38,6.6,6.78,6.85,6.76,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Alexander-Arnold',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [4.08,undefined,7.14,undefined,7.95,undefined,2.22,5.71,6.24,6.97,8.57,7.3,8.37,6.73,undefined,undefined,undefined,undefined,8.06,6.61,4.84,7.25,8.74,4.39,4.33,2.44,undefined,5.13,2.74,4.1,8.84,8,3.98,4.08,5.09,7.89,5.55,8.09,3.96,4.06,7.4,7.58,9.11,3.55,7.59,7.96,7.47,6.17,7.46,9.39,8.56,7.65,8.08],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Gomez',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [5.74,4.43,undefined,undefined,8.21,6.39,1.58,6.15,7.62,8.11,7.23,6.18,8.16,7.01,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Robertson',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [7.51,6.77,7.77,undefined,7.73,undefined,5.12,7.82,8.47,7.74,7.09,7.45,8.2,7.34,9.42,5.58,7.11,7.83,8.91,6.59,5.58,8.49,9.39,6.45,6.27,5.35,undefined,6.28,4.74,4.87,7.44,7.64,4.6,4.5,5.15,7.61,4.66,7.28,4.7,4.41,7.4,6.87,7.16,4.71,7.06,6.72,6.15,5.97,6.97,7.76,6.95,8.03,8.19],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Van Dijk',
                backgroundColor: '#ff26ab',
                borderColor: '#ff26ab',
                data: [6.48,4.78,7.93,7.89,8.28,7.55,2.89,6.69,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Matip',
                backgroundColor: '#0e1599',
                borderColor: '#0e1599',
                data: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.17,undefined,undefined,undefined,undefined,undefined,7.13,8.29,5.26,undefined,7.89,8.75,undefined,5.3,undefined,8.85,6.23,undefined,undefined,undefined,undefined,5.65,undefined,7.37,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Adrian',
                fill: false,
                backgroundColor: '#c79f00',
                borderColor: '#c79f00',
                data: [undefined,undefined,undefined,7.42,undefined,7.41,1.87,5.16,6.14,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.14,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'N. Williams',
                backgroundColor: '#8bc700',
                borderColor: '#8bc700',
                data: [3.85,undefined,undefined,5.81,undefined,7,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.09,3.29,3.83,7.89,7.47,undefined,6.03,undefined,undefined,undefined,undefined,undefined,6.8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3.96,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'R. Williams',
                backgroundColor: '#00c781',
                borderColor: '#00c781',
                data: [undefined,undefined,undefined,6.37,undefined,7.38,undefined,undefined,undefined,undefined,7.96,undefined,8.21,undefined,undefined,5.03,undefined,undefined,undefined,7.3,undefined,7.65,undefined,4.66,undefined,undefined,4.74,undefined,undefined,2.97,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6.1,7.3,5.85,6.52,7.66],
                fill: false,
                spanGaps: false,
                lineTension: 0
            }
        ]
    },
    options: defaultOptions
});


configs.push( {
    type: 'line',
    data: {
        labels: TEAMS,
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [5.81,5.94,7.8,7.25,8,6.37,3.65,7.05,7.06,7.57,6.79,7.16,8.22,6.81,8.27,4.9,6.36,7.63,8.35,6.45,5.87,8.12,8.97,5.42,5.38,4.3,6.3,6.04,4.54,5.02,7.85,7.81,4.24,4.27,4.81,7.36,4.46,7.07,4.23,4.33,7.8,6.86,8,4.43,6.55,6.23,6.25,5.46,7.16,7.8,7.32,7.68,8.14],
            fill: false,
            spanGaps: false,
            lineTension: 0
        }, {
            label: 'Henderson',
            fill: false,
            backgroundColor: '#db0404',
            borderColor: '#db0404',
            data: [undefined,6.12,7.45,undefined,undefined,undefined,undefined,8.3,7.37,8.21,6.92,7.52,8.35,7.54,undefined,undefined,7.21,7.85,8.69,7.18,5.9,8.2,9.54,5.41,4.81,4.65,4.93,6.98,undefined,undefined,8.25,8.39,5.82,4.86,5.79,7.8,5.59,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Wijnaldum',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [4.19,5.57,6.68,undefined,7.57,6.12,3.15,undefined,7.04,6.75,6.98,6.99,8,6.51,7.56,5.46,6.18,7.68,9.13,undefined,5,8.74,8.66,4.96,5.11,4.73,6.18,5.59,4.81,4.67,7.95,8.1,3.6,4.5,4.78,6.79,4.07,7.38,4.19,3.63,7.85,5.83,7.17,3.8,5.29,6.02,4.17,4.28,6.06,6.74,undefined,6.09,8.55],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Keita',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [6.75,6.1,6.72,6.27,7.49,undefined,2.86,undefined,undefined,undefined,undefined,undefined,7.09,undefined,7.63,undefined,undefined,undefined,undefined,5.55,undefined,undefined,8.59,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.16,7.2,6.29,undefined,2.52,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Milner',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [6.22,undefined,7.03,undefined,6.89,6.67,4.72,undefined,7.03,undefined,6.41,undefined,7.36,6.66,8.9,5.42,6.24,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.18,4.53,6.75,undefined,undefined,5.42,8.04,7.37,4.2,3.76,4.67,undefined,undefined,6.33,undefined,3.57,6.78,6.28,7.48,undefined,6.2,7.24,6.67,5.75,undefined,undefined,undefined,undefined,7.26],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Shaqiri',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [undefined,undefined,undefined,8.16,undefined,undefined,undefined,undefined,6.35,undefined,7.47,8.29,undefined,5.93,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.36,8.25,6.55,5.3,undefined,4.6,7.86,3.43,3.79,undefined,6.02,4.33,undefined,undefined,4.14,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.62,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Jones',
                backgroundColor: '#ff26ab',
                borderColor: '#ff26ab',
                data: [5.95,6.1,undefined,9.15,undefined,6.19,4.34,undefined,5.47,undefined,undefined,5.95,8.02,undefined,8.17,5.28,5.65,8.89,8.09,undefined,7.17,8.91,8.28,4.12,3.84,undefined,5.4,5.28,undefined,5.25,6.68,8.04,undefined,6,5.31,8.23,4.32,8.88,4.68,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4.47,undefined,7.47,6.57,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Ox',
                backgroundColor: '#0e1599',
                borderColor: '#0e1599',
                data: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8.22,4.77,undefined,3.28,5.68,undefined,3.73,undefined,undefined,6.99,2.98,undefined,3.65,5.14,undefined,undefined,3.34,undefined,undefined,6.93,undefined,undefined,undefined,undefined,3.85,undefined,undefined,undefined,undefined,8.37,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Thiago',
                backgroundColor: '#c79f00',
                borderColor: '#c79f00',
                data: [undefined,undefined,8.11,undefined,undefined,undefined,undefined,8.61,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.78,4.71,8.66,7.38,5.09,5.27,7.59,7.7,4.63,4.13,3.45,7.06,4.05,6.56,3.76,undefined,8.59,5.99,7.9,5.46,6.91,5.42,6.5,7.48,8.08,8.18,8.88,8.55,8.92],
                fill: false,
                spanGaps: false,
                lineTension: 0
            }
        ]
    },
    options: defaultOptions
});


configs.push({
    type: 'line',
    data: {
        labels: TEAMS,
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [5.81,5.94,7.8,7.25,8,6.37,3.65,7.05,7.06,7.57,6.79,7.16,8.22,6.81,8.27,4.9,6.36,7.63,8.35,6.45,5.87,8.12,8.97,5.42,5.38,4.3,6.3,6.04,4.54,5.02,7.85,7.81,4.24,4.27,4.81,7.36,4.46,7.07,4.23,4.33,7.8,6.86,8,4.43,6.55,6.23,6.25,5.46,7.16,7.8,7.32,7.68,8.14],
            fill: false,
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Man\xE9',
                fill: false,
                backgroundColor: '#db0404',
                borderColor: '#db0404',
                data: [5.44,6.41,9.39,undefined,9,undefined,undefined,8.29,7.55,7.86,6.19,6.83,8.79,7.11,7.88,3.78,6.14,6.13,7.97,undefined,4.97,7.46,9.29,6.49,4.45,5.18,7.36,4.66,4.08,4.83,8.51,undefined,undefined,4.39,4.7,8.1,3.57,6.3,2.63,3.26,6.92,6.22,6.88,2.63,4.18,4.45,6.58,2.64,7.48,6.11,6.03,7.14,9.29],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Salah',
                fill: false,
                backgroundColor: '#fc7b19',
                borderColor: '#fc7b19',
                data: [4.49,9.44,7.48,undefined,7.98,5.75,6.71,7.94,6.48,7.69,7.18,7.11,8.75,7.09,undefined,4.32,6.47,6.13,8.94,7.51,5.66,7.94,9.75,4.02,3.75,3.33,6.02,4.19,4.03,7.26,7.83,9.51,4.17,5.39,6.24,8.63,4.26,6.82,5.24,3.89,7.7,6.25,8.34,6.15,7.72,4.95,5.38,5.87,7.09,8.54,8.42,7.01,8.04],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Firmino',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [4.92,5.39,7.23,undefined,7.37,undefined,2.79,6.2,5.84,7.29,5.07,5.32,6.79,5.43,8.7,5.11,6.18,7.47,8.03,6.23,5.12,8.78,9.83,5.94,5,3.58,6.18,3.24,3.13,6.11,8.66,7.9,3.29,4.19,5.64,6.97,3.04,6.78,2.83,undefined,undefined,undefined,7.09,undefined,7.41,4.75,6.1,4.76,6.59,9.18,6.93,8.08,7.67],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Jota',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [undefined,undefined,undefined,6.31,8.45,7.16,5.1,6.25,7.79,8.16,7.84,8.94,9.95,6.04,9.03,5.61,7.57,6.49,6.87,5.77,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5.02,4.82,7.35,7.65,9.6,5.33,6.82,4.8,6.55,3.75,6.22,8.38,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Origi',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [undefined,undefined,undefined,6.7,undefined,3.88,undefined,undefined,undefined,undefined,4.2,undefined,undefined,undefined,undefined,2.19,undefined,undefined,undefined,4.22,undefined,undefined,undefined,undefined,undefined,undefined,5.05,undefined,4.05,undefined,undefined,5.9,2.1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7.68,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Minamino',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [7.82,undefined,undefined,9.28,undefined,6.08,4.31,undefined,7.11,undefined,4.92,undefined,undefined,undefined,undefined,undefined,4.72,undefined,undefined,6.1,undefined,6.35,8.89,undefined,undefined,undefined,6.1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                fill: false,
                spanGaps: false,
                lineTension: 0
            }
        ]
    },
    options: defaultOptions
});
