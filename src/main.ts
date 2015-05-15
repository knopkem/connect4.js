function exec() {
    var canv = document.createElement("canvas");
    canv.width = 512;
    canv.height = 512;
    document.body.appendChild(canv);
    var ctx = canv.getContext("2d");
}

exec();