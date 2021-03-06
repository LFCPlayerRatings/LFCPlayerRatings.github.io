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

const TEAMS = ['Palace', 'Brighton', 'Leicester', 'Tottenham', 'PSG', 'Southampton', 'Chelsea', 'Chelsea', 'Napoli', 'City', 'Huddersfield', 'Red Star',
    'Cardiff', 'Arsenal', 'Red Star', 'Fulham', 'Watford', 'PSG', 'Everton', 'Burnley', 'Bournemouth', 'Napoli', 'United', 'Wolves', 'Newcastle',
    'Arsenal', 'City', 'Wolves', 'Brighton', 'Palace', 'Leicester', 'West Ham', 'Bournemouth', 'Bayern', 'United', 'Watford', 'Everton', 'Burnley',
    'Bayern', 'Fulham', 'Tottenham', 'Southampton', 'Porto', 'Chelsea', 'Porto', 'Cardiff', 'Huddersfield', 'Barcelona', 'Newcastle', 'Barcelona',
    'Wolves', 'Tottenham'
];

configs.push({
    type: 'line',
    data: {
        labels: ['Palace', 'Brighton', 'Leicester', 'Tottenham', 'PSG', 'Southampton', 'Chelsea', 'Chelsea', 'Napoli', 'City', 'Huddersfield', 'Red Star',
            'Cardiff', 'Arsenal', 'Red Star', 'Fulham', 'Watford', 'PSG', 'Everton', 'Burnley', 'Bournemouth', 'Napoli', 'United', 'Wolves', 'Newcastle',
            'Arsenal', 'City', 'Wolves', 'Brighton', 'Palace', 'Leicester', 'West Ham', 'Bournemouth', 'Bayern', 'United', 'Watford', 'Everton', 'Burnley',
            'Bayern', 'Fulham', 'Tottenham', 'Southampton', 'Porto', 'Chelsea', 'Porto', 'Cardiff', 'Huddersfield', 'Barcelona', 'Newcastle', 'Barcelona',
            'Wolves', 'Tottenham'
        ],
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [
                7.70, 7.50, 6.72, 7.69, 7.87, 7.78, 6.15, 6.84, 5.21, 6.90, 6.72, 8.18, 7.29,
                6.25, 4.14, 7.27, 7.46, 5.58, 7.30, 7.33, 8.14, 8.07, 7.83, 7.60, 8.24, 8.50,
                5.76, 4.68, 7.43, 6.86, 6.08, 4.98, 8.29, 6.94, 5.46, 8.76, 5.62, 7.48, 7.62,
                6.53, 7.10, 7.17, 7.77, 8.56, 7.65, 7.65, 8.49, 5.80, 6.87, 9.53, 7.91, 8.39
            ],
            fill: false,
            spanGaps: false,
            lineTension: 0
        }, {
            label: 'Alisson',
            fill: false,
            backgroundColor: '#db0404',
            borderColor: '#db0404',
            data: [
                8.70, 7.97, 5.45, 7.29, 6.89, 7.24, undefined, 8.61, 7.86, 7.88, 7.12, 7.41, 6.69,
                6.33, 4.84, 7.17, 7.42, 8.41, 9.25, 8.85, 8.57, 9.74, 6.12, 7.57, 8.33, 8.40,
                6.92, undefined, 7.53, 5.56, 6.14, 5.03, 7.72, 5.91, 7.87, 8.60, 7.29, 6.80, 7.60,
                5.60, 5.88, 6.99, 7.40, 8.18, 8.35, 7.78, 8.18, 5.72, 7.02, 9.83, 8.66, 9.69
            ],
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Alexander-Arnold',
                fill: false,
                backgroundColor: '#fc7b19',
                borderColor: '#fc7b19',
                data: [ //im just gonna start listing this the lazy way sorry
                    6.70,
                    7.20,
                    6.13,
                    7.38,
                    8.08,
                    7.66,
                    undefined,
                    6.29,
                    3.65,
                    undefined,
                    undefined,
                    7.10,
                    6.88,
                    4.05,
                    3.10,
                    6.17,
                    7.86,
                    undefined,
                    7.29,
                    7.14,
                    undefined,
                    7.70,
                    undefined,
                    undefined,
                    8.02,
                    7.93,
                    5.35,
                    undefined,
                    7.39,
                    undefined,
                    undefined,
                    undefined,
                    7.23,
                    6.29,
                    undefined,
                    9.80,
                    5.90,
                    6.42,
                    7.27,
                    5.89,
                    7.68,
                    6.54,
                    7.26,
                    8.35,
                    7.89,
                    undefined,
                    6.67,
                    8.59,
                    7.94,
                    9.89,
                    8.64,
                    8.39
                ],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Van Dijk',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [
                    9.2,
                    8.09,
                    7.11,
                    8.55,
                    8.06,
                    8.11,
                    undefined,
                    8.18,
                    6.64,
                    7.44,
                    7.31,
                    8.26,
                    7.41,
                    8.25,
                    5.23,
                    7.79,
                    8.45,
                    5.94,
                    8.30,
                    8.55,
                    8.32,
                    8.59,
                    8.29,
                    9.44,
                    8.77,
                    8.72,
                    7.35,
                    undefined,
                    8.60,
                    6.75,
                    6.23,
                    5.59,
                    7.97,
                    undefined,
                    7.04,
                    9.60,
                    8.38,
                    8.13,
                    9.19,
                    6.38,
                    8.65,
                    7.77,
                    8.04,
                    8.58,
                    8.59,
                    8.28,
                    8.70,
                    5.56,
                    8.01,
                    9.59,
                    8.08,
                    9.13
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Robertson',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [
                    7.40,
                    7.57,
                    7.78,
                    8.25,
                    8.65,
                    7.93,
                    undefined,
                    6.61,
                    5.11,
                    7.37,
                    7.06,
                    8.72,
                    undefined,
                    7.19,
                    5.89,
                    8.81,
                    8.33,
                    6.66,
                    7.69,
                    undefined,
                    8.61,
                    8.68,
                    8.62,
                    7.30,
                    8.36,
                    8.15,
                    7.06,
                    undefined,
                    8.24,
                    7.78,
                    5.42,
                    5.35,
                    8.28,
                    5.91,
                    5.56,
                    8.80,
                    5.76,
                    7.31,
                    6.57,
                    6.91,
                    8.88,
                    7.11,
                    undefined,
                    8.02,
                    7.44,
                    7.20,
                    9.49,
                    6.94,
                    7.83,
                    9.34,
                    7.60,
                    8.57
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Gomez',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [
                    7.89,
                    8.13,
                    9,
                    7.62,
                    7.87,
                    8.21,
                    undefined,
                    7.60,
                    7.51,
                    7.03,
                    7.68,
                    8.34,
                    undefined,
                    7.19,
                    5.96,
                    7.13,
                    undefined,
                    5.76,
                    8.19,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.46,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    8.71,
                    undefined,
                    undefined
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Matip',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    8.05,
                    5.91,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.53,
                    5.56,
                    6.14,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    5.03,
                    7.72,
                    5.91,
                    7.87,
                    8.60,
                    7.29,
                    6.80,
                    7.60,
                    5.60,
                    5.88,
                    6.99,
                    7.40,
                    8.18,
                    undefined,
                    8.35,
                    7.78,
                    8.18,
                    5.72,
                    7.02,
                    undefined,
                    9.83,
                    8.66,
                    9.69
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Lovren',
                backgroundColor: '#ff26ab',
                borderColor: '#ff26ab',
                data: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    5.91,
                    undefined,
                    undefined,
                    8.68,
                    6.67,
                    undefined,
                    6.98,
                    undefined,
                    undefined,
                    undefined,
                    7.78,
                    5.23,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.38,
                    6.57,
                    8.91,
                    8.01,
                    2.96,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.37,
                    undefined,
                    undefined,
                    undefined,
                    7.75,
                    undefined,
                    5.01,
                    undefined,
                    undefined,
                    undefined
                ],
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
        labels: ['Palace', 'Brighton', 'Leicester', 'Tottenham', 'PSG', 'Southampton', 'Chelsea', 'Chelsea', 'Napoli', 'City', 'Huddersfield', 'Red Star',
            'Cardiff', 'Arsenal', 'Red Star', 'Fulham', 'Watford', 'PSG', 'Everton', 'Burnley', 'Bournemouth', 'Napoli', 'United', 'Wolves', 'Newcastle',
            'Arsenal', 'City', 'Wolves', 'Brighton', 'Palace', 'Leicester', 'West Ham', 'Bournemouth', 'Bayern', 'United', 'Watford', 'Everton', 'Burnley',
            'Bayern', 'Fulham', 'Tottenham', 'Southampton', 'Porto', 'Chelsea', 'Porto', 'Cardiff', 'Huddersfield', 'Barcelona', 'Newcastle', 'Barcelona',
            'Wolves', 'Tottenham'
        ],
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [
                7.70, 7.50, 6.72, 7.69, 7.87, 7.78, 6.15, 6.84, 5.21, 6.90, 6.72, 8.18, 7.29,
                6.25, 4.14, 7.27, 7.46, 5.58, 7.30, 7.33, 8.14, 8.07, 7.83, 7.60, 8.24, 8.50,
                5.76, 4.68, 7.43, 6.86, 6.08, 4.98, 8.29, 6.94, 5.46, 8.76, 5.62, 7.48, 7.62,
                6.53, 7.10, 7.17, 7.77, 8.56, 7.65, 7.65, 8.49, 5.80, 6.87, 9.53, 7.91, 8.39
            ],
            fill: false,
            spanGaps: false,
            lineTension: 0
        }, {
            label: 'Henderson',
            fill: false,
            backgroundColor: '#db0404',
            borderColor: '#db0404',
            data: [
                7.01,
                7.01,
                5.63,
                6.64,
                8.40,
                7.57,
                5.84,
                5.77,
                4.68,
                7.19,
                5.95,
                undefined,
                undefined,
                undefined,
                undefined,
                6.52,
                4.99,
                3.83,
                undefined,
                6.44,
                undefined,
                7.80,
                undefined,
                7.66,
                8.11,
                7.99,
                5.22,
                undefined,
                6.89,
                7.89,
                6.23,
                undefined,
                undefined,
                8.58,
                5.89,
                7.43,
                5.29,
                7.18,
                undefined,
                undefined,
                5.87,
                8.97,
                8.84,
                9.18,
                8.79,
                7.42,
                8.33,
                5.74,
                6.75,
                9.63,
                7.50,
                8.40
            ],
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Fabinho',
                fill: false,
                backgroundColor: '#fc7b19',
                borderColor: '#fc7b19',
                data: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    5.92,
                    undefined,
                    5.27,
                    undefined,
                    6.76,
                    8.84,
                    7.89,
                    4.50,
                    undefined,
                    6.94,
                    undefined,
                    undefined,
                    7.66,
                    undefined,
                    7.86,
                    undefined,
                    9.29,
                    7.95,
                    8.50,
                    7.35,
                    6.91,
                    6.16,
                    7.72,
                    7.45,
                    6.97,
                    5.40,
                    8.37,
                    8.02,
                    6.44,
                    9.36,
                    5.68,
                    7.28,
                    7.93,
                    6.57,
                    7.91,
                    6.36,
                    7.51,
                    8.73,
                    7.82,
                    undefined,
                    undefined,
                    6.37,
                    7.21,
                    9.60,
                    7.78,
                    8.27
                ],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Wijnaldum',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [
                    7.42,
                    8.56,
                    5.94,
                    8.42,
                    8.72,
                    7.53,
                    undefined,
                    6.93,
                    4.72,
                    7.15,
                    6.96,
                    8.25,
                    7.87,
                    5.38,
                    3.79,
                    6.39,
                    6.55,
                    4.39,
                    6.66,
                    undefined,
                    7.13,
                    7.91,
                    8.02,
                    6.55,
                    7.75,
                    9.25,
                    5.59,
                    undefined,
                    6.98,
                    undefined,
                    6.68,
                    undefined,
                    9.41,
                    7.41,
                    6.25,
                    8.15,
                    4.67,
                    6.60,
                    7.13,
                    6.50,
                    6.30,
                    5.62,
                    undefined,
                    7.77,
                    6.69,
                    8.36,
                    7.89,
                    4.37,
                    6.22,
                    9.94,
                    7.29,
                    7.39
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Keita',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [
                    8.01,
                    6.66,
                    6.5,
                    7.01,
                    undefined,
                    6.96,
                    6.78,
                    6.74,
                    undefined,
                    5.83,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    5.89,
                    6.48,
                    8.82,
                    7.97,
                    6.90,
                    7.34,
                    6.46,
                    undefined,
                    undefined,
                    undefined,
                    4.15,
                    undefined,
                    5.02,
                    5.64,
                    4.44,
                    8.48,
                    7.64,
                    undefined,
                    undefined,
                    undefined,
                    6.29,
                    undefined,
                    undefined,
                    undefined,
                    7.41,
                    8.60,
                    8.01,
                    undefined,
                    7.46,
                    9.02,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Milner',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [
                    7.37,
                    7.97,
                    6.63,
                    8.65,
                    9.29,
                    7.42,
                    6.41,
                    6.81,
                    4.64,
                    undefined,
                    6.21,
                    undefined,
                    6.78,
                    6.90,
                    4.16,
                    undefined,
                    6.42,
                    5.54,
                    undefined,
                    7.91,
                    7.92,
                    8.02,
                    undefined,
                    7.18,
                    undefined,
                    undefined,
                    4.79,
                    4.33,
                    6.60,
                    5.25,
                    undefined,
                    4.77,
                    7.63,
                    6.47,
                    4.09,
                    7.96,
                    3.23,
                    undefined,
                    7.36,
                    6.52,
                    6.09,
                    7.36,
                    7.13,
                    7.49,
                    6.82,
                    7.89,
                    undefined,
                    5.53,
                    7.13,
                    9.38,
                    7.44,
                    8.34
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Lallana',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    6.05,
                    6.69,
                    5.84,
                    undefined,
                    2.67,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.24,
                    undefined,
                    undefined,
                    6.73,
                    undefined,
                    7.35,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    4.88,
                    5.09,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    3.52,
                    8.74,
                    undefined,
                    6.34,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined
                ],
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
        labels: ['Palace', 'Brighton', 'Leicester', 'Tottenham', 'PSG', 'Southampton', 'Chelsea', 'Chelsea', 'Napoli', 'City', 'Huddersfield', 'Red Star',
            'Cardiff', 'Arsenal', 'Red Star', 'Fulham', 'Watford', 'PSG', 'Everton', 'Burnley', 'Bournemouth', 'Napoli', 'United', 'Wolves', 'Newcastle',
            'Arsenal', 'City', 'Wolves', 'Brighton', 'Palace', 'Leicester', 'West Ham', 'Bournemouth', 'Bayern', 'United', 'Watford', 'Everton', 'Burnley',
            'Bayern', 'Fulham', 'Tottenham', 'Southampton', 'Porto', 'Chelsea', 'Porto', 'Cardiff', 'Huddersfield', 'Barcelona', 'Newcastle', 'Barcelona',
            'Wolves', 'Tottenham'
        ],
        datasets: [{
            label: 'Team Average',
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: [
                7.70, 7.50, 6.72, 7.69, 7.87, 7.78, 6.15, 6.84, 5.21, 6.90, 6.72, 8.18, 7.29,
                6.25, 4.14, 7.27, 7.46, 5.58, 7.30, 7.33, 8.14, 8.07, 7.83, 7.60, 8.24, 8.50,
                5.76, 4.68, 7.43, 6.86, 6.08, 4.98, 8.29, 6.94, 5.46, 8.76, 5.62, 7.48, 7.62,
                6.53, 7.10, 7.17, 7.77, 8.56, 7.65, 7.65, 8.49, 5.80, 6.87, 9.53, 7.91, 8.39
            ],
            fill: false,
            spanGaps: false,
            lineTension: 0
        },
            {
                label: 'Man\xE9',
                fill: false,
                backgroundColor: '#db0404',
                borderColor: '#db0404',
                data: [
                    8.14,
                    5.73,
                    7.45,
                    6.70,
                    7.57,
                    7.19,
                    6.66,
                    6.02,
                    4.36,
                    5.59,
                    undefined,
                    7.54,
                    8.49,
                    6.73,
                    4.23,
                    6.18,
                    7.52,
                    6.24,
                    6.61,
                    undefined,
                    6.91,
                    5.96,
                    8.48,
                    7.29,
                    7.67,
                    8.67,
                    5.51,
                    undefined,
                    6.69,
                    7.22,
                    8.04,
                    6.75,
                    8.70,
                    6.63,
                    3.97,
                    9.48,
                    4.49,
                    8.83,
                    7.93,
                    8.58,
                    7.30,
                    7.58,
                    7.26,
                    9.00,
                    8.46,
                    7.51,
                    9.46,
                    6.10,
                    6.78,
                    9.49,
                    9.05,
                    8.52
                ],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Salah',
                fill: false,
                backgroundColor: '#fc7b19',
                borderColor: '#fc7b19',
                data: [
                    7.27,
                    7.57,
                    6.05,
                    6.33,
                    5.40,
                    7.90,
                    undefined,
                    5.98,
                    3.72,
                    5.98,
                    6.63,
                    8.35,
                    9,
                    6.71,
                    4.52,
                    8.15,
                    8.01,
                    4.93,
                    6.19,
                    7.58,
                    9.80,
                    8.83,
                    7.11,
                    8.96,
                    8.56,
                    8.99,
                    5.77,
                    5.90,
                    8.41,
                    8.41,
                    5.37,
                    4.48,
                    8.72,
                    6.04,
                    3.30,
                    8.03,
                    3.41,
                    7.27,
                    7.75,
                    5.77,
                    6.61,
                    8.23,
                    7.19,
                    9.40,
                    8.57,
                    7.43,
                    9.42,
                    6.10,
                    7.92,
                    undefined,
                    7.25,
                    8.14
                ],
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Firmino',
                backgroundColor: '#fccf19',
                borderColor: '#fccf19',
                data: [
                    6.58,
                    7.01,
                    6.73,
                    8.34,
                    9.12,
                    7.66,
                    5.86,
                    6.42,
                    4.46,
                    5.75,
                    5.39,
                    8.13,
                    7.04,
                    5.54,
                    5.12,
                    6.54,
                    7.94,
                    4.50,
                    5.64,
                    7.82,
                    7.99,
                    7.33,
                    7.96,
                    7.19,
                    7.54,
                    9.88,
                    6.81,
                    6.03,
                    7.17,
                    7.71,
                    6.15,
                    3.04,
                    8.32,
                    6.81,
                    undefined,
                    undefined,
                    4.75,
                    8.43,
                    7.34,
                    6.55,
                    8.05,
                    8.26,
                    8.36,
                    8.74,
                    8.67,
                    7.44,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    7.01
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Shaqiri',
                backgroundColor: '#710aad',
                borderColor: '#710aad',
                data: [
                    undefined,
                    undefined,
                    6.90,
                    undefined,
                    7.25,
                    8.76,
                    7.77,
                    6.25,
                    undefined,
                    undefined,
                    7.50,
                    9.06,
                    8.63,
                    5.77,
                    undefined,
                    8.66,
                    7.19,
                    5.28,
                    6.78,
                    7.62,
                    7.40,
                    undefined,
                    9.68,
                    undefined,
                    8.55,
                    8.15,
                    5.40,
                    5.27,
                    6.10,
                    6.28,
                    4.76,
                    4.51,
                    undefined,
                    undefined,
                    4.37,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    8.16,
                    undefined,
                    7.71,
                    8.65,
                    undefined,
                    undefined
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Origi',
                backgroundColor: '#2a891f',
                borderColor: '#2a891f',
                data: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    9.66,
                    6.27,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    5.54,
                    undefined,
                    undefined,
                    undefined,
                    4.59,
                    undefined,
                    5.28,
                    4.53,
                    8.22,
                    4.45,
                    undefined,
                    undefined,
                    6.84,
                    6.96,
                    undefined,
                    6.92,
                    undefined,
                    5.98,
                    undefined,
                    undefined,
                    undefined,
                    9.05,
                    9.86,
                    7.23,
                    9.08
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            },
            {
                label: 'Sturridge',
                backgroundColor: '#1999fc',
                borderColor: '#1999fc',
                data: [
                    undefined,
                    6.61,
                    undefined,
                    6.19,
                    7.66,
                    undefined,
                    6.81,
                    9.52,
                    undefined,
                    5.93,
                    5.81,
                    7.74,
                    undefined,
                    undefined,
                    3.19,
                    undefined,
                    undefined,
                    4.52,
                    6.30,
                    6.93,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    6.98,
                    undefined,
                    undefined,
                    2.99,
                    undefined,
                    undefined,
                    4.17,
                    undefined,
                    undefined,
                    undefined,
                    3.40,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    6.59,
                    undefined,
                    4.86,
                    undefined,
                    undefined,
                    undefined
                ],
                fill: false,
                spanGaps: false,
                lineTension: 0
            }
        ]
    },
    options: defaultOptions
});
