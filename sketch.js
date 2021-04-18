var tree = [];

function setup() {
    createCanvas(600, 600)

    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);

    var root = new Branch(a, b);

    tree[0] = root;
}

function mousePressed() {
    for(var i = tree.length - 1; i >= 0; i--) {
        if(!tree[i].finihed) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
            tree[i].finished = true;
        }
    }
}

function draw() {
    background(51);

    for(var i = 0; i < tree.length; i++) {
        tree[i].show();
        // tree[i].jitter();
    }
}
