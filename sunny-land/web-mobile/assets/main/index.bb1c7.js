window.__require=function t(e,o,n){function r(i,a){if(!o[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var s="function"==typeof __require&&__require;if(!a&&s)return s(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({CameraManager:[function(t,e,o){"use strict";cc._RF.push(e,"7f2b8VzN41KSbvuuFItUlc+","CameraManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("../data/GameData"),a=cc._decorator,p=a.ccclass,s=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.player=null,e.camera=null,e}return r(e,t),e.prototype.start=function(){i.default.start()},e.prototype.update=function(){var t=this.player.convertToWorldSpaceAR(cc.v2(0,0)),e=this.node.parent.convertToNodeSpaceAR(t);e.x>0&&e.x<i.default.tiledMapWidth*i.default.tiledMapScaleVal-i.default.width&&(this.node.x=e.x)},c([s(cc.Node)],e.prototype,"player",void 0),c([s(cc.Camera)],e.prototype,"camera",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../data/GameData":"GameData"}],Demo:[function(t,e,o){"use strict";cc._RF.push(e,"b29cdxd4XJPtKg7CFlZkAzG","Demo");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./user-ctrl/UserCtrlEvt"),a=cc._decorator,p=a.ccclass,s=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.text="hello",e}return r(e,t),e.prototype.start=function(){i.default.getInstance().on(i.default.TYPE_EVT.leftBtn,this.userLeftHandler,this),i.default.getInstance().on(i.default.TYPE_EVT.rightBtn,this.userLeftHandler,this),i.default.getInstance().on(i.default.TYPE_EVT.jumpBtn,this.userLeftHandler,this)},e.prototype.userLeftHandler=function(t){cc.log(t)},c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./user-ctrl/UserCtrlEvt":"UserCtrlEvt"}],Enemy:[function(t,e,o){"use strict";cc._RF.push(e,"5b19cTecwdIOJgaS/MvtaMQ","Enemy");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enemyName="",e.attackVal=0,e.heathVal=0,e}return r(e,t),e.prototype.start=function(){},e.prototype.test=function(){cc.log("kill by self")},e.prototype.death=function(){},e.STATE_DEATH="death",c([p],e.prototype,"enemyName",void 0),c([p],e.prototype,"attackVal",void 0),c([p],e.prototype,"heathVal",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Frog:[function(t,e,o){"use strict";cc._RF.push(e,"89c0eHtIYxE94a9BiEWZvEh","Frog");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Enemy"),a=cc._decorator,p=a.ccclass,s=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.jumpVal=300,e.speedVal=150,e.interval=4,e.frogJumpSide="",e.currSide="",e}var o;return r(e,t),o=e,e.prototype.onLoad=function(){this.animtion=this.node.getComponent(cc.Animation)},e.prototype.start=function(){this.attackVal=1,this.frogJumpSide=o.JUMP_SIDE_RIGHT,this.currSide=o.JUMP_SIDE_LEFT,cc.director.getScheduler().schedule(this.startJump,this,this.interval)},e.prototype.update=function(){var t=this.node.getComponent(cc.RigidBody).linearVelocity;t.y>10?this.animtion.play(o.STATE_JUMP):t.y<0&&this.animtion.play(o.STATE_FALL)},e.prototype.jump=function(){var t=this.node.getComponent(cc.RigidBody).linearVelocity;t.y=this.jumpVal,this.frogJumpSide==o.JUMP_SIDE_LEFT?(this.node.scaleX=1,t.x=-this.speedVal):this.frogJumpSide==o.JUMP_SIDE_RIGHT&&(this.node.scaleX=-1,t.x=this.speedVal),this.node.getComponent(cc.RigidBody).linearVelocity=t},e.prototype.startJump=function(){this.switchFrogJump(),this.jump()},e.prototype.onBeginContact=function(){this.animtion.play(o.STATE_IDLE),this.isOnFloor=!0},e.prototype.switchFrogJump=function(){this.frogJumpSide=this.frogJumpSide==o.JUMP_SIDE_LEFT?o.JUMP_SIDE_RIGHT:o.JUMP_SIDE_LEFT},e.prototype.death=function(){cc.director.getScheduler().unscheduleAllForTarget(this),this.animtion.play(o.STATE_DEATH)},e.prototype.animationDateOver=function(){this.node.destroy()},e.STATE_IDLE="idle",e.STATE_DEATH="death",e.STATE_JUMP="jump",e.STATE_FALL="fall",e.JUMP_SIDE_LEFT="left",e.JUMP_SIDE_RIGHT="right",o=c([p],e)}(i.default));o.default=s,cc._RF.pop()},{"./Enemy":"Enemy"}],GameData:[function(t,e,o){"use strict";cc._RF.push(e,"9cc82AMh2FGtoEY1VDbyWnB","GameData"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){}return t.start=function(){},t.tagEnemys=[1,2,3],t.tagItems=[11,22,33],t.tagFinalCheckPoint=[111],t.TYPE_ITEM_CHERRY="cherry",t.TYPE_ITEM_GEM="gem",t.EVT_GET_ITEM="evt_get_item",t.GAME_OVER="game_over",t.GAME_FAIL="game_fail",t.ITEM_FEED_BACK_ANIMATION_OVER="item_feed_back_animation_over",t.TEST_ANI_OVER_NUMS=0,t}();o.default=n,cc._RF.pop()},{}],GameScene:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","GameScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./data/GameData"),a=t("./Player"),p=t("./ui/item/ItemFeedBack"),s=cc._decorator,l=s.ccclass,u=s.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tiledMap=null,e.scoreLabel=null,e.player=null,e.joyCtrl=null,e.temp=null,e.currScoreVal=0,e.test_put_nums=0,e}return r(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,cc.game.canvas.focus(),i.default.width=this.node.width,i.default.height=this.node.height,i.default.tiledMapScaleVal=3,this.tempNodeFeddBkArray=new Array},e.prototype.isPC=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=0;o<e.length;o++)if(t.indexOf(e[o])>-1)return!1;return!0},e.prototype.frogCompleteHandler=function(){},e.prototype.start=function(){var t=this;this.scheduleOnce(function(){cc.log(t.tiledMap,t.tiledMap.x),t.tiledMap.getComponent(cc.Widget)?(t.tiledMap.getComponent(cc.Widget).left=0,t.tiledMap.getComponent(cc.Widget).updateAlignment()):(t.tiledMap.addComponent(cc.Widget),t.tiledMap.getComponent(cc.Widget).left=0,t.tiledMap.getComponent(cc.Widget).updateAlignment()),cc.log(t.tiledMap,t.tiledMap.x)},1),this.temp&&this.temp.getComponent(cc.Widget),cc.view.enableAutoFullScreen(!0),this.initMapNode(this.tiledMap),i.default.tiledMapWidth=this.tiledMap.width,i.default.tiledMapHeight=this.tiledMap.height,this.scoreLabel.string="\u5206\u6570\uff1a"+this.currScoreVal,this.playerScript=this.player.getComponent(a.default),this.playerScript.node.on(i.default.EVT_GET_ITEM,this.playerScriptHandler,this),this.playerScript.node.once(i.default.GAME_OVER,this.gameOverHandler,this),this.playerScript.node.once(i.default.GAME_FAIL,this.gameFailHandler,this)},e.prototype.gameFailHandler=function(){cc.director.loadScene("gameFail")},e.prototype.gameOverHandler=function(){cc.director.loadScene("gameWin")},e.prototype.playerScriptHandler=function(t,e,o){this.currScoreVal+=t,this.scoreLabel.string="\u5206\u6570\uff1a"+this.currScoreVal;var n=this.convertPosOtherToSelf(e,this.node);this.tempNodeFeddBkArray.push(o),Math.random(),o.getComponent(p.default).playAnimation(),this.node.addChild(o),o.x=n.x,o.y=n.y,e.destroy(),setTimeout(this.itemFeedbackAnimationOverHandler.bind(this),600)},e.prototype.itemFeedbackAnimationOverHandler=function(){this.test_put_nums++;var t=this.tempNodeFeddBkArray[this.tempNodeFeddBkArray.length-1];this.playerScript.putItemToPool(t),this.tempNodeFeddBkArray.pop()},e.prototype.convertPosOtherToSelf=function(t,e){var o=t.convertToWorldSpaceAR(cc.v2(0,0));return e.convertToNodeSpaceAR(o)},e.prototype.update=function(){},e.prototype.initMapNode=function(t){for(var e=t.getComponent(cc.TiledMap),o=e.getTileSize(),n=e.getLayer("wall"),r=n.getLayerSize(),c=0;c<r.width;c++)for(var i=0;i<r.height;i++){var a=n.getTiledTileAt(c,i,!0);if(0!=a.gid){a.node.group="wall";var p=a.node.addComponent(cc.RigidBody);p.awakeOnLoad=p.fixedRotation=!0,p.allowSleep=!0,p.type=cc.RigidBodyType.Static;var s=a.node.addComponent(cc.PhysicsBoxCollider);s.offset=cc.v2(o.width/2,o.height/2),s.size=o,s.friction=.2,s.density=1,s.restitution=.01,s.apply()}}},c([u(cc.Node)],e.prototype,"tiledMap",void 0),c([u(cc.Label)],e.prototype,"scoreLabel",void 0),c([u(cc.Node)],e.prototype,"player",void 0),c([u(cc.Node)],e.prototype,"joyCtrl",void 0),c([u(cc.Node)],e.prototype,"temp",void 0),c([l],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./Player":"Player","./data/GameData":"GameData","./ui/item/ItemFeedBack":"ItemFeedBack"}],GameStart:[function(t,e,o){"use strict";cc._RF.push(e,"01020WddlNBurSp70Jbx4Vb","GameStart");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startBtn=null,e.titleScreenNd=null,e}return r(e,t),e.prototype.onLoad=function(){this.startBtn.node.on(cc.Node.EventType.TOUCH_END,this.startBtnTouchEndHandler,this)},e.prototype.startBtnTouchEndHandler=function(){cc.director.loadScene("info")},e.prototype.start=function(){cc.director.preloadScene("info"),cc.tween(this.startBtn.node).repeatForever(cc.tween().to(.6,{opacity:255}).to(.6,{opacity:0})).start(),cc.tween(this.titleScreenNd).repeatForever(cc.tween().to(1.2,{scale:3.1}).to(1.2,{scale:3})).start()},e.prototype.onDestroy=function(){},c([p(cc.Button)],e.prototype,"startBtn",void 0),c([p(cc.Node)],e.prototype,"titleScreenNd",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],GameUtil:[function(t,e,o){"use strict";var n;cc._RF.push(e,"44819uj42dBv6wgg1VNkywR","GameUtil"),Object.defineProperty(o,"__esModule",{value:!0}),o.COLOR_LOG=void 0,function(t){t.red="#0f0",t.player="#eeb07e"}(n=o.COLOR_LOG||(o.COLOR_LOG={}));var r=function(){function t(){}return t.log=function(e,o){var r;void 0===o&&(o=n.red),t.logIsOn&&(r="color:"+o+";",console.log("%c "+e,r+"font-size:20px;"))},t.logIsOn=!0,t}();o.default=r,cc._RF.pop()},{}],Heart:[function(t,e,o){"use strict";cc._RF.push(e,"cf54bSf/mBD1ZKzBGnP6T08","Heart");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i,a=cc._decorator,p=a.ccclass,s=a.property;(function(t){t[t.Full=2]="Full",t[t.Half=1]="Half",t[t.Empty=0]="Empty"})(i||(i={}));var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stateVal=i.Full,e.spFrames=[],e}return r(e,t),e.prototype.onLoad=function(){this.spComp=this.node.getComponent(cc.Sprite)},e.prototype.start=function(){},e.prototype.setState=function(t){this.spFrames&&(this.spComp.spriteFrame=this.spFrames[t])},e.HEART_VAL=2,c([s({type:cc.Enum(i)})],e.prototype,"stateVal",void 0),c([s([cc.SpriteFrame])],e.prototype,"spFrames",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],ItemFeedBack:[function(t,e,o){"use strict";cc._RF.push(e,"0db91KeaFhNgr1tODbYTmwD","ItemFeedBack");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("../../data/GameData"),a=cc._decorator,p=a.ccclass,s=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id=-1,e}return r(e,t),e.prototype.onLoad=function(){},e.prototype.playAnimation=function(){this.ani=this.node.getComponent(cc.Animation),this.ani.setCurrentTime(0),this.aniState=this.ani.play(),this.ani.sample(this.ani.name)},e.prototype.aniStopHandler=function(){},e.prototype.animationOver=function(){i.default.TEST_ANI_OVER_NUMS++,this.node.emit(i.default.ITEM_FEED_BACK_ANIMATION_OVER)},e.prototype.reuse=function(){cc.log("reuse")},e.prototype.unuse=function(){cc.log("unuse")},c([p],e)}(cc.Component));o.default=s,cc._RF.pop()},{"../../data/GameData":"GameData"}],PlayerLifeManager:[function(t,e,o){"use strict";cc._RF.push(e,"e8c56RtvapOr7LriLW6CSMC","PlayerLifeManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("../ui/Heart"),a=t("../evt/UIEvt"),p=t("../Player"),s=cc._decorator,l=s.ccclass,u=s.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.heartNds=[],e.lifeNum=0,e}return r(e,t),e.prototype.onLoad=function(){a.default.getInstance().once(a.default.PLAYER_LIFE_INIT,this.playerLifeHandler,this),a.default.getInstance().on(a.default.PLAYER_LIFE_CHANGE,this.playerLifeHandler,this)},e.prototype.playerLifeHandler=function(t){this.lifeVal=t},Object.defineProperty(e.prototype,"lifeVal",{get:function(){return this.lifeNum},set:function(t){cc.log("life:",t),t>p.default.LIFE_MAX&&(t=p.default.LIFE_MAX),this.lifeNum=t,this.ctrlLifeUI(t)},enumerable:!1,configurable:!0}),e.prototype.ctrlLifeUI=function(t){var e,o=[0,0,0];e=Math.floor(t/2);for(var n=0;n<3;n++)n<e?(o[n]=i.default.HEART_VAL,t-=i.default.HEART_VAL):t>0?(o[n]=t,t=0):0==t&&(o[n]=0);cc.log("lifeArr:",o),this.heartNds.forEach(function(t,e){var n=t.getComponent(i.default);cc.log(o[e]),n&&n.setState(o[e])})},c([u([cc.Node])],e.prototype,"heartNds",void 0),c([l],e)}(cc.Component);o.default=f,cc._RF.pop()},{"../Player":"Player","../evt/UIEvt":"UIEvt","../ui/Heart":"Heart"}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"f6418Qu7aRKlbiDcDInEIhd","Player");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./data/GameData"),a=t("./ui/enemy/Enemy"),p=t("./user-ctrl/UserCtrlEvt"),s=t("./ui/item/ItemFeedBack"),l=t("./util/GameUtil"),u=t("./evt/UIEvt"),f=t("./evt/UIEvt"),d=cc._decorator,h=d.ccclass,y=d.property,_={},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.itemFeedbackInstance=null,e.liveNum=6,e.currSpeed=300,e.jumpVal=500,e.sp=new cc.Vec2(0,0),e}return r(e,t),e.prototype.onLoad=function(){_={},l.default.logIsOn=!1,this.heroState="stand",this.isGameOver=!1,p.default.getInstance().on(p.default.TYPE_EVT.rightBtn,this.rightBtnTouchStartHandler,this),p.default.getInstance().on(p.default.TYPE_EVT.leftBtn,this.leftBtnTouchStartHandler,this),p.default.getInstance().on(p.default.TYPE_EVT.jumpBtn,this.jumpBtnTouchStartHandler,this)},e.prototype.start=function(){this.animation=this.getComponent(cc.Animation),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keyDownHandler),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyUpHandler),this.isHurt=!1,this.createPoolItemFeedback(),u.default.getInstance().emit(u.default.PLAYER_LIFE_INIT,this.liveNum)},e.prototype.offCtrlHandler=function(){p.default.getInstance().off(p.default.TYPE_EVT.rightBtn,this.rightBtnTouchStartHandler,this),p.default.getInstance().off(p.default.TYPE_EVT.leftBtn,this.leftBtnTouchStartHandler,this),p.default.getInstance().off(p.default.TYPE_EVT.jumpBtn,this.jumpBtnTouchStartHandler,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.keyDownHandler),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.keyUpHandler)},e.prototype.jumpBtnTouchStartHandler=function(t){t.currentTarget.name;var e=t.type;if(e==cc.Node.EventType.TOUCH_START){var o=cc.macro.KEY.space;_[o]=1}else e!=cc.Node.EventType.TOUCH_END&&e!=cc.Node.EventType.TOUCH_CANCEL||(o=cc.macro.KEY.space,_[o]=0)},e.prototype.leftBtnTouchStartHandler=function(t){t.currentTarget.name;var e=t.type;if(e==cc.Node.EventType.TOUCH_START){var o=cc.macro.KEY.left;_[o]=1}else e!=cc.Node.EventType.TOUCH_END&&e!=cc.Node.EventType.TOUCH_CANCEL||(o=cc.macro.KEY.left,_[o]=0)},e.prototype.rightBtnTouchStartHandler=function(t){t.currentTarget.name;var e=t.type;if(e==cc.Node.EventType.TOUCH_START){var o=cc.macro.KEY.right;_[o]=1}else e!=cc.Node.EventType.TOUCH_END&&e!=cc.Node.EventType.TOUCH_CANCEL||(o=cc.macro.KEY.right,_[o]=0)},e.prototype.createPoolItemFeedback=function(){this.poolItemFeedback=new cc.NodePool("ItemFeedBack");for(var t=0;t<5;++t){var e=this.createItemFeedback(t+1);this.poolItemFeedback.put(e)}},e.prototype.createItemFeedback=function(t){void 0===t&&(t=-1);var e=cc.instantiate(this.itemFeedbackInstance);return e.setScale(3),e.setAnchorPoint(.5,.5),e.getComponent(s.default).id=t,e},e.prototype.hurtFinshed=function(){},e.prototype.animationFinishedHandler=function(){},e.prototype.keyDownHandler=function(t){var e=t.keyCode;_[e]=1},e.prototype.keyUpHandler=function(t){var e=t.keyCode;_[e]=0},e.prototype.update=function(){this.move()},e.prototype.closeHurt=function(){cc.director.getScheduler().unscheduleAllForTarget(this),this.isHurt=!1},e.prototype.switchAnimation=function(t){this.currAnimationState!=t&&(this.currAnimationState=t,this.animation.play(this.currAnimationState),l.default.log("player currAnimationState:"+this.currAnimationState,l.COLOR_LOG.player))},e.prototype.move=function(){if(!this.isHurt&&!this.isGameOver){var t=Math.abs(this.node.scaleX),e=this.node.getComponent(cc.RigidBody).linearVelocity;"stand"==this.heroState&&(_[cc.macro.KEY.left]||_[cc.macro.KEY.a]?(this.sp.x=-1,this.node.scaleX=-t,this.switchAnimation("run")):_[cc.macro.KEY.right]||_[cc.macro.KEY.d]?(this.sp.x=1,this.node.scaleX=t,this.switchAnimation("run")):(this.sp.x=0,0==this.sp.y&&this.switchAnimation("idle")),_[cc.macro.KEY.space]&&0==e.y&&(e.y=this.jumpVal)),this.sp.x?e.x=this.sp.x*this.currSpeed:e.x=0,e.y<0?this.switchAnimation("fall"):e.y>5&&this.switchAnimation("jump"),this.node.getComponent(cc.RigidBody).linearVelocity=e}},e.prototype.jump=function(){var t=this.node.getComponent(cc.RigidBody).linearVelocity;t.y=this.jumpVal,this.node.getComponent(cc.RigidBody).linearVelocity=t},e.prototype.hurt=function(){_={};var t=this.node.getComponent(cc.RigidBody).linearVelocity;t.x=this.node.scaleX>0?-200:200,this.node.getComponent(cc.RigidBody).linearVelocity=t},e.prototype.stayIdle=function(){var t=this.node.getComponent(cc.RigidBody).linearVelocity;t.x=0,t.y=0,this.node.getComponent(cc.RigidBody).linearVelocity=t,this.sp.x=0,this.sp.y=0},e.prototype.onCollisionEnter=function(t){var e,o,n,r,c=this;if(cc.log("collision",t),e=i.default.tagEnemys.indexOf(t.tag)>=0,"fall"==this.currAnimationState?e&&((r=t.getComponent(a.default))&&(r.death(),r.test()),this.jump()):e&&(cc.log("player hurt"),this.isHurt=!0,this.hurt(),this.switchAnimation("hurt"),(r=t.getComponent(a.default))&&(this.liveNum-=r.attackVal,cc.log("enemyScript attackVal:",r.attackVal,this.liveNum),f.UIEvtIntance.emit(u.default.PLAYER_LIFE_CHANGE,this.liveNum)),this.liveNum<=0?(this.isGameOver=!0,this.offCtrlHandler(),this.scheduleOnce(function(){cc.log("game fail"),c.node.emit(i.default.GAME_FAIL)},1)):cc.director.getScheduler().schedule(this.closeHurt,this,.5)),o=i.default.tagItems.indexOf(t.tag)>=0,n=i.default.tagFinalCheckPoint.indexOf(t.tag)>=0,o){var p=void 0;this.poolItemFeedback.size()>0?p=this.poolItemFeedback.get():(console.log("%c pool over","color:#00f;"),p=cc.instantiate(this.createItemFeedback())),this.node.emit(i.default.EVT_GET_ITEM,1,t.node,p)}else n&&(t.node.destroy(),this.isGameOver=!0,this.stayIdle(),this.switchAnimation("idle"),this.offCtrlHandler(),cc.log("game over"),this.node.emit(i.default.GAME_OVER))},e.prototype.putItemToPool=function(t){cc.log("pool put before--",this.poolItemFeedback.size(),t.name),this.poolItemFeedback.put(t),cc.log("pool put end--",this.poolItemFeedback.size(),t.name)},e.prototype.convertPosOtherToSelf=function(t,e){var o=t.convertToWorldSpace(cc.v2(0,0));return e.convertToNodeSpaceAR(o)},e.LIFE_MAX=6,c([y(cc.Prefab)],e.prototype,"itemFeedbackInstance",void 0),c([y({type:cc.Integer})],e.prototype,"liveNum",void 0),c([h],e)}(cc.Component);o.default=m,cc._RF.pop()},{"./data/GameData":"GameData","./evt/UIEvt":"UIEvt","./ui/enemy/Enemy":"Enemy","./ui/item/ItemFeedBack":"ItemFeedBack","./user-ctrl/UserCtrlEvt":"UserCtrlEvt","./util/GameUtil":"GameUtil"}],SceneInfo:[function(t,e,o){"use strict";cc._RF.push(e,"e12a4aLZrlClqg7BUZ4jgTc","SceneInfo");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nextScene="",e}return r(e,t),e.prototype.start=function(){var t=this;cc.director.preloadScene(this.nextScene),this.scheduleOnce(function(){cc.director.loadScene(t.nextScene)},1)},c([p],e.prototype,"nextScene",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],StartBtnManager:[function(t,e,o){"use strict";cc._RF.push(e,"0316cSL8QdE+KdySP25pa8o","StartBtnManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nextScene="",e}return r(e,t),e.prototype.start=function(){cc.director.preloadScene(this.nextScene)},e.prototype.switchScene=function(){cc.director.loadScene(this.nextScene)},c([p],e.prototype,"nextScene",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],UIEvt:[function(t,e,o){"use strict";cc._RF.push(e,"24504kB2k5F4LniRDdXL2cz","UIEvt");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.UIEvtIntance=void 0;var i=cc._decorator,a=i.ccclass,p=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var o;return r(e,t),o=e,e.getInstance=function(){return this.instance||(this.instance=new o),this.instance},e.PLAYER_LIFE_INIT="player_life_init",e.PLAYER_LIFE_CHANGE="player_life_change",o=c([a],e)}(cc.EventTarget));o.default=p,o.UIEvtIntance=p.getInstance(),cc._RF.pop()},{}],UserCtrlEvt:[function(t,e,o){"use strict";cc._RF.push(e,"730f27diP9KxpxE4qDtY6PK","UserCtrlEvt");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var o;return r(e,t),o=e,e.prototype.start=function(){},e.getInstance=function(){return this.instance||(this.instance=new o),this.instance},e.TYPE_EVT={leftBtn:"left",rightBtn:"right",jumpBtn:"jump"},o=c([a],e)}(cc.EventTarget));o.default=p,cc._RF.pop()},{}],UserCtrl:[function(t,e,o){"use strict";cc._RF.push(e,"e968fwXfStOIZplrPqVacUB","UserCtrl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./UserCtrlEvt"),a=cc._decorator,p=a.ccclass,s=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.leftBtn=null,e.rightBtn=null,e.jumpBtn=null,e}return r(e,t),e.prototype.onLoad=function(){},e.prototype.initEvt=function(){},e.prototype.start=function(){this.leftBtn.node.on(cc.Node.EventType.TOUCH_START,this.btnTouchStartHandler,this),this.leftBtn.node.on(cc.Node.EventType.TOUCH_END,this.btnTouchEndHandler,this),this.leftBtn.node.on(cc.Node.EventType.TOUCH_CANCEL,this.btnTouchEndHandler,this),this.rightBtn.node.on(cc.Node.EventType.TOUCH_START,this.btnTouchStartHandler,this),this.rightBtn.node.on(cc.Node.EventType.TOUCH_END,this.btnTouchEndHandler,this),this.rightBtn.node.on(cc.Node.EventType.TOUCH_CANCEL,this.btnTouchEndHandler,this),this.jumpBtn.node.on(cc.Node.EventType.TOUCH_START,this.btnTouchStartHandler,this),this.jumpBtn.node.on(cc.Node.EventType.TOUCH_END,this.btnTouchEndHandler,this),this.jumpBtn.node.on(cc.Node.EventType.TOUCH_CANCEL,this.btnTouchEndHandler,this)},e.prototype.btnTouchStartHandler=function(t){var e=t.currentTarget.name;i.default.getInstance().emit(i.default.TYPE_EVT[e],t)},e.prototype.btnTouchEndHandler=function(t){var e=t.currentTarget.name;i.default.getInstance().emit(i.default.TYPE_EVT[e],t)},c([s(cc.Button)],e.prototype,"leftBtn",void 0),c([s(cc.Button)],e.prototype,"rightBtn",void 0),c([s(cc.Button)],e.prototype,"jumpBtn",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./UserCtrlEvt":"UserCtrlEvt"}],use_reversed_rotateBy:[function(t,e){"use strict";cc._RF.push(e,"9ca018z4FJPxYOZY9ZBd4Xj","use_reversed_rotateBy"),cc.RotateBy._reverse=!0,cc._RF.pop()},{}]},{},["Demo","GameScene","Player","GameData","UIEvt","CameraManager","PlayerLifeManager","StartBtnManager","GameStart","SceneInfo","Heart","Enemy","Frog","ItemFeedBack","UserCtrl","UserCtrlEvt","GameUtil","use_reversed_rotateBy"]);