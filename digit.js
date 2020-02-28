class Digit {
  constructor(num, placement) {
    this.update(num);
    this.placement = placement;
    let shiftGap = this.getShift();
    this.x = (shiftGap + round(shiftGap / 5.9)) * gap + this.placement * w + ceil(this.placement / 2) * 3 * gap;
    this.y = height / 2 - 2 * gap - lineLength;
  }

  getShift() {
    let shiftGap = this.placement;
    if (this.placement >= 0) {
      shiftGap++;
    }
    return shiftGap;
  }

  update(newNum) {
    this.num = newNum;
    this.lines = new Array(7);
    this.lines.fill(true);
    this.makeArray();
  }

  makeArray() {
    switch (this.num) {
      case '0':
        this.lines[3] = false;
        break;
      case '1':
        this.lines[0] = false;
        this.lines[1] = false;
        this.lines[3] = false;
        this.lines[4] = false;
        this.lines[6] = false;
        break;
      case '2':
        this.lines[1] = false;
        this.lines[5] = false;
        break;
      case '3':
        this.lines[1] = false;
        this.lines[4] = false;
        break;
      case '4':
        this.lines[0] = false;
        this.lines[4] = false;
        this.lines[6] = false;
        break;
      case '5':
        this.lines[2] = false;
        this.lines[4] = false;
        break;
      case '6':
        this.lines[2] = false;
        break;
      case '7':
        this.lines[1] = false;
        this.lines[3] = false;
        this.lines[4] = false;
        this.lines[6] = false;
        break;
      case '8':
        break;
      case '9':
        this.lines[4] = false;
        break;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    for (var i = 0; i < this.lines.length; i++) {
      if (this.lines[i]) {
        switch (i) {
          case 0:
            line(gap, 0, gap + lineLength, 0);
            break;
          case 1:
            line(0, gap, 0, gap + lineLength);
            break;
          case 2:
            line(2 * gap + lineLength, gap, 2 * gap + lineLength, gap + lineLength);
            break;
          case 3:
            line(gap, 2 * gap + lineLength, gap + lineLength, 2 * gap + lineLength);
            break;
          case 4:
            line(0, 3 * gap + lineLength, 0, 3 * gap + 2 * lineLength);
            break;
          case 5:
            line(2 * gap + lineLength, 3 * gap + lineLength, 2 * gap + lineLength, 3 * gap + 2 * lineLength);
            break;
          case 6:
            line(gap, 4 * gap + 2 * lineLength, gap + lineLength, 4 * gap + 2 * lineLength);
            break;
        }
      }
    }
    pop();
  }
}