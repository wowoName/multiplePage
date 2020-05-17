<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "pieCharts",
    props: {
        title: {
            type: String,
            default: ""
        },
        data: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            chart: null,
            scale: 1
        };
    },
    mixins: [],
    mounted() {
        this.scale = document.documentElement.clientWidth / 1920;
        this.myChart = this.chart = echarts.init(this.$refs.myEchart);
        this.initChart();
    },
    watch: {
        data: {
            handler() {
                this.initChart();
            },
            deep: true
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        resetPeiResize() {
            this.scale = document.documentElement.clientWidth / 1920;
            this.chart.resize();
        },
        initChart() {
            // 把配置和数据放这里
            this.myChart.setOption({
                title: [
                    {
                        left: "center",
                        text: this.title,
                        top: "top",
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 500
                        }
                    }
                ],
                grid: {
                    top: "30%",
                    bottom: "20%",
                    left: "9.5%",
                    right: "9.5%"
                },

                xAxis: {
                    type: "category",
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 2,
                            color: "#535a68" //X轴样式
                        }
                    },
                    data: []
                },
                yAxis: {
                    type: "value",
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 2,
                            color: "#535a68" //X轴样式
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                tooltip: {
                    show: false,
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    show: false
                },
                graphic: {
                    type: "text",
                    left: "center",
                    top: "center",
                    zlevel: 11,
                    style: {
                        text: ((56 / 68) * 100).toFixed(1) + "%", //这是百分比
                        textAlign: "center",
                        fill: "#7e8fbe",
                        color: "#ffb500",
                        fontSize: 18 * this.scale,
                        fontWeight: 600
                    }
                },
                series: [
                    {
                        type: "pie",
                        silent: true,
                        radius: ["65%", "90%"],
                        center: ["center", "center"],
                        hoverAnimation: false,
                        color: ["#ffb500", "#57808d"],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [56, 12]
                    }
                ]
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>