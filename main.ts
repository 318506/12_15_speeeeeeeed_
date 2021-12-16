function led2 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[y][index] == 1) {
                led.plot(index, y)
            } else {
                led.unplot(index, y)
            }
        }
        if (換邊 == 0) {
            // 從左到右
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        } else if (換邊 == 1) {
            // 從右到左
            // (A鍵)
            list[y].push(list[y].shift())
            basic.pause(speed)
        } else if (換邊 == 2) {
        	
        }
    }
}
// 從右而左
input.onButtonPressed(Button.A, function () {
    換邊 = 1
})
// 從上而下
input.onButtonPressed(Button.B, function () {
    換邊 = 2
    list = [
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ]
    ]
})
let list: number[][] = []
let 換邊 = 0
換邊 = 0
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
]
]
// 第一排的燈
control.inBackground(function () {
    led2(0, 1000)
})
// 第二排的燈
control.inBackground(function () {
    led2(1, 500)
})
// 第三排的燈
control.inBackground(function () {
    led2(2, 250)
})
// 第四排的燈
control.inBackground(function () {
    led2(3, 200)
})
// 第五排的燈
control.inBackground(function () {
    led2(4, 100)
})
