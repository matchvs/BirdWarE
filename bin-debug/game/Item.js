var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Item.prototype, "ItemType", {
        get: function () {
            return this.type;
        },
        set: function (val) {
            this.type = val;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Item.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Item;
}(eui.Component));
__reflect(Item.prototype, "Item", ["eui.UIComponent", "egret.DisplayObject"]);
var ItemType;
(function (ItemType) {
    ItemType[ItemType["shield"] = 0] = "shield";
    ItemType[ItemType["track"] = 1] = "track";
})(ItemType || (ItemType = {}));
//# sourceMappingURL=Item.js.map