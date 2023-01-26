window.__require=function t(e,o,r){function n(i,a){if(!o[i]){if(!e[i]){var l=i.split("/");if(l=l[l.length-1],!e[l]){var u="function"==typeof __require&&__require;if(!a&&u)return u(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+i+"'")}i=l}var p=o[i]={exports:{}};e[i][0].call(p.exports,function(t){return n(e[i][1][t]||t)},p,p.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({BarManager:[function(t,e,o){"use strict";cc._RF.push(e,"974edNWWXxDk4qYywESTEvC","BarManager");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,l=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.barInner=null,e.percentVal=0,e.colors=[],e}return n(e,t),e.prototype.onLoad=function(){this.setFillStart(this.percentVal)},e.prototype.start=function(){this.barInner.color=this.colors[0]},e.prototype.setFillStart=function(t){this.percentVal=1-t,this.barInner.getComponent(cc.Sprite).fillStart=this.percentVal,this.changeBarColor(this.percentVal)},e.prototype.changeBarColor=function(t){var e;t<.25&&t>=0?e=this.colors[0]:t<.5&&t>=.25?e=this.colors[1]:t<.75&&t>=.5?e=this.colors[2]:t>=.75&&(e=this.colors[3]),this.barInner.color=e},c([l(cc.Node)],e.prototype,"barInner",void 0),c([l],e.prototype,"percentVal",void 0),c([l([cc.Color])],e.prototype,"colors",void 0),c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,l=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return n(e,t),e.prototype.start=function(){this.label.string=this.text},c([l(cc.Label)],e.prototype,"label",void 0),c([l],e.prototype,"text",void 0),c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"c4d85SFuh9ICbXLF9jymugW","Main");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./BarManager"),a=cc._decorator,l=a.ccclass,u=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btn_add=null,e.targetVal=100,e.currVal=0,e.barManager=null,e.clickAudio=null,e.clickAudioSource=null,e.winnerAudioSource=null,e.kickShellAudioSource=null,e.deathAudioSource=null,e.labelCoin=null,e.dogShow=null,e}return n(e,t),e.prototype.onLoad=function(){this.currVal=0,this.labelCoin.opacity=0},e.prototype.start=function(){cc.log(this.btn_add),this.clickAudioSource=new cc.AudioSource,this.clickAudioSource.clip=this.clickAudio,this.clickAudioSource.volume=.2,this.btn_add.on(cc.Node.EventType.TOUCH_START,this.btnAddTouchHandler,this)},e.prototype.getRand=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=10),Math.floor(Math.random()*e+t)},e.prototype.btnAddTouchHandler=function(){var t=this.getRand();if(this.currVal+=t,this.currVal>=this.targetVal){this.btn_add.active=!1,this.barManager.setFillStart(1),cc.log("winner");var e=this.dogShow.getComponent(cc.Animation);e.once(cc.Animation.EventType.FINISHED,this.gameOver,this),this.dogAnimationState=e.play("dog-change-style"),cc.audioEngine.playEffect(this.winnerAudioSource,!1)}else{this.dogAnimationState=this.dogShow.getComponent(cc.Animation).play("dog-small-idle"),this.node.getComponent(cc.AudioSource).play(),this.labelCoin.getComponent(cc.Label).string="+ "+t,this.labelCoin.getComponent(cc.Animation).play("small-dog-add-coin");var o=Number((this.currVal/this.targetVal).toFixed(2));cc.log("click:",t,o),this.barManager.setFillStart(o)}},e.prototype.gameOver=function(){var t=this,e=setTimeout(function(){clearTimeout(e),t.schedule(t.reduceEGOVal,.5,50)},500)},e.prototype.reduceEGOVal=function(){var t=this,e=this.getRand(40,60);this.currVal-=e,cc.audioEngine.playEffect(this.kickShellAudioSource,!1),this.labelCoin.getComponent(cc.Label).string="- "+e,this.labelCoin.getComponent(cc.Animation).play("big-dog-lose-coin"),cc.log("--\x3e:",this.currVal);var o=Number((this.currVal/this.targetVal).toFixed(2));if(this.barManager.setFillStart(o),this.currVal<=0)return cc.log("return small dog"),cc.audioEngine.playEffect(this.deathAudioSource,!1),this.dogShow.getComponent(cc.Animation).play("dog-reset"),this.currVal=0,this.barManager.setFillStart(0),this.unschedule(this.reduceEGOVal),void setTimeout(function(){t.btn_add.active=!0},1300);this.dogShow.getComponent(cc.Animation).play("dog-big-idle")},c([u(cc.Node)],e.prototype,"btn_add",void 0),c([u({type:cc.Integer,tooltip:"\u76ee\u6807\u5206\u6570"})],e.prototype,"targetVal",void 0),c([u(i.default)],e.prototype,"barManager",void 0),c([u(cc.AudioClip)],e.prototype,"clickAudio",void 0),c([u(cc.AudioClip)],e.prototype,"winnerAudioSource",void 0),c([u(cc.AudioClip)],e.prototype,"kickShellAudioSource",void 0),c([u(cc.AudioClip)],e.prototype,"deathAudioSource",void 0),c([u(cc.Node)],e.prototype,"labelCoin",void 0),c([u(cc.Node)],e.prototype,"dogShow",void 0),c([l],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./BarManager":"BarManager"}]},{},["BarManager","Helloworld","Main"]);