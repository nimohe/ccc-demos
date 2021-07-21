window.__require=function t(e,o,n){function r(i,a){if(!o[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({Box:[function(t,e,o){"use strict";cc._RF.push(e,"0c576BkkiNGoostXMhx2Ni/","Box");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./scene/GameScene"),a=cc._decorator,s=a.ccclass,p=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.opened=!1,e.ani=null,e}return r(e,t),e.prototype.onLoad=function(){this.opened=!1,this.ani=this.node.getComponent(cc.Animation)},e.prototype.start=function(){},e.prototype.openBox=function(t){var e=this;if(!this.opened){var o=Math.floor(Math.random()*i.default.BOX_ANI_NAME.length),n=i.default.BOX_ANI_NAME[o];i.default.BOX_ANI_NAME.splice(o,1),this.ani.on(cc.Animation.EventType.FINISHED,function(){e.opened=!0,t&&t(n)}),this.ani.play(n)}},c([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{"./scene/GameScene":"GameScene"}],GameScene:[function(t,e,o){"use strict";cc._RF.push(e,"8b57fLiQJBDWIFUrvoEO4lG","GameScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i,a=t("../Box"),s=cc._decorator,p=s.ccclass,l=s.property;(function(t){t.left="left",t.right="right"})(i||(i={}));var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.btnArrow=null,e.arrowUI=null,e.arrowId=0,e.arrowPosArr=[],e.boxGp=null,e.btnArrowCanPress=!0,e.btnArrowAni=null,e.arrowInitPosX=0,e.arrowEndPosX=0,e.btnA=null,e.btnRestart=null,e.gameOver=!1,e.btnACanPress=!0,e.bossNd=null,e}var o;return r(e,t),o=e,e.prototype.onLoad=function(){this.btnRestart.active=!1,this.bossNd.active=!1},e.prototype.start=function(){var t=this;this.btnArrowCanPress=!0,this.btnArrowAni=this.btnArrow.getComponent(cc.Animation),this.boxGp.children.forEach(function(e){t.arrowPosArr.push(e.x)}),this.arrowUI.x=this.arrowPosArr[this.arrowId],this.btnArrow.on(cc.Node.EventType.TOUCH_START,this.btnArrowTouchStartHandler,this),this.btnArrow.on(cc.Node.EventType.TOUCH_END,this.btnArrowTouchEndHandler,this),this.btnArrow.on(cc.Node.EventType.TOUCH_CANCEL,this.btnArrowTouchCancelHandler,this),this.btnA.on(cc.Node.EventType.TOUCH_START,this.btnATouchEndHandler,this)},e.prototype.btnATouchEndHandler=function(){var t=this;this.btnACanPress&&(this.btnACanPress=!1,this.boxGp.children[this.arrowId].getComponent(a.default).openBox(function(e){t.btnACanPress=!0,cc.log(e),"box-open-boss"==e&&(t.gameOver=!0,t.bossNd.active=!0,t.bossNd.getComponent(cc.Animation).play(),t.bossNd.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED,function(){t.btnRestart.active=!0,t.btnRestart.opacity=0,cc.tween(t.btnRestart).to(1,{opacity:255}).start(),cc.tween(t.btnRestart).delay(1.5).blink(2,3).call(function(){t.btnRestart.on(cc.Node.EventType.TOUCH_START,function(){o.BOX_ANI_NAME=["box-open-empty","box-open-boss","box-open-gold"],t.gameOver=!1,t.btnArrowCanPress=!0,t.btnACanPress=!1,cc.director.loadScene("game")},t)}).start()},t))}))},e.prototype.btnArrowTouchCancelHandler=function(t){this.arrowEndPosX=t.getLocationX(),this.calculateArrow()},e.prototype.btnArrowTouchEndHandler=function(t){this.arrowEndPosX=t.getLocationX(),this.calculateArrow()},e.prototype.calculateArrow=function(){var t,e=this;this.btnArrowCanPress=!1,this.arrowEndPosX-this.arrowInitPosX>0&&Math.abs(this.arrowEndPosX-this.arrowInitPosX)>20?(cc.log("right"),t=i.right,this.arrowId++,this.arrowId>2&&(this.arrowId=2)):(cc.log("left"),t=i.left,this.arrowId--,this.arrowId<=0&&(this.arrowId=0)),this.arrowUI.x=this.arrowPosArr[this.arrowId],this.btnArrowAni.on(cc.Animation.EventType.FINISHED,function(){e.btnArrowCanPress=!0}),this.btnArrowAni.play("arrow-"+t)},e.prototype.btnArrowTouchStartHandler=function(t){this.btnArrowCanPress&&!this.gameOver&&(this.arrowInitPosX=t.getLocationX())},e.BOX_ANI_NAME=["box-open-empty","box-open-boss","box-open-gold"],c([l(cc.Label)],e.prototype,"label",void 0),c([l],e.prototype,"text",void 0),c([l(cc.Node)],e.prototype,"btnArrow",void 0),c([l(cc.Node)],e.prototype,"arrowUI",void 0),c([l(cc.Node)],e.prototype,"boxGp",void 0),c([l(cc.Node)],e.prototype,"btnA",void 0),c([l(cc.Node)],e.prototype,"btnRestart",void 0),c([l(cc.Node)],e.prototype,"bossNd",void 0),o=c([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"../Box":"Box"}],InfoScene:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","InfoScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("../SwitchScene"),a=cc._decorator,s=a.ccclass,p=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){var t=this.node.getComponent(i.default);cc.tween(this.node).delay(1).to(1.9,{opacity:0}).start(),this.scheduleOnce(function(){t.LoadNextScene()},3)},c([p(cc.Label)],e.prototype,"label",void 0),c([p],e.prototype,"text",void 0),c([s],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../SwitchScene":"SwitchScene"}],SwitchScene:[function(t,e,o){"use strict";cc._RF.push(e,"94e901fvpZML425xdfzvdPJ","SwitchScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,s=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nextScene="",e}return r(e,t),e.prototype.start=function(){this.nextScene.length&&cc.director.preloadScene(this.nextScene)},e.prototype.LoadNextScene=function(){cc.director.loadScene(this.nextScene)},c([s],e.prototype,"nextScene",void 0),c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["Box","SwitchScene","GameScene","InfoScene"]);