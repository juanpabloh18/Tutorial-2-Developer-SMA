"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
class Avatar {
    horizontalPosition;
    constructor() {
        this.horizontalPosition = 0;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    moveLeft() {
        this.horizontalPosition--;
    }
    moveRight() {
        this.horizontalPosition++;
    }
}
exports.Avatar = Avatar;
