import React, { Component } from 'react'
import { Chart } from 'chart.js'
import moment from 'moment'
import { observer } from 'mobx-react';


@observer(['analytics'])
class AnalyticsChart extends Component {

  componentDidMount() {
    var ctx = this.canvas.getContext("2d");
    var scatterChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                lineTension: 0,
                backgroundColor: "rgba(1,1,1,0)",
                borderColor: "#A2F4FF",
                borderWidth: 5,
                pointBackgroundColor: '#4E8CFF',
                pointBorderWidth: 2,
                pointBorderColor: "white",
                pointRadius: 5,
                data: [{
                    x: moment().add(4, 'd').format(),
                    y: 5
                }, {
                    x: moment().add(5, 'd').format(),
                    y: 10
                }, {
                    x: moment().add(6, 'd').format(),
                    y: 30
                }, {
                    x: moment().add(7, 'd').format(),
                    y: 10
                }, {
                    x: moment().add(8, 'd').format(),
                    y: 20
                }, {
                    x: moment().add(9, 'd').format(),
                    y: 20
                }]
            }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
                color: '#F0F4FA',
                zeroLineColor: '#F0F4FA',
                lineWidth: 2,
                zeroLineWidth: 2
              },
              ticks: {
                beginAtZero: true,
                fixedStepSize: 10
              }
            }],
            xAxes: [{
              type: 'time',
              time: {
                tooltipFormat: "MMM DD",
                displayFormats: {
                    day: "MMM DD"
                },
                unit: 'day'
              },
              position: 'bottom',
              gridLines: {
                display: false
              },
              ticks: {
                fixedStepSize: 10,
                autoSkip: true,
                maxTicksLimit: 3
              }
            }]
          }
        }
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.analytics.allChats)
  }

  render () {
    return (
      <div className='sc-analytics'>
        <div className='sc-analytics--chart-header'>
          <a className='sc-analytics--chart-section active' data-name='allChats'>
            <div className='sc-analytics--chart-section-numbers'> <span id='sc-all-chats-counter'>​</span> <span>/25</span> </div>
            <div className='sc-analytics--chart-section-title'> ALL CHATS </div>
          </a>
          <a className='sc-analytics--chart-section' data-name='missedChats'>
            <div className='sc-analytics--chart-section-numbers' id='sc-missed-chats-counter'> ​ </div>
            <div className='sc-analytics--chart-section-title'> MISSED CHATS </div>
          </a>
          <a className='sc-analytics--chart-section' data-name='allVisitors'>
            <div className='sc-analytics--chart-section-numbers' id='sc-all-visitors-counter'> ​ </div>
            <div className='sc-analytics--chart-section-title'> TOTAL VISITORS </div>
          </a>
          <div className='sc-analytics--chart-etc'>
            <div className='sc-analytics--chart-date'>
              March 2017
            </div>
            <div className='sc-analytics--chart-switcher'>
              <div className='sc-analytics--chart-switcher-arrow'></div>
              <div className='sc-analytics--chart-switcher-arrow'></div>
            </div>
          </div>
        </div>
        <div className='sc-analytics--canvas-wrapper'>
          <canvas
            ref={(e) => this.canvas = e}
            className='sc-analytics--canvas'
            width='500'
            height='200'/>
        </div>
        <script>
        </script>
      </div>
    )
  }
}

export default AnalyticsChart
