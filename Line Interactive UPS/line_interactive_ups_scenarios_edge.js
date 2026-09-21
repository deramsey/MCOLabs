/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Line_Interactive_UPS_Normal',
                display: 'block',
                type: 'image',
                rect: ['6px', '16px','1306px','504px','auto', 'auto'],
                title: 'normal ac power schematic',
                fill: ["rgba(0,0,0,0)",im+"Line%20Interactive%20UPS%20Normal.svg",'0px','0px']
            },
            {
                id: 'Line_Interactive_UPS_small_overvoltage',
                display: 'none',
                type: 'image',
                rect: ['6px', '16px','1306px','504px','auto', 'auto'],
                title: 'small overvoltage schematic',
                fill: ["rgba(0,0,0,0)",im+"Line%20Interactive%20UPS%20small%20overvoltage.svg",'0px','0px']
            },
            {
                id: 'Line_Interactive_UPS_small_undervoltage',
                display: 'none',
                type: 'image',
                rect: ['5px', '16px','1306px','504px','auto', 'auto'],
                title: 'small undervoltage schematic',
                fill: ["rgba(0,0,0,0)",im+"Line%20Interactive%20UPS%20small%20undervoltage.svg",'0px','0px']
            },
            {
                id: 'Line_Interactive_UPS_over-under_or_loss',
                display: 'none',
                type: 'image',
                rect: ['5px', '17px','1306px','504px','auto', 'auto'],
                title: 'loss of power schematic',
                fill: ["rgba(0,0,0,0)",im+"Line%20Interactive%20UPS%20over-under%20or%20loss.svg",'0px','0px']
            },
            {
                id: 'charger',
                type: 'text',
                rect: ['530px', '232px','118px','36px','auto', 'auto'],
                text: "CHARGER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'battery',
                type: 'text',
                rect: ['589px', '407px','143px','46px','auto', 'auto'],
                text: "BATTERY",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'inverter',
                type: 'text',
                rect: ['875px', '341px','136px','27px','auto', 'auto'],
                text: "INVERTER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'autotransformer',
                type: 'text',
                rect: ['279px', '235px','211px','27px','auto', 'auto'],
                text: "AUTOTRANSFORMER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'normal_ac_power',
                display: 'block',
                type: 'text',
                rect: ['0px', '529px','1280px','81px','auto', 'auto'],
                text: "NORMAL AC POWER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'small_overvoltage',
                display: 'none',
                type: 'text',
                rect: ['0px', '529px','1280px','81px','auto', 'auto'],
                text: "SMALL OVERVOLTAGE",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'small_undervoltage',
                display: 'none',
                type: 'text',
                rect: ['0px', '529px','1280px','81px','auto', 'auto'],
                text: "LARGE OVER/UNDER-VOLTAGE OR LOSS OF POWER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'small_undervoltageCopy',
                display: 'none',
                type: 'text',
                rect: ['0px', '529px','1280px','81px','auto', 'auto'],
                text: "SMALL UNDERVOLTAGE",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_140V',
                type: 'text',
                rect: ['247px', '134px','87px','27px','auto', 'auto'],
                text: "140V",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"],
                transform: [[],['90']]
            },
            {
                id: '_130V',
                type: 'text',
                rect: ['294px', '137px','87px','27px','auto', 'auto'],
                text: "130V",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"],
                transform: [[],['90']]
            },
            {
                id: '_120V',
                type: 'text',
                rect: ['344px', '142px','73px','17px','auto', 'auto'],
                text: "120V",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"],
                transform: [[],['90']]
            },
            {
                id: '_110V',
                type: 'text',
                rect: ['386px', '137px','57px','27px','auto', 'auto'],
                text: "110V",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"],
                transform: [[],['90']]
            },
            {
                id: '_100V',
                type: 'text',
                rect: ['421px', '132px','57px','36px','auto', 'auto'],
                text: "100V",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"],
                transform: [[],['90']]
            },
            {
                id: 'Ellipse',
                display: 'block',
                type: 'ellipse',
                rect: ['95px', '255px','25px','25px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,28,36,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'EllipseCopy',
                display: 'none',
                type: 'ellipse',
                rect: ['95px', '255px','25px','25px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,28,36,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'EllipseCopy2',
                display: 'none',
                type: 'ellipse',
                rect: ['107px', '268px','25px','25px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,28,36,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'EllipseCopy3',
                display: 'none',
                type: 'ellipse',
                rect: ['659px', '373px','25px','25px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,28,36,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'next',
                display: 'block',
                type: 'image',
                rect: ['1175px', '615px','75px','75px','auto', 'auto'],
                title: 'next',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"next.svg",'0px','0px']
            },
            {
                id: 'nextCopy',
                display: 'none',
                type: 'image',
                rect: ['1175px', '615px','75px','75px','auto', 'auto'],
                title: 'next',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"next.svg",'0px','0px']
            },
            {
                id: 'nextCopy2',
                display: 'none',
                type: 'image',
                rect: ['1175px', '615px','75px','75px','auto', 'auto'],
                title: 'next',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"next.svg",'0px','0px']
            },
            {
                id: 'prev',
                display: 'none',
                type: 'image',
                rect: ['39px', '614px','75px','75px','auto', 'auto'],
                title: 'previous',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"prev.svg",'0px','0px']
            },
            {
                id: 'prevCopy',
                display: 'none',
                type: 'image',
                rect: ['39px', '614px','75px','75px','auto', 'auto'],
                title: 'previous',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"prev.svg",'0px','0px']
            },
            {
                id: 'prevCopy2',
                display: 'none',
                type: 'image',
                rect: ['39px', '614px','75px','75px','auto', 'auto'],
                title: 'previous',
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"prev.svg",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['1097px', '625px','143px','75px','auto', 'auto'],
                title: 'start over',
                cursor: ['pointer'],
                text: "START<br>OVER",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(156,28,36,1)", "900", "none", "italic"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['232px', '615px','867px','75px','auto', 'auto'],
                text: "Power travels on a normal path.<br>Power is also routed to charge the auxillary battery.",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                display: 'none',
                type: 'text',
                rect: ['232px', '615px','867px','75px','auto', 'auto'],
                text: "Power is routed through the autotransformer to regulate the load. <br>Power is also routed to charge the auxillary battery.",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                display: 'none',
                type: 'text',
                rect: ['232px', '615px','867px','75px','auto', 'auto'],
                text: "Sensing power loss, the auxillary battery takes over to supply power.",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_inverter}": [
                ["style", "height", '27px'],
                ["style", "top", '341px'],
                ["style", "left", '875px'],
                ["style", "width", '136px']
            ],
            "${_prevCopy2}": [
                ["style", "top", '614px'],
                ["style", "display", 'none'],
                ["style", "height", '75px'],
                ["style", "left", '39px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '75px']
            ],
            "${_normal_ac_power}": [
                ["style", "top", '529px'],
                ["style", "font-size", '45px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(156,28,36,1)'],
                ["style", "left", '0px'],
                ["style", "width", '1280px']
            ],
            "${__100V}": [
                ["style", "top", '132px'],
                ["style", "left", '421px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_TextCopy2}": [
                ["style", "text-align", 'center'],
                ["style", "display", 'none']
            ],
            "${_TextCopy}": [
                ["style", "text-align", 'center'],
                ["style", "display", 'none']
            ],
            "${_nextCopy2}": [
                ["style", "top", '615px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1175px'],
                ["style", "width", '75px']
            ],
            "${_Text}": [
                ["style", "text-align", 'center'],
                ["style", "display", 'block']
            ],
            "${__110V}": [
                ["style", "top", '137px'],
                ["style", "left", '386px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_small_undervoltageCopy}": [
                ["style", "top", '529px'],
                ["style", "width", '1280px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(156,28,36,1.00)'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_Text11}": [
                ["style", "top", '625px'],
                ["style", "display", 'none'],
                ["style", "font-style", 'italic'],
                ["style", "font-weight", '900'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '24px']
            ],
            "${_Line_Interactive_UPS_small_overvoltage}": [
                ["style", "top", '16px'],
                ["style", "display", 'none'],
                ["style", "height", '504px'],
                ["style", "left", '6px'],
                ["style", "width", '1306px']
            ],
            "${_small_undervoltage}": [
                ["style", "top", '529px'],
                ["style", "font-size", '45px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(156,28,36,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1280px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(156,28,36,1.00)'],
                ["motion", "location", '107.33px 267.5px'],
                ["style", "display", 'none'],
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ],
            "${_Line_Interactive_UPS_Normal}": [
                ["style", "top", '16px'],
                ["style", "display", 'block'],
                ["style", "height", '504px'],
                ["style", "left", '6px'],
                ["style", "width", '1306px']
            ],
            "${_autotransformer}": [
                ["style", "height", '27px'],
                ["style", "top", '235px'],
                ["style", "left", '279px'],
                ["style", "width", '211px']
            ],
            "${__120V}": [
                ["style", "top", '142px'],
                ["style", "height", '17px'],
                ["style", "left", '344px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(156,28,36,1.00)'],
                ["motion", "location", '107.3335px 267.5003px'],
                ["style", "height", '25px'],
                ["style", "display", 'block'],
                ["style", "width", '25px']
            ],
            "${__140V}": [
                ["style", "top", '134px'],
                ["style", "height", '27px'],
                ["style", "left", '247px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_next}": [
                ["style", "top", '615px'],
                ["style", "display", 'block'],
                ["style", "height", '75px'],
                ["style", "left", '1175px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '75px']
            ],
            "${_charger}": [
                ["style", "top", '232px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-size", '18px'],
                ["style", "left", '530px'],
                ["style", "width", '118px']
            ],
            "${_prev}": [
                ["style", "top", '614px'],
                ["style", "display", 'none'],
                ["style", "height", '75px'],
                ["style", "left", '39px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '75px']
            ],
            "${_Line_Interactive_UPS_small_undervoltage}": [
                ["style", "top", '16px'],
                ["style", "display", 'none'],
                ["style", "height", '504px'],
                ["style", "left", '5px'],
                ["style", "width", '1306px']
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(156,28,36,1.00)'],
                ["motion", "location", '671.218671875px 385.5556640625px'],
                ["style", "display", 'none'],
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ],
            "${__130V}": [
                ["style", "height", '27px'],
                ["style", "top", '137px'],
                ["style", "left", '294px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_nextCopy}": [
                ["style", "top", '615px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "left", '1175px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '75px']
            ],
            "${_prevCopy}": [
                ["style", "top", '614px'],
                ["style", "display", 'none'],
                ["style", "height", '75px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '39px'],
                ["style", "width", '75px']
            ],
            "${_Line_Interactive_UPS_over-under_or_loss}": [
                ["style", "top", '17px'],
                ["style", "display", 'none'],
                ["style", "height", '504px'],
                ["style", "left", '5px'],
                ["style", "width", '1306px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '720px'],
                ["style", "width", '1280px']
            ],
            "${_small_overvoltage}": [
                ["style", "top", '529px'],
                ["style", "width", '1280px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(156,28,36,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(156,28,36,1.00)'],
                ["motion", "location", '107.33px 267.5px'],
                ["style", "height", '25px'],
                ["style", "display", 'none'],
                ["style", "width", '25px']
            ],
            "${_battery}": [
                ["style", "height", '46px'],
                ["style", "top", '407px'],
                ["style", "left", '589px'],
                ["style", "width", '143px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8160,
            autoPlay: true,
            labels: {
                "POS1": 0,
                "POS2": 2040,
                "POS3": 4090,
                "POS4": 6120
            },
            timeline: [
                { id: "eid65", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Line_Interactive_UPS_Normal}", "display", 'none', { fromValue: 'block'}], position: 2040, duration: 0 },
                { id: "eid10", tween: [ "motion", "${_EllipseCopy}", [[107.33, 267.5, 0, 0],[146.91, 267.77, 122.94, -361.45, 75.75, 0.52],[223.12, 37.59, 0, 0, 0, 0],[361.1, 39.2, 0, 0, 0, 0],[323.38, 103.33, 0, 0, 0, 0],[320.03, 209.4, 0, 0, 0, 0],[359.43, 211.43, 73.75, -12.7, 68.77, -11.84],[363.82, 118.1, 0, 0, 0, 0],[846.02, 119.36, 0, 0, 0, 0],[1080.7, 273.1, 0, 0, 0, 0],[1125.56, 274.5, 0, 0]]], position: 2040, duration: 2000 },
                { id: "eid19", tween: [ "style", "${_prev}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid33", tween: [ "style", "${_prev}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid21", tween: [ "style", "${_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid34", tween: [ "style", "${_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid12", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid11", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'block'}], position: 4080, duration: 0 },
                { id: "eid15", tween: [ "style", "${_small_overvoltage}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid40", tween: [ "style", "${_small_overvoltage}", "display", 'none', { fromValue: 'block'}], position: 4090, duration: 0 },
                { id: "eid46", tween: [ "style", "${_small_undervoltageCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_small_undervoltageCopy}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid44", tween: [ "style", "${_small_undervoltageCopy}", "display", 'block', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid45", tween: [ "style", "${_small_undervoltageCopy}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid6", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid17", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 },
                { id: "eid3", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid4", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Line_Interactive_UPS_small_overvoltage}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Line_Interactive_UPS_small_overvoltage}", "display", 'none', { fromValue: 'block'}], position: 4080, duration: 0 },
                { id: "eid25", tween: [ "style", "${_EllipseCopy2}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid26", tween: [ "style", "${_EllipseCopy2}", "display", 'block', { fromValue: 'none'}], position: 4080, duration: 0 },
                { id: "eid27", tween: [ "style", "${_EllipseCopy2}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid37", tween: [ "style", "${_prevCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_prevCopy}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid31", tween: [ "style", "${_prevCopy}", "display", 'block', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid32", tween: [ "style", "${_prevCopy}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid5", tween: [ "motion", "${_Ellipse}", [[107.33, 267.5, 0, 0],[146.91, 267.77, 122.94, -361.45, 75.75, 0.52],[223.12, 37.59, 0, 0, 0, 0],[361.1, 39.2, 0, 0, 0, 0],[362.27, 118.61, 0, 0, 0, 0],[846.02, 119.36, 0, 0, 0, 0],[1080.7, 273.1, 0, 0, 0, 0],[1125.56, 274.5, 0, 0]]], position: 0, duration: 2000 },
                { id: "eid23", tween: [ "style", "${_Line_Interactive_UPS_small_undervoltage}", "display", 'block', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Line_Interactive_UPS_small_undervoltage}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid20", tween: [ "style", "${_next}", "display", 'none', { fromValue: 'block'}], position: 2040, duration: 0 },
                { id: "eid38", tween: [ "style", "${_nextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_nextCopy2}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid30", tween: [ "style", "${_nextCopy2}", "display", 'block', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid36", tween: [ "style", "${_nextCopy2}", "display", 'none', { fromValue: 'block'}], position: 6120, duration: 0 },
                { id: "eid55", tween: [ "color", "${_small_overvoltage}", "color", 'rgba(156,28,36,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(156,28,36,1)'}], position: 4500, duration: 0 },
                { id: "eid24", tween: [ "motion", "${_EllipseCopy2}", [[107.33, 267.5, 0, 0],[146.91, 267.77, 122.94, -361.45, 75.75, 0.52],[223.12, 37.59, 0, 0, 0, 0],[361.1, 39.2, 0, 0, 0, 0],[403.94, 104.72, 0, 0, 0, 0],[403.36, 208.01, 0, 0, 0, 0],[362.21, 205.87, -22.08, -37.7, -35.27, -60.21],[362.43, 119.49, 0, 0, 0, 0],[846.02, 119.36, 0, 0, 0, 0],[1080.7, 273.1, 0, 0, 0, 0],[1125.56, 274.5, 0, 0]]], position: 4080, duration: 2000 },
                { id: "eid48", tween: [ "style", "${_Line_Interactive_UPS_over-under_or_loss}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 },
                { id: "eid14", tween: [ "style", "${_normal_ac_power}", "display", 'none', { fromValue: 'block'}], position: 2040, duration: 0 },
                { id: "eid49", tween: [ "motion", "${_EllipseCopy3}", [[671.22, 385.56, 0, 0],[671.91, 352.49, 0, 0, 0, 0],[771.73, 351.48, 0, 0, 0, 0],[911.1, 350.31, 0, 0, 0, 0],[1058.11, 353.33, 0, 0, 0, 0],[1055.74, 291.58, 0, 0, 0, 0],[1080.7, 273.1, 0, 0, 0, 0],[1125.56, 274.5, 0, 0]]], position: 6120, duration: 2000 },
                { id: "eid50", tween: [ "style", "${_EllipseCopy3}", "display", 'none', { fromValue: 'none'}], position: 4080, duration: 0 },
                { id: "eid51", tween: [ "style", "${_EllipseCopy3}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 },
                { id: "eid52", tween: [ "style", "${_EllipseCopy3}", "display", 'none', { fromValue: 'block'}], position: 8160, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 2040, duration: 0 },
                { id: "eid61", tween: [ "style", "${_prevCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_prevCopy2}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid63", tween: [ "style", "${_prevCopy2}", "display", 'none', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid64", tween: [ "style", "${_prevCopy2}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 },
                { id: "eid53", tween: [ "color", "${_small_undervoltage}", "color", 'rgba(156,28,36,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(156,28,36,1.00)'}], position: 6190, duration: 0 },
                { id: "eid56", tween: [ "color", "${_normal_ac_power}", "color", 'rgba(156,28,36,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(156,28,36,1)'}], position: 4500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2040, duration: 0 },
                { id: "eid54", tween: [ "color", "${_small_undervoltageCopy}", "color", 'rgba(156,28,36,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(156,28,36,1.00)'}], position: 4500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_small_undervoltage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_small_undervoltage}", "display", 'none', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid41", tween: [ "style", "${_small_undervoltage}", "display", 'none', { fromValue: 'none'}], position: 4090, duration: 0 },
                { id: "eid42", tween: [ "style", "${_small_undervoltage}", "display", 'block', { fromValue: 'none'}], position: 6120, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '65px', '65px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(156,28,36,1)']
                },
                {
                    transform: [[0, 0], ['45']],
                    rect: ['20px', '22px', '20px', '20px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['16px', '18px', '12px', '36px', 'auto', 'auto'],
                    fill: ['rgba(156,28,36,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2}": [
                ["style", "top", '0px'],
                ["style", "height", '65px'],
                ["style", "left", '0px'],
                ["style", "width", '65px']
            ],
            "${_Rectangle}": [
                ["style", "top", '22px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '20px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '20px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(156,28,36,1.00)'],
                ["style", "left", '16px'],
                ["style", "top", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12873329");
