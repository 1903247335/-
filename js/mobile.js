(function () {
        let place = [[0, 412, 830], [-412, 0, 830], [-830,-412,0]]
        let index = 0
        let img = document.querySelectorAll('.swiper_contain img')

        let li = document.querySelectorAll('.swiper_contain li')
        setInterval(function () {
            for (let i = 0; i < place.length; i++) {
                li[i].classList.remove('fill')
            }
            li[index].classList.add("fill")


            for (let i = 0; i < place.length; i++) {

                img[i].style.left = place[index][i] + 'px'
            }

            index = index === 2 ? 0 : index += 1

        }, 2000)


    }
)();
(function () {
    let place = [[0, 382,764, 1146, 1528],
        [-382, 0, 382, 764, 1146],
        [-764,-382, 0, 382, 764],
        [-1146,-764,-382, 0, 382],
        [-1528,-1146,-764,-382, 0],

    ]
    let index = 0
    let img = document.querySelectorAll('.hero_swiper_contain img')
    let li = document.querySelectorAll('.hero_swiper_contain li')
    setInterval(function () {
        for (let i = 0; i < place.length; i++) {
            li[i].classList.remove('fill')
        }
        li[index].classList.add("fill")

        for (let i = 0; i < place.length; i++) {

            img[i].style.left = place[index][i] + 'px'
        }

        index = index === 4 ? 0 : index += 1

    }, 2000)
})()