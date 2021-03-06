glb.index = function(){
    'use strict';
    let g = {elm:{}};

    g.elm.lbl_player1 = document.getElementById('lbl_player1');
    g.elm.lbl_player2 = document.getElementById('lbl_player2');
    g.elm.lbl_player3 = document.getElementById('lbl_player3');
    g.elm.lbl_player4 = document.getElementById('lbl_player4');
    g.elm.btn_up1 = document.getElementById('btn_up1');
    g.elm.btn_up2 = document.getElementById('btn_up2');
    g.elm.btn_up3 = document.getElementById('btn_up3');
    g.elm.btn_up4 = document.getElementById('btn_up4');
    g.elm.btn_down1 = document.getElementById('btn_down1');
    g.elm.btn_down2 = document.getElementById('btn_down2');
    g.elm.btn_down3 = document.getElementById('btn_down3');
    g.elm.btn_down4 = document.getElementById('btn_down4');

    g.elm.btn_up1.onclick = function () {
        g.elm.lbl_player1.firstChild.nodeValue = upCount(g.elm.lbl_player1.firstChild.nodeValue);
    };
    g.elm.btn_up2.onclick = function () {
        g.elm.lbl_player2.firstChild.nodeValue = upCount(g.elm.lbl_player2.firstChild.nodeValue);
    };
    g.elm.btn_up3.onclick = function () {
        g.elm.lbl_player3.firstChild.nodeValue = upCount(g.elm.lbl_player3.firstChild.nodeValue);
    };
    g.elm.btn_up4.onclick = function () {
        g.elm.lbl_player4.firstChild.nodeValue = upCount(g.elm.lbl_player4.firstChild.nodeValue);
    };

    g.elm.btn_down1.onclick = function () {
        g.elm.lbl_player1.firstChild.nodeValue = downCount(g.elm.lbl_player1.firstChild.nodeValue);
    };
    g.elm.btn_down2.onclick = function () {
        g.elm.lbl_player2.firstChild.nodeValue = downCount(g.elm.lbl_player2.firstChild.nodeValue);
    };
    g.elm.btn_down3.onclick = function () {
        g.elm.lbl_player3.firstChild.nodeValue = downCount(g.elm.lbl_player3.firstChild.nodeValue);
    };
    g.elm.btn_down4.onclick = function () {
        g.elm.lbl_player4.firstChild.nodeValue = downCount(g.elm.lbl_player4.firstChild.nodeValue);
    };

    function upCount(nodeValue) {
        let v = parseInt(nodeValue, 10);
        if (v < 3) {
            v += 1;
        }
        return v;
    }

    function downCount(nodeValue) {
        let v = parseInt(nodeValue, 10);
        if (v > 0) {
            v -= 1;
        }
        return v;
    }

    function resetCount() {
        g.elm.lbl_player1.firstChild.nodeValue = 0;
        g.elm.lbl_player2.firstChild.nodeValue = 0;
        g.elm.lbl_player3.firstChild.nodeValue = 0;
        g.elm.lbl_player4.firstChild.nodeValue = 0;
    }

    window.document.onkeydown = function (e) {
        switch (e.keyCode) {
        // 0
        case 48:
            resetCount();
            return;
        // 1
        case 49:
            g.elm.lbl_player1.firstChild.nodeValue = upCount(g.elm.lbl_player1.firstChild.nodeValue);
            return;
        // 2
        case 50:
            g.elm.lbl_player2.firstChild.nodeValue = upCount(g.elm.lbl_player2.firstChild.nodeValue);
            return;
        // 3
        case 51:
            g.elm.lbl_player3.firstChild.nodeValue = upCount(g.elm.lbl_player3.firstChild.nodeValue);
            return;
        // 4
        case 52:
            g.elm.lbl_player4.firstChild.nodeValue = upCount(g.elm.lbl_player4.firstChild.nodeValue);
            return;
        }
    };
};
glb.index();
