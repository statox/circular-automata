import P5 from 'p5';
import type {Automaton} from '../types/automaton.types';

function drawAutomatonAsSquare(p5: P5, A: Automaton) {
    const scaleX = p5.width / A.cells[0].length;
    const scaleY = p5.height / A.cells.length;

    p5.noStroke();
    for (let y = 0; y < A.cells.length; y++) {
        for (let x = 0; x < A.cells[0].length; x++) {
            if (A.cells[y][x]) {
                p5.fill('blue');
            } else {
                p5.noFill();
            }
            p5.rect(x * scaleX, y * scaleY, scaleX, scaleY);
        }
    }
}

function drawAutomatonAsCircle(p5: P5, A: Automaton) {
    const scale = p5.width / 2 / A.cells.length;
    const angle = p5.TWO_PI / A.cells[0].length;

    const scaleX = 20;
    const scaleY = 20;

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    const pos = new P5.Vector();
    pos.x = 0;
    pos.y = scale;

    p5.noStroke();
    p5.noFill();

    let n = 1;
    for (let y = 0; y < A.cells.length; y++) {
        for (let x = 0; x < A.cells[0].length; x++) {
            if (A.cells[y][x]) {
                p5.fill('blue');
            } else {
                p5.noFill();
            }
            const bottomLeft = pos
                .copy()
                .setMag(scale * y)
                .rotate(angle / 2);
            const topLeft = pos
                .copy()
                .setMag(scale * (y + 1))
                .rotate(angle / 2);
            const topRight = pos
                .copy()
                .setMag(scale * (y + 1))
                .rotate(-angle / 2);
            const bottomRight = pos
                .copy()
                .setMag(scale * y)
                .rotate(-angle / 2);
            p5.beginShape();
            p5.vertex(bottomLeft.x, bottomLeft.y);
            p5.vertex(topLeft.x, topLeft.y);
            p5.vertex(topRight.x, topRight.y);
            p5.vertex(bottomRight.x, bottomRight.y);
            p5.vertex(bottomLeft.x, bottomLeft.y);
            p5.endShape();
            pos.rotate(angle);
        }
    }
    p5.pop();
}

function drawAutomatonInfo(p5: P5, A: Automaton) {
    p5.fill(0);
    p5.stroke(0);
    p5.strokeWeight(1);

    p5.text(`Rule: ${A.ruleNumber}`, 10, 10);
    p5.text(`Lines: ${A.H}`, 10, 30);
    p5.text(`Cells by line: ${A.W}`, 10, 50);
}

export {drawAutomatonAsSquare, drawAutomatonAsCircle, drawAutomatonInfo};
