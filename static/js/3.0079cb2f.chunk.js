(this["webpackJsonpmemory-game-master"]=this["webpackJsonpmemory-game-master"]||[]).push([[3],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){e.exports=n.p+"static/media/17a78142bear.b6dcde8c.gif"},59:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)})(e)}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var u=n(0),s=n.n(u),m=(n(56),n(13)),f=n(4);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?e.replace("first","").replace("second",""):e}n(57);var p=function(e){var t=e.item,n=e.firstSelectedItem,r=e.secondSelectedItem,c=e.handleClick,o=e.correctMatches,a=t.get("id"),l=t.get("img"),i="",u=function(){c(a)};return(a===n||a===r||o.has(d(a)))&&(i="is-flipped"),s.a.createElement("div",{className:"cube"},s.a.createElement("div",{className:"card ".concat(i)},s.a.createElement("div",{role:"button",tabIndex:0,className:"card-face card-face-front",onClick:u}),s.a.createElement("div",{role:"button",tabIndex:0,className:"card-face card-face-back",onClick:u,style:{backgroundImage:l}})))};p.defaultProps={firstSelectedItem:null,secondSelectedItem:null};var b=p,y=function(e){return function(e){return e.get("gameReducer")}(e).get("layout")},S=n(12);function h(e){return{type:S.a.SET_EMOJI_LAYOUT,payload:{data:e}}}var I=n(7),g=n(58),v=n.n(g),O=function(){return s.a.createElement("div",{className:"win-field"},s.a.createElement("p",null,"Hooray!!!, you won!!!"),s.a.createElement("img",{src:v.a,alt:"bear"}))},E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,l(t).call(this,e))).compareImages=function(){var e=n.state.correctMatches,t=n.state,r=t.firstSelectedItem,c=t.secondSelectedItem;r=d(r),c=d(c),r&&c&&r===c&&e.add(r),n.setState({correctMatches:new Set(e),timeOutId:null,firstSelectedItem:null,secondSelectedItem:null})},n.setDelayTime=function(e){n.state.timeOutId||n.setState({secondSelectedItem:e,timeOutId:setTimeout((function(){n.compareImages()}),1e3)})},n.handleClick=function(e){var t=n.state,r=t.firstSelectedItem,c=t.correctMatches;r&&e!==r&&!c.has(d(e))?n.setDelayTime(e):c.has(d(e))||n.setState({firstSelectedItem:e})},n.startNewGame=function(){(0,n.props.setEmojiLayoutActionCreator)(Object(I.b)(Object(I.a)())),n.setState({correctMatches:new Set([]),timeOutId:null,firstSelectedItem:null,secondSelectedItem:null})},n.state={timeOutId:null,firstSelectedItem:null,secondSelectedItem:null,correctMatches:new Set([])},n}var n,c,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){var e=this,t=this.props.layout,n=this.state,r=n.firstSelectedItem,c=n.secondSelectedItem,o=n.correctMatches;return s.a.createElement(u.Fragment,null,s.a.createElement("div",{className:"game-board"},t.size!==2*o.size?t.map((function(t){return s.a.createElement(b,{correctMatches:o,item:t,key:t.get("id"),firstSelectedItem:r,secondSelectedItem:c,handleClick:e.handleClick})})):s.a.createElement(O,null)),s.a.createElement("button",{type:"button",className:"game-button",onClick:this.startNewGame},"New Game"))}}])&&r(n.prototype,c),o&&r(n,o),t}(u.Component),w=Object(m.b)((function(e){return{layout:y(e)}}),(function(e){return Object(f.bindActionCreators)({setEmojiLayoutActionCreator:h},e)}))(E);t.default=w}}]);
//# sourceMappingURL=3.0079cb2f.chunk.js.map