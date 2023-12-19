const data = [
    {
        "dia": "seg",
        "gastos": 50.00
      },
      {
        "dia": "ter",
        "gastos": 34.90
      },
      {
        "dia": "qua",
        "gastos": 60.89
      },
      {
        "dia": "qui",
        "gastos": 200.00
      },
      {
        "dia": "sex",
        "gastos": 89.90
      },
      {
        "dia": "sab",
        "gastos": 70.00
      },
      {
        "dia": "dom",
        "gastos": 150.00
      },
];

function generateChart() {
    const info = {
        labels: data.map((chart) => chart.dia),
        datasets: [
            {
                data: data.map((chart) => chart.gastos),
                backgroundColor: ["hsl(283, 43%, 38%)"],
                borderRadius: 5,
                hoverBackgroundColor: "hsl(283, 43%, 48%)",
            },
        ],
    };
    const titleTooltip = (e) => `R$${e[0].formattedValue}`;
    const labelTooltip = (e) => "";
    const options = {
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false,
                },
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },

        plugins: {
            legend: {display: false},
            tooltip: {
                yAlign: "bottom",
                displayColors: false,
                callbacks: {
                    title: titleTooltip,
                    label: labelTooltip,
                },
            },
        },
    };
    const config = {
        type: "bar",
        data:info,
        options,
    };
    const meuGrafico = new Chart(document.getElementById("meuGrafico"), config);
}
 generateChart();