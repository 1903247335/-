(function () {
    /*轮播图*/
    let timer = null
    let li = document.querySelectorAll('.swiper img')
    let l = document.querySelectorAll('.swiper li')
    let arr = []
    for (let i = 0; i < li.length; i++) {
        arr.push(parseInt(li[i].style.left))
    }
    let place = [[0, 605, 1210, 1815, 2420, 3025],
        [-605, 0, 605, 1210, 1815, 2420],
        [-1210, -605, 0, 605, 1210, 1815],
        [-1815, -1210, -605, 0, 605, 1210,],
        [-2420, -1815, -1210, -605, 0, 605]]

    function font_light(i) {
        for (let x = 0; x < li.length; x++) {
            l[x].classList.remove('swiper_active')
        }
        let a = i === li.length - 1 ? 0 : i
        l[a].classList.add('swiper_active')
    }
    function time_count() {

        for (let x = 0; x < li.length; x++) {
            li[x].style.left = place[count][x] + 'px'

            if (place[count][x] === 0) {
                font_light(x)

            }


        }
        count=count>=li.length-2?0:count+1



    }
    let count=0
    timer = setInterval(time_count
    , 3000)

    for (let i = 0; i < l.length; i++) {
        l[i].addEventListener('mouseenter', function () {

            clearInterval(timer);
            for (let z = 0; z < li.length; z++) {

                li[z].style.left = place[i][z] + 'px'
                if (place[i][z] === 0) {
                    font_light(z)
                    count=i
                }
            }
        })
        l[i].addEventListener('mouseleave',function () {
            clearInterval(timer);
            timer=setInterval(time_count
    , 3000)
        })
    }

    /*轮播图结束*/


})();

(function () {
    /*新闻移动显示*/
    let li = document.querySelectorAll('.news_nav li')
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseenter', function () {
            for (let z = 0; z < li.length; z++) {
                li[z].classList.remove('news_active')

                li[z].classList.remove('font')
            }
            this.classList.add('news_active')
            this.classList.add('font')
        })
    }

})();

(function () {
    let li = document.querySelectorAll('.context_nav li')
    let a = document.querySelectorAll('.context_nav a')
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseenter', function () {
            for (let z = 0; z < li.length; z++) {
                li[z].classList.remove('news_active')

                a[z].classList.remove('font')
            }
            this.classList.add('news_active')
            a[i].classList.add('font')
        })
    }

})();


(function () {
    /*顶部导航栏高亮*/
    let li = document.querySelectorAll('.nav-list li')
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseenter', function () {
                for (let z = 0; z < li.length; z++) {
                    li[z].classList.remove('top_active')
                    for (x of li[z].children) {
                        x.classList.remove('font')
                    }


                }
                this.classList.add('top_active')
                for (x of this.children) {
                    x.classList.add('font')
                }
            }
        )
    }
})();
(function () {
    /*隐藏菜单显示*/
    let li = document.querySelectorAll('.nav-list li')
    occupy = null
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseenter', function () {
            if (occupy == null) {
                let menu = document.querySelector('.hidden_menu ')
                menu.style.height = 285 + 'px'
                occupy = true

            }

        })
    }
    document.querySelector('header').addEventListener('mouseleave', function () {
        if (occupy === true) {
            let menu = document.querySelector('.hidden_menu ')
            menu.style.height = 0
            occupy = null
        }
    })

})();
