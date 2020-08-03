!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=function t(e,i,n,o,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.val=e,this.row=i,this.col=n,this.tileSize=o,this.color=r,this.font=a};function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.grid=n,this.view=e,this.size=i}var e,i,r;return e=t,(i=[{key:"isValidPuzzle",value:function(){for(var t=0;t<9;t++)for(var e=new Set,i=new Set,n=new Set,o=0;o<9;o++){if(this.grid[t][o],e.has(this.grid[t][o]))return!1;if("."!==this.grid[t][o]&&e.add(this.grid[t][o]),i.has(this.grid[o][t]))return!1;"."!==this.grid[o][t]&&i.add(this.grid[o][t]);var r=3*Math.floor(t/3)+Math.floor(o/3),a=t%3*3+o%3;if(n.has(this.grid[r][a]))return!1;"."!==this.grid[r][a]&&n.add(this.grid[r][a])}return!0}},{key:"solve",value:function(){for(var t=0;t<9;t++)for(var e=0;e<9;e++)if("."===this.grid[t][e]){for(var i=["1","2","3","4","5","6","7","8","9"],o=0;o<i.length;o++){this.grid[t][e]=i[o];var r=new n(i[o],t,e,this.size/9,"#FF5964","28px Patrick Hand");if(this.view.addToAnimationQueue(r),this.isValidPuzzle()&&this.solve())return!0;this.grid[t][e]="."}var a=new n("",t,e,this.size/9);return this.view.addToAnimationQueue(a),!1}return!0}},{key:"assignVal",value:function(t,e,i){this.grid[t][e]=i}},{key:"removePuzzle",value:function(){this.iterationCount=0,this.grid=[".........".split(""),".........".split(""),".........".split(""),".........".split(""),".........".split(""),".........".split(""),".........".split(""),".........".split(""),".........".split("")]}}])&&o(e.prototype,i),r&&o(e,r),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.row=0,this.col=0,this.context=e,this.tileSize=i}var e,i,n;return e=t,(i=[{key:"drawCursorLine",value:function(){var t=this.tileSize,e=this.row,i=this.col;this.context.beginPath(),this.context.moveTo(i*t+.2*t,e*t+.2*t),this.context.lineTo(i*t+.2*t,e*t+.8*t),this.context.lineWidth=2,this.context.stroke()}},{key:"removeCursorLine",value:function(){var t=this.tileSize;this.context.beginPath(),this.context.rect(this.col*t+.1*t,this.row*t+.1*t,1*t/5,4*t/5),this.context.fillStyle="white",this.context.fill()}},{key:"drawBlinkingCursor",value:function(){this.drawCursorLine();var t=this;this.interval=setInterval((function(){t.drawCursorLine(),setTimeout((function(){t.removeCursorLine()}),400)}),800)}},{key:"clearExistingCursor",value:function(){clearInterval(this.interval),this.removeCursorLine()}},{key:"updatePosition",value:function(t,e){this.row=t,this.col=e}}])&&a(e.prototype,i),n&&a(e,n),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.board=new r(this,i,n),this.animationQueue=[],this.paused=!0,this.animationCount=0}var e,i,o;return e=t,(i=[{key:"renderTile",value:function(t){this.clearTile(t);var e=t.tileSize;this.context.font=t.font,this.context.fillStyle=t.color,this.context.fillText(t.val,t.col*e+25,t.row*e+45)}},{key:"clearTile",value:function(t){this.context.beginPath(),this.context.rect(t.col*t.tileSize+.1*t.tileSize,t.row*t.tileSize+.1*t.tileSize,4*t.tileSize/5,4*t.tileSize/5),this.context.fillStyle="white",this.context.fill()}},{key:"addToAnimationQueue",value:function(t){this.animationQueue.push(t)}},{key:"animate",value:function(){if(0!==this.animationQueue.length&&!this.paused){this.updateIterationCount();var t=this.animationQueue.shift(),e=this,i=document.getElementById("slider").value;setTimeout((function(){""===t.val?e.clearTile(t):e.renderTile(t),e.animate()}),i)}}},{key:"drawBoard",value:function(){var t=this,e=this.board.size/9,i=this.context;i.beginPath(),i.rect(0,0,this.board.size,this.board.size),i.fillStyle="white",i.fill();for(var o=0;o<3;o++)for(var r=0;r<3;r++)i.beginPath(),i.rect(3*o*e,3*r*e,3*e,3*e),i.lineWidth=4,i.stroke();for(var a=0;a<9;a++)i.beginPath(),i.moveTo(a*e,0),i.lineTo(a*e,this.board.size),i.lineWidth=1,i.stroke(),i.beginPath(),i.moveTo(0,a*e),i.lineTo(this.board.size,a*e),i.stroke();for(var s=0;s<9;s++)for(var u=function(i){var o="."===t.board.grid[s][i]?"":t.board.grid[s][i],r=new n(o,s,i,e,"#007acc","35px Patrick Hand");setTimeout(function(){this.renderTile(r)}.bind(t),125*i)},l=0;l<9;l++)u(l)}},{key:"activateInput",value:function(){this.deactivateInput(),this.board.removePuzzle(),this.drawBoard(),this.paused=!0,this.animationQueue=[],this.cursor=new s(this.context,this.board.size/9),this.cursor.drawBlinkingCursor();var t=document.getElementById("canvas-board"),e=this.mouseListener.bind(this);t.addEventListener("mousedown",e);var i=this.keyListener.bind(this);document.addEventListener("keydown",i);for(var n=document.getElementsByTagName("button"),o=0;o<n.length;o++)n[o].addEventListener("click",(function(){t.removeEventListener("mousedown",e),document.removeEventListener("keydown",i)}))}},{key:"mouseListener",value:function(t){this.cursor.clearExistingCursor();var e=this.board.size/9,i=Math.floor(t.offsetY/e),n=Math.floor(t.offsetX/e);this.cursor.updatePosition(i,n),this.cursor.drawBlinkingCursor()}},{key:"keyListener",value:function(t){var e=new Set(["1","2","3","4","5","6","7","8","9"]),i=this.board.size/9,o=this.cursor;if(e.has(t.key)){if(this.board.assignVal(o.row,o.col,t.key),!this.board.isValidPuzzle())return alert("That's not a valid board!"),void this.board.assignVal(o.row,o.col,".");var r=new n(t.key,o.row,o.col,i,"#007acc","35px Patrick Hand");this.renderTile(r)}else if(t.keyCode>=37&&t.keyCode<=40)o.clearExistingCursor(),"ArrowDown"===t.key&&o.row<8&&(o.row+=1),"ArrowUp"===t.key&&o.row>0&&(o.row-=1),"ArrowRight"===t.key&&o.col<8&&(o.col+=1),"ArrowLeft"===t.key&&o.col>0&&(o.col-=1),o.drawBlinkingCursor();else if("Space"===t.code){this.board.assignVal(o.row,o.col,".");var a=new n("",o.row,o.col,i);this.clearTile(a)}}},{key:"deactivateInput",value:function(){this.cursor&&this.cursor.clearExistingCursor()}},{key:"updateIterationCount",value:function(){this.animationCount++,document.getElementById("iteration-count").innerHTML=this.animationCount}},{key:"resetIterationCount",value:function(){this.animationCount=0,document.getElementById("iteration-count").innerHTML=0}},{key:"skipAnimation",value:function(){this.paused=!0,setTimeout(function(){var t=this;this.animationQueue.forEach((function(e){t.renderTile(e),t.updateIterationCount()})),this.animationQueue=[]}.bind(this),100)}}])&&u(e.prototype,i),o&&u(e,o),t}(),c=[[[".",".","3",".","5",".",".","7","9"],["2",".",".","6",".",".","1","5","."],[".","8","9",".","2","1",".",".","."],["1",".",".",".","7","8","9",".","6"],["9",".","8","2",".",".",".",".","5"],[".","2",".",".","4",".","8",".","."],["8",".","5",".","6","2",".","9","."],[".","9",".","5",".","7","6",".","1"],["7",".",".","4",".",".",".","8","."]],[["3",".",".","2","4",".",".","6","."],[".","4",".",".",".",".",".","5","3"],["1","8","9","6","3","5","4",".","."],[".",".",".",".","8",".","2",".","."],[".",".","7","4","9","6","8",".","1"],["8","9","3","1","5",".","6",".","4"],[".",".","1","9","2",".","5",".","."],["2",".",".","3",".",".","7","4","."],["9","6",".","5",".",".","3",".","2"]],[[".",".",".",".",".","5",".",".","7"],["5",".","6","2",".",".",".",".","3"],["1",".",".",".","3",".",".",".","."],[".",".","7","3",".","1",".",".","8"],["6",".",".",".",".",".","7",".","1"],["8","1","2",".","7","9",".",".","6"],["7",".",".","9",".",".","8","6","."],[".","6",".",".",".","3",".",".","2"],["2",".",".","7",".",".",".",".","."]],[[".",".","3",".","1","5","8","9","."],[".","7","6",".","9",".","2",".","5"],[".","9",".",".",".","2",".",".","."],[".",".","7","3","6","1",".","4","."],["9",".",".",".",".","4","1",".","7"],[".",".",".","2",".",".",".","3","."],["3",".",".",".",".",".",".",".","4"],["2","5","4",".","3",".",".",".","1"],[".","1",".","5",".",".","3","2","."]],[["1",".",".",".","2",".",".",".","4"],[".",".","7","8",".","6","2",".","."],[".","8",".",".",".",".",".","3","."],[".","3",".",".","6",".",".","9","."],["7",".",".","5",".","1",".",".","6"],[".","4",".",".","3",".",".","7","."],[".","5",".",".",".",".",".","1","."],[".",".","4","3",".","8","7",".","."],["6",".",".",".","1",".",".",".","5"]],[[".",".",".","5",".",".","8",".","2"],[".",".",".","9","8","2",".",".","4"],[".","4",".",".","1",".",".",".","."],[".",".","5",".",".","8","7",".","1"],[".",".","1","4","3","7","9",".","."],["7",".","2","1",".",".","3",".","."],[".",".",".",".","2",".",".","8","."],["8",".",".","3","4","9",".",".","."],["9",".","6",".",".","1",".",".","."]],[[".",".","9",".",".",".","8",".","6"],["6",".",".",".",".","5",".",".","."],[".","4",".",".","2",".","9",".","."],[".","1","4","5",".","2",".",".","."],["3",".",".","4",".","6",".",".","2"],[".",".",".","8",".","9","5","4","."],[".",".","6",".","5",".",".","1","."],[".",".",".","9",".",".",".",".","8"],["1",".","7",".",".",".","4",".","."]],[[".","2",".","8",".",".",".",".","."],["4","8",".",".","7",".",".",".","5"],["3",".","9","4",".",".","1",".","."],[".",".",".","3",".",".",".","7","."],["6",".",".",".","5",".",".",".","2"],[".","5",".",".",".","1",".",".","."],[".",".","8",".",".","2","4",".","7"],["5",".",".",".","4",".",".","9","3"],[".",".",".",".",".","3",".","5","."]],[["1",".",".","3",".","4","5",".","."],[".",".","3","1","5",".","4",".","9"],["6",".",".","2",".","8",".",".","."],["2","9","5",".",".",".",".",".","7"],[".",".","1","9",".","2","8",".","."],["3",".",".",".",".",".","9","2","1"],[".",".",".","7",".","1",".",".","8"],["9",".","8",".","2","5","7",".","."],[".",".","2","4",".","9",".",".","6"]],[["1","2",".","5","3","6","7","9","."],["5",".",".",".",".",".",".","2","."],[".",".",".","4",".",".",".",".","5"],["7","8",".","3",".","1",".",".","."],["4","6",".","7",".","5",".","3","9"],[".",".",".","2",".","4",".","8","7"],["3",".",".",".",".","8",".",".","."],[".","5",".",".",".",".",".",".","1"],[".","9","1","6","4","7",".","5","3"]],[["3","2",".","8",".","6",".",".","4"],[".",".","6",".","1",".",".","2","."],[".","7",".",".",".",".","5","6","."],[".",".","4",".",".","5","1",".","."],[".",".",".",".","4",".",".",".","."],[".",".","3","9",".",".","8",".","."],[".","3","2",".",".",".",".","8","."],[".","6",".",".","2",".","3",".","."],["5",".",".","6",".","8",".","9","2"]]];i(0);document.getElementById("solve").onclick=function(){v.deactivateInput(),v.board.solve(),v.paused?(v.paused=!v.paused,v.animate(),document.getElementById("solve").textContent="Pause"):(v.paused=!v.paused,document.getElementById("solve").textContent="Solve")},document.getElementById("next-puzzle").onclick=function(){v.paused=!0,v.deactivateInput(),v.resetIterationCount(),document.getElementById("solve").textContent="Solve";var t=Math.floor(Math.random()*f.length);(v=new l(h,450,f[t].dupBoard())).drawBoard()};var d=document.getElementById("create-puzzle");d.onclick=function(){v.resetIterationCount(),d.blur(),document.getElementById("solve").textContent="Solve",v.activateInput()};document.getElementById("animation-speed"),document.getElementById("iterations-div"),document.getElementById("controls-buttons");var h=document.getElementById("canvas-board").getContext("2d"),f=c;Array.prototype.dupBoard=function(){for(var t=new Array(9),e=0;e<9;e++)t[e]=new Array(9);for(var i=0;i<9;i++)for(var n=0;n<9;n++)t[i][n]=this[i][n].slice();return t};var v=new l(h,450,f[0].dupBoard());v.drawBoard()}]);
//# sourceMappingURL=main.js.map