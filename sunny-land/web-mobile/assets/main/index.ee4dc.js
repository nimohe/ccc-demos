window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CameraManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f2b8VzN41KSbvuuFItUlc+", "CameraManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("../data/GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraManager = function(_super) {
      __extends(CameraManager, _super);
      function CameraManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.camera = null;
        return _this;
      }
      CameraManager.prototype.start = function() {
        GameData_1.default.start();
      };
      CameraManager.prototype.update = function(dt) {
        var playerWorldPos = this.player.convertToWorldSpaceAR(cc.v2(0, 0));
        var camLocalPos = this.node.parent.convertToNodeSpaceAR(playerWorldPos);
        camLocalPos.x > 0 && camLocalPos.x < GameData_1.default.tiledMapWidth * GameData_1.default.tiledMapScaleVal - GameData_1.default.width && (this.node.x = camLocalPos.x);
      };
      __decorate([ property(cc.Node) ], CameraManager.prototype, "player", void 0);
      __decorate([ property(cc.Camera) ], CameraManager.prototype, "camera", void 0);
      CameraManager = __decorate([ ccclass ], CameraManager);
      return CameraManager;
    }(cc.Component);
    exports.default = CameraManager;
    cc._RF.pop();
  }, {
    "../data/GameData": "GameData"
  } ],
  Demo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b29cdxd4XJPtKg7CFlZkAzG", "Demo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserCtrlEvt_1 = require("./user-ctrl/UserCtrlEvt");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Demo = function(_super) {
      __extends(Demo, _super);
      function Demo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.text = "hello";
        return _this;
      }
      Demo.prototype.start = function() {
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.leftBtn, this.userLeftHandler, this);
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.rightBtn, this.userLeftHandler, this);
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.jumpBtn, this.userLeftHandler, this);
      };
      Demo.prototype.userLeftHandler = function(evtType) {
        cc.log(evtType);
      };
      __decorate([ property ], Demo.prototype, "text", void 0);
      Demo = __decorate([ ccclass ], Demo);
      return Demo;
    }(cc.Component);
    exports.default = Demo;
    cc._RF.pop();
  }, {
    "./user-ctrl/UserCtrlEvt": "UserCtrlEvt"
  } ],
  Enemy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b19cTecwdIOJgaS/MvtaMQ", "Enemy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Enemy = function(_super) {
      __extends(Enemy, _super);
      function Enemy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.enemyName = "";
        _this.attackVal = 0;
        _this.heathVal = 0;
        return _this;
      }
      Enemy.prototype.start = function() {};
      Enemy.prototype.test = function() {
        cc.log("kill by self");
      };
      Enemy.prototype.death = function() {};
      Enemy.STATE_DEATH = "death";
      __decorate([ property ], Enemy.prototype, "enemyName", void 0);
      __decorate([ property ], Enemy.prototype, "attackVal", void 0);
      __decorate([ property ], Enemy.prototype, "heathVal", void 0);
      Enemy = __decorate([ ccclass ], Enemy);
      return Enemy;
    }(cc.Component);
    exports.default = Enemy;
    cc._RF.pop();
  }, {} ],
  FallState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a056AXp6lJmrTdSVM1Huek", "FallState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FallState = void 0;
    var StateBase_1 = require("./StateBase");
    var FallState = function(_super) {
      __extends(FallState, _super);
      function FallState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FallState.prototype.enter = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        this.player = rest[1];
        this.player.switchAnimation("fall");
      };
      FallState.prototype.execute = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        var input = rest[0];
        this.lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        var scaleX = Math.abs(this.player.node.scaleX);
        if (input[cc.macro.KEY.left] || input[cc.macro.KEY.a]) {
          this.player.node.scaleX = -scaleX;
          this.player.sp.x = -1;
        } else if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d]) {
          this.player.sp.x = 1;
          this.player.node.scaleX = scaleX;
        }
        this.player.sp.x ? this.lv.x = this.player.sp.x * this.player.currSpeed : this.lv.x = 0;
        this.player.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
        0 == this.lv.y && this.stateMachine.transition("idle");
      };
      return FallState;
    }(StateBase_1.StateBase);
    exports.FallState = FallState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  Frog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89c0eHtIYxE94a9BiEWZvEh", "Frog");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enemy_1 = require("./Enemy");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Frog = function(_super) {
      __extends(Frog, _super);
      function Frog() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isMoive = false;
        _this.jumpVal = 300;
        _this.speedVal = 150;
        _this.interval = 4;
        _this.frogJumpSide = "";
        _this.currSide = "";
        return _this;
      }
      Frog_1 = Frog;
      Frog.prototype.onLoad = function() {
        this.animtion = this.node.getComponent(cc.Animation);
      };
      Frog.prototype.start = function() {
        this.attackVal = 1;
        this.frogJumpSide = Frog_1.JUMP_SIDE_RIGHT;
        this.currSide = Frog_1.JUMP_SIDE_LEFT;
        if (!this.isMoive) return;
        cc.director.getScheduler().schedule(this.startJump, this, this.interval);
      };
      Frog.prototype.update = function() {
        if (!this.isMoive) return;
        var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        lv.y > 10 ? this.animtion.play(Frog_1.STATE_JUMP) : lv.y < 0 && this.animtion.play(Frog_1.STATE_FALL);
      };
      Frog.prototype.jump = function() {
        var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        lv.y = this.jumpVal;
        if (this.frogJumpSide == Frog_1.JUMP_SIDE_LEFT) {
          this.node.scaleX = 1;
          lv.x = -this.speedVal;
        } else if (this.frogJumpSide == Frog_1.JUMP_SIDE_RIGHT) {
          this.node.scaleX = -1;
          lv.x = this.speedVal;
        }
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;
      };
      Frog.prototype.startJump = function() {
        this.switchFrogJump();
        this.jump();
      };
      Frog.prototype.onBeginContact = function(contact, self, other) {
        this.animtion.play(Frog_1.STATE_IDLE);
        this.isOnFloor = true;
      };
      Frog.prototype.switchFrogJump = function() {
        this.frogJumpSide = this.frogJumpSide == Frog_1.JUMP_SIDE_LEFT ? Frog_1.JUMP_SIDE_RIGHT : Frog_1.JUMP_SIDE_LEFT;
      };
      Frog.prototype.death = function() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        this.animtion.play(Frog_1.STATE_DEATH);
      };
      Frog.prototype.animationDateOver = function() {
        this.node.destroy();
      };
      var Frog_1;
      Frog.STATE_IDLE = "idle";
      Frog.STATE_DEATH = "death";
      Frog.STATE_JUMP = "jump";
      Frog.STATE_FALL = "fall";
      Frog.JUMP_SIDE_LEFT = "left";
      Frog.JUMP_SIDE_RIGHT = "right";
      __decorate([ property ], Frog.prototype, "isMoive", void 0);
      Frog = Frog_1 = __decorate([ ccclass ], Frog);
      return Frog;
    }(Enemy_1.default);
    exports.default = Frog;
    cc._RF.pop();
  }, {
    "./Enemy": "Enemy"
  } ],
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cc82AMh2FGtoEY1VDbyWnB", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData = function() {
      function GameData() {}
      GameData.start = function() {};
      GameData.tagEnemys = [ 1, 2, 3 ];
      GameData.tagItems = [ 11, 22, 33 ];
      GameData.tagFinalCheckPoint = [ 111 ];
      GameData.TYPE_ITEM_CHERRY = "cherry";
      GameData.TYPE_ITEM_GEM = "gem";
      GameData.EVT_GET_ITEM = "evt_get_item";
      GameData.GAME_OVER = "game_over";
      GameData.GAME_FAIL = "game_fail";
      GameData.ITEM_FEED_BACK_ANIMATION_OVER = "item_feed_back_animation_over";
      GameData.TEST_ANI_OVER_NUMS = 0;
      return GameData;
    }();
    exports.default = GameData;
    cc._RF.pop();
  }, {} ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "GameScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./data/GameData");
    var Player_1 = require("./Player");
    var ItemFeedBack_1 = require("./ui/item/ItemFeedBack");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var collides = [ 76, 26, 28, 30, 80 ];
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tiledMap = null;
        _this.scoreLabel = null;
        _this.player = null;
        _this.joyCtrl = null;
        _this.temp = null;
        _this.currScoreVal = 0;
        _this.test_put_nums = 0;
        return _this;
      }
      GameScene.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        cc.game.canvas.focus();
        GameData_1.default.width = this.node.width;
        GameData_1.default.height = this.node.height;
        GameData_1.default.tiledMapScaleVal = 3;
        this.tempNodeFeddBkArray = new Array();
      };
      GameScene.prototype.isPC = function() {
        var userAgentInfo = navigator.userAgent;
        var Agents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];
        for (var v = 0; v < Agents.length; v++) if (userAgentInfo.indexOf(Agents[v]) > -1) return false;
        return true;
      };
      GameScene.prototype.frogCompleteHandler = function() {};
      GameScene.prototype.start = function() {
        if (this.temp) var tempWidget = this.temp.getComponent(cc.Widget);
        cc.view.enableAutoFullScreen(true);
        this.initMapNode(this.tiledMap);
        GameData_1.default.tiledMapWidth = this.tiledMap.width;
        GameData_1.default.tiledMapHeight = this.tiledMap.height;
        this.scoreLabel.string = "\u5206\u6570\uff1a" + this.currScoreVal;
        this.playerScript = this.player.getComponent(Player_1.default);
        this.playerScript.node.on(GameData_1.default.EVT_GET_ITEM, this.playerScriptHandler, this);
        this.playerScript.node.once(GameData_1.default.GAME_OVER, this.gameOverHandler, this);
        this.playerScript.node.once(GameData_1.default.GAME_FAIL, this.gameFailHandler, this);
      };
      GameScene.prototype.gameFailHandler = function() {
        cc.director.loadScene("gameFail");
      };
      GameScene.prototype.gameOverHandler = function() {
        cc.director.loadScene("gameWin");
      };
      GameScene.prototype.playerScriptHandler = function(scoreVal, other, tempItemFeedbk) {
        this.currScoreVal += scoreVal;
        this.scoreLabel.string = "\u5206\u6570\uff1a" + this.currScoreVal;
        var worldPos = this.convertPosOtherToSelf(other, this.node);
        var itemFeedback_script;
        this.tempNodeFeddBkArray.push(tempItemFeedbk);
        var r = Math.random();
        itemFeedback_script = tempItemFeedbk.getComponent(ItemFeedBack_1.default);
        itemFeedback_script.playAnimation();
        this.node.addChild(tempItemFeedbk);
        tempItemFeedbk.x = worldPos.x;
        tempItemFeedbk.y = worldPos.y;
        other.destroy();
      };
      GameScene.prototype.itemFeedbackAnimationOverHandler = function() {
        this.test_put_nums++;
        var temp = this.tempNodeFeddBkArray[this.tempNodeFeddBkArray.length - 1];
        this.playerScript.putItemToPool(temp);
        this.tempNodeFeddBkArray.pop();
      };
      GameScene.prototype.convertPosOtherToSelf = function(other, self) {
        var worldPos = other.convertToWorldSpaceAR(cc.v2(0, 0));
        var resultPoint = self.convertToNodeSpaceAR(worldPos);
        return resultPoint;
      };
      GameScene.prototype.update = function(dt) {};
      GameScene.prototype.initMapNode = function(mapNode) {
        var tileMap = mapNode.getComponent(cc.TiledMap);
        var tiledSize = tileMap.getTileSize();
        var layer = tileMap.getLayer("wall");
        var layerSize = layer.getLayerSize();
        for (var i = 0; i < layerSize.width; i++) for (var j = 0; j < layerSize.height; j++) {
          var tiled = layer.getTiledTileAt(i, j, true);
          if (0 != tiled.gid) {
            tiled.node.group = "wall";
            var body = tiled.node.addComponent(cc.RigidBody);
            body.awakeOnLoad = body.fixedRotation = true;
            body.allowSleep = true;
            body.type = cc.RigidBodyType.Static;
            var collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
            collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2);
            collider.size = tiledSize;
            collider.friction = .2;
            collider.density = 1;
            collider.restitution = .01;
            collider.apply();
          }
        }
      };
      __decorate([ property(cc.Node) ], GameScene.prototype, "tiledMap", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "scoreLabel", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "player", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "joyCtrl", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "temp", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "./Player": "Player",
    "./data/GameData": "GameData",
    "./ui/item/ItemFeedBack": "ItemFeedBack"
  } ],
  GameStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01020WddlNBurSp70Jbx4Vb", "GameStart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameStart = function(_super) {
      __extends(GameStart, _super);
      function GameStart() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startBtn = null;
        _this.titleScreenNd = null;
        return _this;
      }
      GameStart.prototype.onLoad = function() {
        this.startBtn.node.on(cc.Node.EventType.TOUCH_END, this.startBtnTouchEndHandler, this);
      };
      GameStart.prototype.startBtnTouchEndHandler = function() {
        cc.director.loadScene("info");
      };
      GameStart.prototype.start = function() {
        cc.director.preloadScene("info");
        cc.tween(this.startBtn.node).repeatForever(cc.tween().to(.6, {
          opacity: 255
        }).to(.6, {
          opacity: 0
        })).start();
        cc.tween(this.titleScreenNd).repeatForever(cc.tween().to(1.2, {
          scale: 3.1
        }).to(1.2, {
          scale: 3
        })).start();
      };
      GameStart.prototype.onDestroy = function() {};
      __decorate([ property(cc.Button) ], GameStart.prototype, "startBtn", void 0);
      __decorate([ property(cc.Node) ], GameStart.prototype, "titleScreenNd", void 0);
      GameStart = __decorate([ ccclass ], GameStart);
      return GameStart;
    }(cc.Component);
    exports.default = GameStart;
    cc._RF.pop();
  }, {} ],
  GameUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44819uj42dBv6wgg1VNkywR", "GameUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.COLOR_LOG = void 0;
    var COLOR_LOG;
    (function(COLOR_LOG) {
      COLOR_LOG["red"] = "#0f0";
      COLOR_LOG["player"] = "#eeb07e";
    })(COLOR_LOG = exports.COLOR_LOG || (exports.COLOR_LOG = {}));
    var GameUtil = function() {
      function GameUtil() {}
      GameUtil.log = function(content, color) {
        void 0 === color && (color = COLOR_LOG.red);
        if (!GameUtil.logIsOn) return;
        var colorStr;
        colorStr = "color:" + color + ";";
        console.log("%c " + content, colorStr + "font-size:20px;");
      };
      GameUtil.logIsOn = true;
      return GameUtil;
    }();
    exports.default = GameUtil;
    cc._RF.pop();
  }, {} ],
  Heart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf54bSf/mBD1ZKzBGnP6T08", "Heart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var STATE_HEART;
    (function(STATE_HEART) {
      STATE_HEART[STATE_HEART["Full"] = 2] = "Full";
      STATE_HEART[STATE_HEART["Half"] = 1] = "Half";
      STATE_HEART[STATE_HEART["Empty"] = 0] = "Empty";
    })(STATE_HEART || (STATE_HEART = {}));
    var Heart = function(_super) {
      __extends(Heart, _super);
      function Heart() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.stateVal = STATE_HEART.Full;
        _this.spFrames = [];
        return _this;
      }
      Heart.prototype.onLoad = function() {
        this.spComp = this.node.getComponent(cc.Sprite);
      };
      Heart.prototype.start = function() {};
      Heart.prototype.setState = function(val) {
        this.spFrames && (this.spComp.spriteFrame = this.spFrames[val]);
      };
      Heart.HEART_VAL = 2;
      __decorate([ property({
        type: cc.Enum(STATE_HEART)
      }) ], Heart.prototype, "stateVal", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Heart.prototype, "spFrames", void 0);
      Heart = __decorate([ ccclass ], Heart);
      return Heart;
    }(cc.Component);
    exports.default = Heart;
    cc._RF.pop();
  }, {} ],
  HurtState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63f5d1N1k1Fd5ZxVVJ47LYt", "HurtState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HurtState = void 0;
    var StateBase_1 = require("./StateBase");
    var HurtState = function(_super) {
      __extends(HurtState, _super);
      function HurtState() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.recoverTime = 600;
        return _this;
      }
      HurtState.prototype.enter = function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this.player = args[1];
        this.player.switchAnimation("hurt");
        this.player.hurt();
        this.player.node.runAction(cc.blink(this.recoverTime / 1e3, 4));
        var id = setTimeout(function() {
          cc.log("\u53d6\u6d88  \u53d7\u4f24\u72b6\u6001...");
          _this.stateMachine.transition("idle");
          clearTimeout(id);
        }, this.recoverTime);
      };
      HurtState.prototype.execute = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var input = args[0];
        if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d] || input[cc.macro.KEY.left] || input[cc.macro.KEY.a] || input[cc.macro.KEY.space]) return;
      };
      return HurtState;
    }(StateBase_1.StateBase);
    exports.HurtState = HurtState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  IdleState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77d6fGVBvxCdbCXZ5ZHyg9t", "IdleState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IdleState = void 0;
    var StateBase_1 = require("./StateBase");
    var IdleState = function(_super) {
      __extends(IdleState, _super);
      function IdleState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      IdleState.prototype.enter = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        this.player = rest[1];
        this.player.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(0, 0);
        this.player.switchAnimation("idle");
      };
      IdleState.prototype.execute = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        var input = rest[0];
        this.player = rest[1];
        if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d] || input[cc.macro.KEY.left] || input[cc.macro.KEY.a]) {
          this.stateMachine.transition("move");
          return;
        }
        var lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        input[cc.macro.KEY.space] && 0 == lv.y && this.stateMachine.transition("jump");
      };
      return IdleState;
    }(StateBase_1.StateBase);
    exports.IdleState = IdleState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  ItemFeedBack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0db91KeaFhNgr1tODbYTmwD", "ItemFeedBack");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("../../data/GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemFeedBack = function(_super) {
      __extends(ItemFeedBack, _super);
      function ItemFeedBack() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.id = -1;
        return _this;
      }
      ItemFeedBack.prototype.onLoad = function() {};
      ItemFeedBack.prototype.playAnimation = function() {
        this.ani = this.node.getComponent(cc.Animation);
        this.ani.setCurrentTime(0);
        this.aniState = this.ani.play();
        this.ani.sample(this.ani.name);
      };
      ItemFeedBack.prototype.aniStopHandler = function() {};
      ItemFeedBack.prototype.animationOver = function() {
        GameData_1.default.TEST_ANI_OVER_NUMS++;
        this.node.emit(GameData_1.default.ITEM_FEED_BACK_ANIMATION_OVER);
      };
      ItemFeedBack.prototype.reuse = function() {
        cc.log("reuse");
      };
      ItemFeedBack.prototype.unuse = function() {
        cc.log("unuse");
      };
      ItemFeedBack = __decorate([ ccclass ], ItemFeedBack);
      return ItemFeedBack;
    }(cc.Component);
    exports.default = ItemFeedBack;
    cc._RF.pop();
  }, {
    "../../data/GameData": "GameData"
  } ],
  JumpState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40f10RHmiJCZILaUvmWt/er", "JumpState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JumpState = void 0;
    var StateBase_1 = require("./StateBase");
    var JumpState = function(_super) {
      __extends(JumpState, _super);
      function JumpState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JumpState.prototype.enter = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        var input = rest[0];
        this.player = rest[1];
        this.lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        this.lv.y = this.player.jumpVal;
        if (this.lv.y > 3) {
          this.player.sp.x = 0;
          this.player.switchAnimation("jump");
        }
        this.player.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
      };
      JumpState.prototype.execute = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        this.player = rest[1];
        var input = rest[0];
        this.lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        this.lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        var scaleX = Math.abs(this.player.node.scaleX);
        if (input[cc.macro.KEY.left] || input[cc.macro.KEY.a]) {
          this.player.node.scaleX = -scaleX;
          this.player.sp.x = -1;
        } else if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d]) {
          this.player.sp.x = 1;
          this.player.node.scaleX = scaleX;
        }
        this.player.sp.x ? this.lv.x = this.player.sp.x * this.player.currSpeed : this.lv.x = 0;
        this.player.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
        this.lv.y < 0 && this.stateMachine.transition("fall");
      };
      return JumpState;
    }(StateBase_1.StateBase);
    exports.JumpState = JumpState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  MoveState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bc54iyr9RL3bsKqxP4KUKI", "MoveState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MoveState = void 0;
    var StateBase_1 = require("./StateBase");
    var MoveState = function(_super) {
      __extends(MoveState, _super);
      function MoveState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MoveState.prototype.enter = function() {};
      MoveState.prototype.execute = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
        var input = rest[0];
        this.player = rest[1];
        if (!(input[cc.macro.KEY.right] || input[cc.macro.KEY.d] || input[cc.macro.KEY.left] || input[cc.macro.KEY.a])) {
          this.stateMachine.transition("idle");
          return;
        }
        var scaleX = Math.abs(this.player.node.scaleX);
        var lv = this.player.node.getComponent(cc.RigidBody).linearVelocity;
        if (input[cc.macro.KEY.left] || input[cc.macro.KEY.a]) {
          this.player.sp.x = -1;
          this.player.node.scaleX = -scaleX;
          this.player.switchAnimation("run");
        } else if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d]) {
          this.player.sp.x = 1;
          this.player.node.scaleX = scaleX;
          this.player.switchAnimation("run");
        } else this.stateMachine.transition("idle");
        input[cc.macro.KEY.space] && 0 == lv.y && this.stateMachine.transition("jump");
        this.player.sp.x ? lv.x = this.player.sp.x * this.player.currSpeed : lv.x = 0;
        this.player.node.getComponent(cc.RigidBody).linearVelocity = lv;
      };
      return MoveState;
    }(StateBase_1.StateBase);
    exports.MoveState = MoveState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  PlayerLifeManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8c56RtvapOr7LriLW6CSMC", "PlayerLifeManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Heart_1 = require("../ui/Heart");
    var UIEvt_1 = require("../evt/UIEvt");
    var Player_1 = require("../Player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerLifeManager = function(_super) {
      __extends(PlayerLifeManager, _super);
      function PlayerLifeManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.heartNds = [];
        _this.lifeNum = 0;
        return _this;
      }
      PlayerLifeManager.prototype.onLoad = function() {
        UIEvt_1.default.getInstance().once(UIEvt_1.default.PLAYER_LIFE_INIT, this.playerLifeHandler, this);
        UIEvt_1.default.getInstance().on(UIEvt_1.default.PLAYER_LIFE_CHANGE, this.playerLifeHandler, this);
      };
      PlayerLifeManager.prototype.playerLifeHandler = function(val) {
        this.lifeVal = val;
      };
      Object.defineProperty(PlayerLifeManager.prototype, "lifeVal", {
        get: function() {
          return this.lifeNum;
        },
        set: function(v) {
          cc.log("life:", v);
          v > Player_1.default.LIFE_MAX && (v = Player_1.default.LIFE_MAX);
          this.lifeNum = v;
          this.ctrlLifeUI(v);
        },
        enumerable: false,
        configurable: true
      });
      PlayerLifeManager.prototype.ctrlLifeUI = function(val) {
        var fullHeartNum;
        var lifeArr = [ 0, 0, 0 ];
        fullHeartNum = Math.floor(val / 2);
        for (var i = 0; i < 3; i++) if (i < fullHeartNum) {
          lifeArr[i] = Heart_1.default.HEART_VAL;
          val -= Heart_1.default.HEART_VAL;
        } else if (val > 0) {
          lifeArr[i] = val;
          val = 0;
        } else 0 == val && (lifeArr[i] = 0);
        cc.log("lifeArr:", lifeArr);
        this.heartNds.forEach(function(nd, id) {
          var heartScript = nd.getComponent(Heart_1.default);
          cc.log(lifeArr[id]);
          heartScript && heartScript.setState(lifeArr[id]);
        });
      };
      __decorate([ property([ cc.Node ]) ], PlayerLifeManager.prototype, "heartNds", void 0);
      PlayerLifeManager = __decorate([ ccclass ], PlayerLifeManager);
      return PlayerLifeManager;
    }(cc.Component);
    exports.default = PlayerLifeManager;
    cc._RF.pop();
  }, {
    "../Player": "Player",
    "../evt/UIEvt": "UIEvt",
    "../ui/Heart": "Heart"
  } ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6418Qu7aRKlbiDcDInEIhd", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./data/GameData");
    var Enemy_1 = require("./ui/enemy/Enemy");
    var UserCtrlEvt_1 = require("./user-ctrl/UserCtrlEvt");
    var ItemFeedBack_1 = require("./ui/item/ItemFeedBack");
    var IdleState_1 = require("./fsm/IdleState");
    var MoveState_1 = require("./fsm/MoveState");
    var StateMachine_1 = require("./fsm/StateMachine");
    var JumpState_1 = require("./fsm/JumpState");
    var FallState_1 = require("./fsm/FallState");
    var HurtState_1 = require("./fsm/HurtState");
    var UIEvt_1 = require("./evt/UIEvt");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var input = {};
    var State = {
      Stand: "stand",
      Attack: "attack"
    };
    var Animation_IDLE = "idle";
    var Animation_RUN = "run";
    var Animation_JUMP = "jump";
    var Animation_FALL = "fall";
    var Animation_HURT = "hurt";
    var Animation_ATTACK_1 = "attack_1";
    var Animation_ATTACK_2 = "attack_2";
    var Animation_ATTACK_3 = "attack_3";
    var AllPlayerState;
    (function(AllPlayerState) {
      AllPlayerState["idle"] = "idle";
      AllPlayerState["move"] = "move";
      AllPlayerState["jump"] = "jump";
      AllPlayerState["fall"] = "fall";
    })(AllPlayerState || (AllPlayerState = {}));
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.itemFeedbackInstance = null;
        _this.liveNum = 6;
        _this.currSpeed = 300;
        _this.jumpVal = 500;
        _this.sp = new cc.Vec2(0, 0);
        return _this;
      }
      Player.prototype.onEnable = function() {
        input = {};
      };
      Player.prototype.onLoad = function() {
        this.heroState = State.Stand;
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.rightBtn, this.rightBtnTouchStartHandler, this);
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.leftBtn, this.leftBtnTouchStartHandler, this);
        UserCtrlEvt_1.default.getInstance().on(UserCtrlEvt_1.default.TYPE_EVT.jumpBtn, this.jumpBtnTouchStartHandler, this);
        this.createPoolItemFeedback();
      };
      Player.prototype.offCtrlHandler = function() {
        input = {};
        UserCtrlEvt_1.default.getInstance().off(UserCtrlEvt_1.default.TYPE_EVT.rightBtn, this.rightBtnTouchStartHandler, this);
        UserCtrlEvt_1.default.getInstance().off(UserCtrlEvt_1.default.TYPE_EVT.leftBtn, this.leftBtnTouchStartHandler, this);
        UserCtrlEvt_1.default.getInstance().off(UserCtrlEvt_1.default.TYPE_EVT.jumpBtn, this.jumpBtnTouchStartHandler, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyDownHandler);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyUpHandler);
      };
      Player.prototype.start = function() {
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDownHandler);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUpHandler);
        this.isHurt = false;
        UIEvt_1.default.getInstance().emit(UIEvt_1.default.PLAYER_LIFE_INIT, this.liveNum);
        this.stateMachine = new StateMachine_1.StateMachine(AllPlayerState.idle, {
          idle: new IdleState_1.IdleState(),
          move: new MoveState_1.MoveState(),
          jump: new JumpState_1.JumpState(),
          fall: new FallState_1.FallState(),
          hurt: new HurtState_1.HurtState()
        }, input, this);
      };
      Player.prototype.jumpBtnTouchStartHandler = function(evt) {
        var currName = evt.currentTarget.name;
        var evtType = evt.type;
        if (evtType == cc.Node.EventType.TOUCH_START) {
          var keyCode = cc.macro.KEY.space;
          input[keyCode] = 1;
        } else if (evtType == cc.Node.EventType.TOUCH_END || evtType == cc.Node.EventType.TOUCH_CANCEL) {
          var keyCode = cc.macro.KEY.space;
          input[keyCode] = 0;
        }
      };
      Player.prototype.leftBtnTouchStartHandler = function(evt) {
        var currName = evt.currentTarget.name;
        var evtType = evt.type;
        if (evtType == cc.Node.EventType.TOUCH_START) {
          var keyCode = cc.macro.KEY.left;
          input[keyCode] = 1;
        } else if (evtType == cc.Node.EventType.TOUCH_END || evtType == cc.Node.EventType.TOUCH_CANCEL) {
          var keyCode = cc.macro.KEY.left;
          input[keyCode] = 0;
        }
      };
      Player.prototype.rightBtnTouchStartHandler = function(evt) {
        var currName = evt.currentTarget.name;
        var evtType = evt.type;
        if (evtType == cc.Node.EventType.TOUCH_START) {
          var keyCode = cc.macro.KEY.right;
          input[keyCode] = 1;
        } else if (evtType == cc.Node.EventType.TOUCH_END || evtType == cc.Node.EventType.TOUCH_CANCEL) {
          var keyCode = cc.macro.KEY.right;
          input[keyCode] = 0;
        }
      };
      Player.prototype.createPoolItemFeedback = function() {
        this.poolItemFeedback = new cc.NodePool();
        var initCount = 5;
        for (var i = 0; i < initCount; ++i) {
          var enemy = this.createItemFeedback(i + 1);
          this.poolItemFeedback.put(enemy);
        }
      };
      Player.prototype.createItemFeedback = function(id) {
        void 0 === id && (id = -1);
        var enemy = cc.instantiate(this.itemFeedbackInstance);
        enemy.setScale(3);
        enemy.setAnchorPoint(.5, .5);
        var enemy_script_itemFeedBack = enemy.getComponent(ItemFeedBack_1.default);
        enemy_script_itemFeedBack.id = id;
        return enemy;
      };
      Player.prototype.hurtFinshed = function() {};
      Player.prototype.animationFinishedHandler = function(type, state) {};
      Player.prototype.keyDownHandler = function(e) {
        var keyCode = e.keyCode;
        input[keyCode] = 1;
      };
      Player.prototype.keyUpHandler = function(e) {
        var keyCode = e.keyCode;
        input[keyCode] = 0;
      };
      Player.prototype.update = function(dt) {
        this.stateMachine.step();
      };
      Player.prototype.closeHurt = function() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        this.isHurt = false;
      };
      Player.prototype.switchAnimation = function(state) {
        if (this.currAnimationState == state) return;
        this.currAnimationState = state;
        this.animation.play(this.currAnimationState);
      };
      Player.prototype.move = function() {
        if (this.isHurt) return;
        var scaleX = Math.abs(this.node.scaleX);
        var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        if (this.heroState == State.Stand) {
          if (input[cc.macro.KEY.left] || input[cc.macro.KEY.a]) {
            this.sp.x = -1;
            this.node.scaleX = -scaleX;
            this.switchAnimation(Animation_RUN);
          } else if (input[cc.macro.KEY.right] || input[cc.macro.KEY.d]) {
            this.sp.x = 1;
            this.node.scaleX = scaleX;
            this.switchAnimation(Animation_RUN);
          } else {
            this.sp.x = 0;
            this.switchAnimation(Animation_IDLE);
          }
          input[cc.macro.KEY.space] && 0 == lv.y && (lv.y = this.jumpVal);
        }
        this.sp.x ? lv.x = this.sp.x * this.currSpeed : lv.x = 0;
        lv.y < 0 ? this.switchAnimation(Animation_FALL) : lv.y > 3 && this.switchAnimation(Animation_JUMP);
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;
      };
      Player.prototype.jump = function() {
        var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        lv.y = this.jumpVal;
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;
      };
      Player.prototype.hurt = function() {
        var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        lv.x = this.node.scaleX > 0 ? -200 : 200;
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;
      };
      Player.prototype.onCollisionEnter = function(other, self) {
        var _this = this;
        var isEnemy;
        var isItem;
        var isFinalCheckPoint;
        isEnemy = GameData_1.default.tagEnemys.indexOf(other.tag) >= 0;
        if ("fall" == this.stateMachine.currState) {
          if (isEnemy) {
            var enemyScript = other.getComponent(Enemy_1.default);
            if (enemyScript) {
              enemyScript.death();
              enemyScript.test();
            }
            this.jump();
          }
        } else if (isEnemy) {
          this.stateMachine.transition("hurt");
          this.isHurt = true;
          var enemyScript = other.getComponent(Enemy_1.default);
          if (enemyScript) {
            this.liveNum -= enemyScript.attackVal;
            cc.log("enemyScript attackVal:", enemyScript.attackVal, this.liveNum);
            UIEvt_1.UIEvtIntance.emit(UIEvt_1.default.PLAYER_LIFE_CHANGE, this.liveNum);
          }
          if (this.liveNum <= 0) {
            this.isGameOver = true;
            this.offCtrlHandler();
            this.scheduleOnce(function() {
              cc.log("game fail");
              _this.node.emit(GameData_1.default.GAME_FAIL);
            }, 1);
          } else cc.director.getScheduler().schedule(this.closeHurt, this, .5);
        }
        isItem = GameData_1.default.tagItems.indexOf(other.tag) >= 0;
        isFinalCheckPoint = GameData_1.default.tagFinalCheckPoint.indexOf(other.tag) >= 0;
        if (isItem) {
          var tempItemFeedbk = void 0;
          if (this.poolItemFeedback.size() > 0) tempItemFeedbk = this.poolItemFeedback.get(); else {
            console.log("%c pool over", "color:#00f;");
            tempItemFeedbk = cc.instantiate(this.createItemFeedback());
          }
          this.node.emit(GameData_1.default.EVT_GET_ITEM, 1, other.node, tempItemFeedbk);
        } else if (isFinalCheckPoint) {
          other.node.destroy();
          this.isGameOver = true;
          this.stateMachine.transition("idle");
          this.offCtrlHandler();
          cc.log("game over");
          this.node.emit(GameData_1.default.GAME_OVER);
        }
      };
      Player.prototype.putItemToPool = function(node) {
        this.poolItemFeedback.put(node);
      };
      Player.prototype.convertPosOtherToSelf = function(other, self) {
        var worldPos = other.convertToWorldSpace(cc.v2(0, 0));
        var resultPoint = self.convertToNodeSpaceAR(worldPos);
        return resultPoint;
      };
      __decorate([ property(cc.Label) ], Player.prototype, "label", void 0);
      __decorate([ property ], Player.prototype, "text", void 0);
      __decorate([ property(cc.Prefab) ], Player.prototype, "itemFeedbackInstance", void 0);
      __decorate([ property(cc.Integer) ], Player.prototype, "liveNum", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "./data/GameData": "GameData",
    "./evt/UIEvt": "UIEvt",
    "./fsm/FallState": "FallState",
    "./fsm/HurtState": "HurtState",
    "./fsm/IdleState": "IdleState",
    "./fsm/JumpState": "JumpState",
    "./fsm/MoveState": "MoveState",
    "./fsm/StateMachine": "StateMachine",
    "./ui/enemy/Enemy": "Enemy",
    "./ui/item/ItemFeedBack": "ItemFeedBack",
    "./user-ctrl/UserCtrlEvt": "UserCtrlEvt"
  } ],
  SceneInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e12a4aLZrlClqg7BUZ4jgTc", "SceneInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneInfo = function(_super) {
      __extends(SceneInfo, _super);
      function SceneInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "";
        return _this;
      }
      SceneInfo.prototype.start = function() {
        var _this = this;
        cc.director.preloadScene(this.nextScene);
        this.scheduleOnce(function() {
          cc.director.loadScene(_this.nextScene);
        }, 1);
      };
      __decorate([ property ], SceneInfo.prototype, "nextScene", void 0);
      SceneInfo = __decorate([ ccclass ], SceneInfo);
      return SceneInfo;
    }(cc.Component);
    exports.default = SceneInfo;
    cc._RF.pop();
  }, {} ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e53ac0/GtlFm63nLeV+nuHh", "SoundManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SoundManager = function(_super) {
      __extends(SoundManager, _super);
      function SoundManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgmAc = null;
        _this.sfxArr = [];
        return _this;
      }
      SoundManager.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        this.sfx = new cc.AudioClip();
        this.setBgm();
      };
      SoundManager.prototype.setBgm = function() {
        this.bgmAudioSr = new cc.AudioSource();
        this.bgmAudioSr.clip = this.bgmAc;
        this.bgmAudioSr.playOnLoad = true;
        this.bgmAudioSr.loop = true;
        this.bgmAudioSr.volume = 1;
        this.bgmAudioSr.play();
      };
      SoundManager.prototype.pauseBgm = function() {
        this.bgmAudioSr.pause();
      };
      SoundManager.prototype.start = function() {};
      SoundManager.prototype.playBgm = function() {
        cc.audioEngine.play(this.bgmAc, true, 1);
      };
      SoundManager.prototype.playSfx = function(sfxName) {
        var currAc;
        this.sfxArr.forEach(function(tempSfx) {
          tempSfx.name == sfxName && (currAc = tempSfx);
        });
        cc.audioEngine.playEffect(currAc, false);
      };
      SoundManager.sfx_jump = "jump1";
      __decorate([ property(cc.AudioClip) ], SoundManager.prototype, "bgmAc", void 0);
      __decorate([ property([ cc.AudioClip ]) ], SoundManager.prototype, "sfxArr", void 0);
      SoundManager = __decorate([ ccclass ], SoundManager);
      return SoundManager;
    }(cc.Component);
    exports.default = SoundManager;
    cc._RF.pop();
  }, {} ],
  StartBtnManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0316cSL8QdE+KdySP25pa8o", "StartBtnManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StartBtnManager = function(_super) {
      __extends(StartBtnManager, _super);
      function StartBtnManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "";
        return _this;
      }
      StartBtnManager.prototype.start = function() {
        cc.director.preloadScene(this.nextScene);
      };
      StartBtnManager.prototype.switchScene = function() {
        cc.director.loadScene(this.nextScene);
      };
      __decorate([ property ], StartBtnManager.prototype, "nextScene", void 0);
      StartBtnManager = __decorate([ ccclass ], StartBtnManager);
      return StartBtnManager;
    }(cc.Component);
    exports.default = StartBtnManager;
    cc._RF.pop();
  }, {} ],
  StateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a28bbz+IK9MsaTtFAgqLZpG", "StateBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StateBase = void 0;
    var StateBase = function() {
      function StateBase() {}
      StateBase.prototype.enter = function() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) rest[_i] = arguments[_i];
      };
      StateBase.prototype.execute = function() {};
      return StateBase;
    }();
    exports.StateBase = StateBase;
    cc._RF.pop();
  }, {} ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae79054CrRM0bMSP55NS2EC", "StateMachine");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StateMachine = void 0;
    var StateMachine = function() {
      function StateMachine(initialState, possibleStates) {
        var stateArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) stateArgs[_i - 2] = arguments[_i];
        this.stateArgs = [];
        this.currState = null;
        this.initialState = initialState;
        this.possibleStates = possibleStates;
        this.stateArgs = stateArgs;
        for (var _a = 0, _b = Object.values(this.possibleStates); _a < _b.length; _a++) {
          var state = _b[_a];
          state["stateMachine"] = this;
        }
      }
      StateMachine.prototype.step = function() {
        var _a, _b;
        if (null === this.currState) {
          this.currState = this.initialState;
          (_a = this.possibleStates[this.currState]).enter.apply(_a, this.stateArgs);
        }
        (_b = this.possibleStates[this.currState]).execute.apply(_b, this.stateArgs);
      };
      StateMachine.prototype.transition = function(newState) {
        var _a;
        var enterArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) enterArgs[_i - 1] = arguments[_i];
        cc.log("StateMachine --", newState);
        this.currState = newState;
        (_a = this.possibleStates[this.currState]).enter.apply(_a, __spreadArrays(this.stateArgs, enterArgs));
      };
      return StateMachine;
    }();
    exports.StateMachine = StateMachine;
    cc._RF.pop();
  }, {} ],
  UIEvt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24504kB2k5F4LniRDdXL2cz", "UIEvt");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIEvtIntance = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIEvt = function(_super) {
      __extends(UIEvt, _super);
      function UIEvt() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UIEvt_1 = UIEvt;
      UIEvt.getInstance = function() {
        this.instance || (this.instance = new UIEvt_1());
        return this.instance;
      };
      var UIEvt_1;
      UIEvt.PLAYER_LIFE_INIT = "player_life_init";
      UIEvt.PLAYER_LIFE_CHANGE = "player_life_change";
      UIEvt = UIEvt_1 = __decorate([ ccclass ], UIEvt);
      return UIEvt;
    }(cc.EventTarget);
    exports.default = UIEvt;
    exports.UIEvtIntance = UIEvt.getInstance();
    cc._RF.pop();
  }, {} ],
  UserCtrlEvt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "730f27diP9KxpxE4qDtY6PK", "UserCtrlEvt");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UserCtrlEvt = function(_super) {
      __extends(UserCtrlEvt, _super);
      function UserCtrlEvt() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UserCtrlEvt_1 = UserCtrlEvt;
      UserCtrlEvt.prototype.start = function() {};
      UserCtrlEvt.getInstance = function() {
        this.instance || (this.instance = new UserCtrlEvt_1());
        return this.instance;
      };
      var UserCtrlEvt_1;
      UserCtrlEvt.TYPE_EVT = {
        leftBtn: "left",
        rightBtn: "right",
        jumpBtn: "jump"
      };
      UserCtrlEvt = UserCtrlEvt_1 = __decorate([ ccclass ], UserCtrlEvt);
      return UserCtrlEvt;
    }(cc.EventTarget);
    exports.default = UserCtrlEvt;
    cc._RF.pop();
  }, {} ],
  UserCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e968fwXfStOIZplrPqVacUB", "UserCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserCtrlEvt_1 = require("./UserCtrlEvt");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UserCtrl = function(_super) {
      __extends(UserCtrl, _super);
      function UserCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftBtn = null;
        _this.rightBtn = null;
        _this.jumpBtn = null;
        return _this;
      }
      UserCtrl.prototype.onLoad = function() {};
      UserCtrl.prototype.initEvt = function() {};
      UserCtrl.prototype.start = function() {
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START, this.btnTouchStartHandler, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_END, this.btnTouchEndHandler, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.btnTouchEndHandler, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START, this.btnTouchStartHandler, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_END, this.btnTouchEndHandler, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.btnTouchEndHandler, this);
        this.jumpBtn.node.on(cc.Node.EventType.TOUCH_START, this.btnTouchStartHandler, this);
        this.jumpBtn.node.on(cc.Node.EventType.TOUCH_END, this.btnTouchEndHandler, this);
        this.jumpBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.btnTouchEndHandler, this);
      };
      UserCtrl.prototype.btnTouchStartHandler = function(evt) {
        var currName = evt.currentTarget.name;
        UserCtrlEvt_1.default.getInstance().emit(UserCtrlEvt_1.default.TYPE_EVT[currName], evt);
      };
      UserCtrl.prototype.btnTouchEndHandler = function(evt) {
        var currName = evt.currentTarget.name;
        UserCtrlEvt_1.default.getInstance().emit(UserCtrlEvt_1.default.TYPE_EVT[currName], evt);
      };
      __decorate([ property(cc.Button) ], UserCtrl.prototype, "leftBtn", void 0);
      __decorate([ property(cc.Button) ], UserCtrl.prototype, "rightBtn", void 0);
      __decorate([ property(cc.Button) ], UserCtrl.prototype, "jumpBtn", void 0);
      UserCtrl = __decorate([ ccclass ], UserCtrl);
      return UserCtrl;
    }(cc.Component);
    exports.default = UserCtrl;
    cc._RF.pop();
  }, {
    "./UserCtrlEvt": "UserCtrlEvt"
  } ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ca018z4FJPxYOZY9ZBd4Xj", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Demo", "GameScene", "Player", "GameData", "UIEvt", "FallState", "HurtState", "IdleState", "JumpState", "MoveState", "StateBase", "StateMachine", "CameraManager", "PlayerLifeManager", "StartBtnManager", "GameStart", "SceneInfo", "Heart", "Enemy", "Frog", "ItemFeedBack", "UserCtrl", "UserCtrlEvt", "GameUtil", "SoundManager", "use_reversed_rotateBy" ]);