bg = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/bgG.mp3');
buttonClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Buttonclick.mp3');
featured = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featured.mp3');
slideSlow = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideSlow.mp3');
countStats = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Countupstats.mp3');
researchClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchClick.mp3');
researchInactive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchInactive.mp3');
slideFast = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideFast.mp3');
featuredModal = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featuredModal.mp3');
researchComplete = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchComplete.mp3');

const penProgressEl = $('.pen');
const statAddSounds = []

for(i = 0; i < 10; i++) {
    let a  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/statAdd.mp3');
    statAddSounds.push(a)
}

function twShare(url, title, winWidth, winHeight) {
    const winTop = 100;
    const winLeft = 100;
    window.open(`https://twitter.com/intent/tweet?text=${title}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`);
}

pen_id = $('._pen_id').text();

$('body').on('click', '.share', () => {
    twShare(`https://codepen.io/jcoulterdesign/full/a1b3ea524ead4700015153bb95b881c3`, `我在Codepen模拟游戏中获得了${developer.followers.toLocaleString()}个粉丝。 https://bit.ly/2LyxS71 %23codepenSimGame`, 520, 350);
    return false;
});

function updateMyStatsUi() {
    $('.mystats_css span.val').html(developer.css.toLocaleString());
    $('.mystats_html span.val').html(developer.html.toLocaleString());
    $('.mystats_js span.val').html(developer.js.toLocaleString());
    $('.mystats_design span.val').html(developer.design.toLocaleString());
}

const globals = {
    'timerTick' : 120,
    'keyTick' : 110,
    'penStatAddChance' : 4,
    'typeIncrement' : 1.1,
    'makingPen' : true,
    'penInProgress' : false,
    'viewDecay' : 1.1,
    'maxBars' : 30,
    'followerFriction' : 50,
    'viewMultiplier' : 1.15,
    'researchTime' : 2000,
    'researching' : false,
    'featuredMinStats' : 500,
    'featuredBoost' : 3.1,
    'featureChance' : 10,
    'paused' : true,
    'gameLength' : 365,
    'audio' : true,
    'auto' : false
}

const penNames = [
    '时尚文本输入框',
    'Three.js交互式独角兽',
    '过度动画的登录框',
    '又一个CSS网格',
    '纯CSS小部件',
    '纯CSS插图',
    '持久的cookie政策模态框',
    '过于复杂的3D菜单',
    '我停不下来',
    '音乐播放器小部件',
    'Codepen模拟游戏',
    '奇怪的颜色组合',
    'JS刮刮卡',
    'Canvas和音频API小玩意',
    '巨大的动画猫',
    '密码强度指示器',
    '单元素RPG游戏',
    '纯CSS多人在线游戏',
    '谷歌地图应用',
    '响应式检查器',
    '弑君者',
    '纯CSS后端',
    '程序生成的纸杯蛋糕',
    '无法提交的表单',
    '永不结束的加载条',
    '隐形复选框',
    'HTML滚动字幕',
    '直接注入的CSS',
    '无元素元素',
    'Three.JS射击游戏',
    'SVG动画',
    'Codepen挑战',
    '传递笔',
    '可食用代码',
    'React日历小部件',
    '看起来圆的方形div',
    '兼容Netscape的CSS游戏',
    '另一个用户界面',
    'CSS中的自学习AI',
    'HTML替代品',
    'Codepen套娃'  
]

const research = [
    {
        'index' : 1,
        'name' : '学习基础HTML',
        'cost' : 10,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 10,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 2,
        'name' : '学习基础CSS',
        'cost' : 20,
        'increaseCss' : 10,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 3,
        'name' : '学习基础JS',
        'cost' : 30,
        'increaseCss' : 0,
        'increaseJs' : 10,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 4,
        'name' : '学习基础设计',
        'cost' : 50,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 5,
        'name' : '寻找灵感',
        'cost' : 100,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' :10,
        'increaseDesign' : 15,
        'researched' : false
    },{
        'index' : 6,
        'name' : '学习HAML',
        'cost' : 150,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 15,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 7,
        'name' : '学习CSS动画',
        'cost' : 200,
        'increaseCss' : 15,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 8,
        'name' : '学习jQuery',
        'cost' : 300,
        'increaseCss' : 0,
        'increaseJs' : 15,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 9,
        'name' : '学习色彩理论',
        'cost' : 400,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 15,
        'researched' : false
    },{
        'index' : 10,
        'name' : '学习代码重构',
        'cost' : 600,
        'increaseCss' : 15,
        'increaseJs' : 20,
        'increaseHtml' : 10,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 11,
        'name' : '学习BEM方法论',
        'cost' : 800,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 20,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 12,
        'name' : '阅读CSS Tricks文章',
        'cost' : 1150,
        'increaseCss' : 20,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 13,
        'name' : '学习ES6',
        'cost' : 1400,
        'increaseCss' : 0,
        'increaseJs' : 20,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 14,
        'name' : '记忆字体名称',
        'cost' : 1800,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 20,
        'researched' : false
    },
    {
        'index' : 15,
        'name' : '观看YouTube教程',
        'cost' : 2200,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' : 10,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 16,
        'name' : '学习HTML6',
        'cost' : 2700,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 25,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 17,
        'name' : '学习预处理器',
        'cost' : 3200,
        'increaseCss' : 25,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 18,
        'name' : '学习React',
        'cost' : 3800,
        'increaseCss' : 0,
        'increaseJs' : 25,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 19,
        'name' : 'Photoshop课程',
        'cost' : 4500,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 25,
        'researched' : false
    },{
        'index' : 20,
        'name' : '浏览Awwwards网站',
        'cost' : 5200,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' : 10,
        'increaseDesign' : 25,
        'researched' : false
    },{
        'index' : 21,
        'name' : '浏览Stack Overflow',
        'cost' : 6000,
        'increaseCss' : 15,
        'increaseJs' : 15,
        'increaseHtml' : 15,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 22,
        'name' : '学习Angular',
        'cost' : 6600,
        'increaseCss' : 0,
        'increaseJs' : 25,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 23,
        'name' : '学习VR技术',
        'cost' : 7500,
        'increaseCss' : 0,
        'increaseJs' : 30,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 24,
        'name' : '尝试最新技术',
        'cost' : 9000,
        'increaseCss' : 20,
        'increaseJs' : 20,
        'increaseHtml' : 20,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 25,
        'name' : '参加HTML大师班',
        'cost' : 11000,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 60,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 26,
        'name' : '参加CSS大师班',
        'cost' : 12000,
        'increaseCss' : 60,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 27,
        'name' : '参加JS大师班',
        'cost' : 13000,
        'increaseCss' : 0,
        'increaseJs' : 60,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 28,
        'name' : '参加设计大师班',
        'cost' : 14000,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 60,
        'researched' : false
    },{
        'index' : 29,
        'name' : '学习Code Academy课程',
        'cost' : 15000,
        'increaseCss' : 30,
        'increaseJs' : 30,
        'increaseHtml' : 30,
        'increaseDesign' : 20,
        'researched' : false
    }
]

research.forEach(function(r) {
    $('.research_modal__list').append(`
<div class="item">
<div class="name">${r.name}<div class="sep"></div></div>
<div class="stat">
${r.increaseHtml > 0 ? `html <span class="green">+ ${r.increaseHtml}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseCss > 0 ? `css <span class="green">+ ${r.increaseCss}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseJs > 0 ? `js <span class="green">+ ${r.increaseJs}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseDesign > 0 ? `设计 <span class="green">+ ${r.increaseDesign}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
<div class="research_button" data-index="${r.index}"><div class="pixelsTop"></div>
<div class="pixelsBottom"></div>研究 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rCost.png" /><span class="cost">${r.cost.toLocaleString()}</div></div>
</div>`)
})

$('.auto').click(function(){
    playSound(buttonClick);
    if(globals.auto) {
        $(this).removeClass('on');
        $(this).addClass('off');
        globals.auto = false;
    } else {
        $(this).removeClass('off');
        $(this).addClass('on');
        globals.auto = true;
    }
})

$('.researchButton').click(function() {
    if(!globals.researching) {
        globals.paused = true;
        $('.overlay, .research_modal').show();
        playSound(buttonClick);
        playSound(slideFast);
        $('.research_modal').show();

        setTimeout(function() {
            $('.research_modal').css('opacity', '1');
        },300)

        $('.overlay').fadeIn(function() {
            setTimeout(function() {
                $('.research_modal').css('height' , '400px');
                $('.research_modal').css('width' , '920px');

                setTimeout(function() {
                    $('.research_modal .hide').fadeIn();
                }, 400)
            },100)
        });
    } else {
        playSound(researchInactive);
    }

    $('.research_modal .item').each(function() {
        let index = $(this).find('.research_button').data('index') - 1;
        if(developer.followers >= research[index].cost && research[index].researched == false) {
            $(this).addClass('available') 
            $(this).removeClass('unavailable')  
            $(this).removeClass('researched')  
        }

        if(developer.followers < research[index].cost && research[index].researched == false) {
            $(this).addClass('unavailable')   
            $(this).removeClass('available')  
            $(this).removeClass('researched')  
        }

        if(research[index].researched == true) {
            $(this).addClass('researched')   
            $(this).removeClass('available')  
            $(this).removeClass('unavailable')  
        }
    })
})

audioSwitch = 0;
sfxSwitch = 0;

$('.options_sf').click(function() {
    if(sfxSwitch == 0) {
        globals.audio = false;
        sfxSwitch = 1;
        $(this).css('opacity','0.4');
    } else {
        globals.audio = true;
        sfxSwitch = 0;
        $(this).css('opacity','1');
    }
});

$('.options_bg').click(function() {
    if(audioSwitch == 0) {
        $(bg).animate({volume: 0}, 600);
        audioSwitch = 1;
        $(this).css('opacity','0.4')
    } else {
        $(bg).animate({volume: 1}, 600);
        audioSwitch = 0;
        $(this).css('opacity','1')
    }
})

$('.research_modal .close').click(function() {
    playSound(buttonClick)
    $('.research_modal').css('opacity', '0');
    setTimeout(function(){
        $('.overlay').fadeOut();
    },450)

    setTimeout(function(){

        $('.research_modal').attr('style', '');
        $('.research_modal .hide').attr('style', '');
    },1000)

    globals.paused = false;
})

$('body').on('click', '.research_button', function() {
    globals.paused = false;
    let r = $(this).data('index') - 1;
    let stat = research[r].stat;
    let increaseCss = research[r].increaseCss;
    let increaseJs = research[r].increaseJs;
    let increaseHtml = research[r].increaseHtml;
    let increaseDesign = research[r].increaseDesign;

    if(developer.followers > research[r].cost && research[r].researched == false && !globals.researching) {
        globals.researching = true;
        $('.overlay, .research_modal').fadeOut();
        $('.researchProgress').show();
        $('.researchProgress').show()
        playSound(researchClick)
        rp = setInterval(function(){
            $('.bar_inner').addClass('animate')
        },1)

        setTimeout(function() {
            clearInterval(rp)
            developer.css += increaseCss
            developer.js += increaseJs
            developer.html += increaseHtml
            developer.design += increaseDesign
            research[r].researched = true;
            $('.researchProgress').hide()
            globals.researching = false;
            playSound(researchComplete)
            updateMyStatsUi(); 
        }, globals.researchTime)

    } else {
        playSound(researchInactive)
    }
})

const statColors = {
    'html' : '#f16529',
    'css' : '#2965f1',
    'js' : '#d87b17',
    'design' : '#9d28e0'
}

var developer = {
    'name'      : 'Jamie',
    'level'     : 1,
    'html'      : 3,
    'css'       : 3,
    'js'        : 3,
    'design'    : 3,
    'followers' : 0
}

var pen = {
    'name' : 'Pen',
    'css'  : 0,
    'html' : 0,
    'js'   : 0,
    'design': 0
}

var pens = [];
updateMyStatsUi()
document.addEventListener("keyup", keyPress, false);

var progress = 0;

kS = 0;

function keyPress() {
    if(progress > 0) {
        $('.startMashing h2 span').html("很好，继续")
    }

    if(progress > 20) {
        $('.startMashing h2 span').html("现在我们有进展了")
    }

    if(progress > 40) {
        $('.startMashing h2 span').html("修复那些bug")
    }

    if(progress > 70) {
        $('.startMashing h2 span').html("即将完成")
    }

    if(progress > 99) {
        $('.startMashing h2 span').html("完成！")
    }
    if(globals.makingPen && progress < 100 ) {
        if(!globals.researching && !globals.paused) {
            progress += globals.typeIncrement

            $('.pen_bar_progress').width(progress + '%');

            // Create a random number between 0 and the penStatChance variable
            let add =  Math.floor(Math.random() * globals.penStatAddChance) + (globals.penStatAddChance - 2);

            if(add == globals.penStatAddChance) {

                // Each keystroke, IF random check passes, pick a number between 1 and 3
                let stat =  Math.floor(Math.random() * 4) + 1;

                if(kS < statAddSounds.length - 1) {
                    kS++
                } else {
                    kS = 0
                }

                playSound(statAddSounds[kS])

                // Assign a stat based on the integer
                if(stat == 1) {
                    let htmlStat = Math.floor(Math.random() * developer.html) + 1;
                    pen.html = pen.html + htmlStat;
                    makePip(statColors.html, htmlStat, 'html');
                }

                if(stat == 2) {
                    let cssStat = Math.floor(Math.random() * developer.css) + 1;
                    pen.css = pen.css + cssStat;
                    makePip(statColors.css, cssStat, 'css');
                }

                if(stat == 3) {
                    let jsStat = Math.floor(Math.random() * developer.js) + 1;
                    pen.js = pen.js + jsStat;
                    makePip(statColors.js, jsStat, 'js');
                }

                if(stat == 4) {
                    let designStat = Math.floor(Math.random() * developer.design) + 1;
                    pen.design = pen.design + designStat;
                    makePip(statColors.design, designStat, 'design');
                }
            }
            updateStatUi();
        }
    } else {

        $('.complete_modal').show();
        playSound(featured)
        setTimeout(function(){
            playSound(slideFast)
        },400)

        setTimeout(function(){
            $('.complete_modal').css('opacity', '1')
        },300)
        $('.overlay').fadeIn(function(){

            setTimeout(function(){
                $('.complete_modal').css('height' , '370px')
                $('.complete_modal').css('width' , '600px')
                setTimeout(function(){
                    $('.complete_modal div.hide').fadeIn();
                }, 300)
            },100)
        });
        $('.complete_modal .html span span').html(pen.html)
        $('.complete_modal .css span span').html(pen.css)
        $('.complete_modal .js span span').html(pen.js)
        $('.complete_modal .design span span').html(pen.design)
        globals.paused = true;

    }
}

function updateStatUi() { 
    $('.pen_css span.val').html(pen.css.toLocaleString());
    $('.pen_html span.val').html(pen.html.toLocaleString());
    $('.pen_js span.val').html(pen.js.toLocaleString());
    $('.pen_design span.val').html(pen.design.toLocaleString());
}

$('.make').click(function() {
    globals.makingPen = true;
    penProgressEl.show();
    $('.make').hide();
});

function makePip(stat, int, type) {
    $('body').append(`<div class="pip" data-type="${type}"><div class="pixelsTop"></div><div class="pixelsBottom"></div><p style="color:${stat};">${int}</p></div>`);
}

$('.release').click(function() {
    playSound(buttonClick)
    release(pen)
    globals.paused = false;
    playSound(slideSlow)
})

$('.scrap').click(function(){
    playSound(buttonClick)
    globals.paused = false;
    $('.startMashing h2 span').html("开始按键")

    $('.complete_modal').fadeOut();

    setTimeout(function(){
        $('.overlay').fadeOut()
    }, 450)

    progress = 0;
    $('.pen_bar_progress').width(0);

    pen.css = 0;
    pen.html = 0;
    pen.js = 0;
    pen.design = 0;

    setTimeout(function(){
        $('.complete_modal').attr('style', '');
        $('.complete_modal div').attr('style', '');
    },2000)

    updateStatUi();
})

function release(p) {
    $('.startMashing h2 span').html("start pressing keys")
    progress = 0;
    $('.releasedEmpty').remove()
    $('.overlay').fadeOut();
    $('.complete_modal').css('height','61px')
    $('.complete_modal').css('width','299px')
    $('.complete_modal').css( 'top', '298px')   
    $('.complete_modal').css( 'left', '100%') 
    $('.complete_modal').css( 'transform', 'translateX(calc(-100% - 57px))')

    setTimeout(function(){
        $('.released_pen').css('height', '150px')
    },210)
    setTimeout(function(){
        $('.released_pen').css('opacity', '1');

        $('.released_pen__bottom').css('top','-10px')

    },510)

    setTimeout(function(){
        $('.complete_modal').css('opacity', '0');
    },850)

    setTimeout(function(){
        $('.complete_modal').attr('style', '');
        $('.complete_modal div').attr('style', '');
    },2000)

    $('.complete_modal div').css('opacity', '0')
    let name =  Math.floor(Math.random() * penNames.length);

    let newPen = {
        'name' : penNames[name],
        'css'  : p.css,
        'html' : p.html,
        'js'   : p.js, 
        'design' : p.design,
        'views' : 0,
        'maxViews' : ((Math.ceil((p.css + p.js + p.html + p.design) * globals.viewMultiplier) + 1) * (pens.length + 1 / 35)),
        'dailyViews' : ((Math.ceil((p.css + p.js + p.html + p.design) * globals.viewMultiplier) + 1) * (pens.length + 1/ 35)),
        'comments' : 0,
        'likes' : 0,
        'featured' : false,
        'featuredBoosted' : false,
        'featuredCheck' : false,
        'featuredCheckCount' : 0
    }

    pens.push(newPen);

    $('.pen_bar_progress').width(0);

    pen.css = 0;
    pen.html = 0;
    pen.js = 0;
    pen.design = 0;
    updateStatUi();
    setTimeout(function(){
        $('.released').prepend(`<div class="released_pen" style="opacity:0"><div class="released_pen__top"><div class="pixelsTop"></div><div class="pixelsBottom"></div><span class="name">${pens[pens.length - 1].name}</span><div class="star"></div><div class="released_pen__graph"></div></div><div class="released_pen__bottom"><div class="pixelsTop"></div><div class="pixelsBottom"></div><img class="views" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenViews.png" /><span class="view_count">${pens[pens.length - 1].views}</span><div class="sep"></div><img class="likes" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenLikes.png" /><span class="like_count"> ${pens[pens.length - 1].likes}</span><div class="sep"></div><img class="comments" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenComments.png" /><span class="comment_count"> ${pens[pens.length - 1].comments}</span></div></div>`)

    }, 1)
}
const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
                    "七月", "八月", "九月", "十月", "十一月", "十二月"
                   ];
var time = 0;

const rootStatElementPosition = {
    'design' : '550px',
    'html' : '-550px',
    'css' : '-176px',
    'js' : '180px'
}

const pickers = [
    '玛丽·莫斯利',
    '蒂姆·霍尔曼',
    '克里斯·科伊尔',
    'codepen',
    '杰米·库尔特',
    '斯蒂芬·肖'
]

d = 0;

$('.awesome').click(function(){
    playSound(buttonClick)
    $('.overlay, .featured_modal').fadeOut();
    globals.paused = false;
})
function feature(penName) {
    globals.paused = true;
    $('.overlay, .featured_modal').show();

    let p =  Math.floor(Math.random() * pickers.length);

    $('.featured_modal .picker').html(pickers[p])
    $('.featured_modal .name').html(penName)
}

function gameLoop() {
    if(d == globals.gameLength) {
        globals.paused = true;
        $('.endGame, .overlay').show()
        $('.pencount').html(pens.length + ' ')
        let bestPen = '';

        if(pens.length > 1) {
            for(let i = 0; i < pens.length; i++) {
                if(pens[i + 1]) {
                    if(pens[i + 1].views > pens[i].views) {
                        bestPen = pens[i + 1]
                    }
                }
            }
        } else {
            bestPen = pens[0]
        }

        $('.mostName').html(bestPen.name)
        $('.mostViews').html(Math.ceil(bestPen.views).toLocaleString())
        globals.paused = true;
    }

    if(!globals.paused){
        time++;
        $('.researchButton_counter span').html($('.available').length)
        $('.pip').each(function() {

            if($(this).data('type') == 'html') {
                $(this).animate({ left: rootStatElementPosition.html, top: '140px' }, 2000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'css') {
                $(this).animate({ left: rootStatElementPosition.css, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'js') {
                $(this).animate({ left: rootStatElementPosition.js, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'design') {
                $(this).animate({ left: rootStatElementPosition.design, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

        })
        if(globals.auto && !globals.researching && !globals.paused) {
            if(time > globals.keyTick) {
                keyPress()
            }
        }
        if(time > globals.timerTick) {

            time = 0;
            d++;
            var day = new Date();
            var nextDay = new Date(day);
            nextDay.setDate(day.getDate() + d);
            let month = nextDay.getUTCMonth();
            let days = nextDay.getDate();
            let year = nextDay.getFullYear();
            $('.date span').html(`${monthNames[month]} ${days}, ${year}`) 
            $('.research_modal .item').each(function() {
                let index = $(this).find('.research_button').data('index') - 1;
                if(developer.followers > research[index].cost && research[index].researched == false) {
                    $(this).addClass('available') 
                    $(this).removeClass('unavailable')  
                    $(this).removeClass('researched')  
                }

                if(developer.followers < research[index].cost && research[index].researched == false) {
                    $(this).addClass('unavailable')   
                    $(this).removeClass('available')  
                    $(this).removeClass('researched')  
                }

                if(research[index].researched == true) {
                    $(this).addClass('researched')   
                    $(this).removeClass('available')  
                    $(this).removeClass('unavailable')  
                }
            })

            $('.released_pen').each(function() {
                let index = pens.length - $(this).index() - 1;
                let height = Math.ceil(pens[index].dailyViews / pens[index].maxViews * 100);

                if(pens[index].featured) {
                    $(this).find('.star').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/gStar.png" />')   
                }
                if(height > 100) {
                    $(this).find('.released_pen__graph').append(`<div class="line" style="height:${height}%; top:${0}%"></div>`);
                } else {
                    $(this).find('.released_pen__graph').append(`<div class="line" style="height:${height}%; top:${100 - height}%"></div>`);
                }

                let el = $(this);


                if(el.find('.line').length > globals.maxBars) {
                    el.find('.line:first-child').remove();
                }

                let final = Math.ceil(pens[index].views).toLocaleString();
                $(this).find('.view_count').html(final);

                let comment = Math.ceil(pens[index].comments).toLocaleString();
                $(this).find('.comment_count').html(comment);

                let like = Math.ceil(pens[index].likes).toLocaleString();
                $(this).find('.like_count').html(like);
            });

            var dailyFollowers = 0;

            pens.forEach(function(p) {
                if(p.css + p.html + p.css + p.design > globals.featuredMinStats) {
                    let f = Math.floor(Math.random() * globals.featureChance);
                    if(f == 0 && !p.featuredCheck){

                        if(p.featuredCheckCount < 14) {
                            p.featured = true;
                        }
                    } else {
                        p.featuredCheckCount++; 
                    }

                }
                if(p.featured && !p.featuredBoosted) {
                    p.dailyViews = p.dailyViews * globals.featuredBoost;
                    p.featuredBoosted = true;
                    feature(p.name)
                    playSound(featuredModal)
                }

                p.dailyViews = (p.dailyViews / globals.viewDecay);
                p.likes += Math.floor((p.dailyViews / globals.viewDecay) / 40);
                p.comments += Math.floor((p.dailyViews / globals.viewDecay) / 2000);
                p.views += p.dailyViews;
                dailyFollowers += p.dailyViews
            });

            developer.followers += Math.floor((dailyFollowers / globals.followerFriction) / ((developer.html + developer.css +developer.js + developer.design) / 10) );

            $('.followers span').html(developer.followers.toLocaleString());
            $('.endGame h1').html(developer.followers.toLocaleString());
        }
    }
    window.requestAnimationFrame(gameLoop);
}

$('.go').click(function(){
    playSound(buttonClick)
    $('.intro_modal').fadeOut(function(){
        $('.overlay').fadeOut();
        globals.paused = false
    })
})

window.requestAnimationFrame(gameLoop);

class Grain {
    constructor (el) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 12; // int between 0 and 255,
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }

    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop () {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}

const el = document.querySelector('.grain');
const grain = new Grain(el);

$('input').keydown(function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        if($('input').val() != '') {
            playSound(buttonClick)
            $('.name_modal').css('left','-200%');
            $('.intro_modal').css('left','0%');
            $('.username h2').html($('input').val())
            playAudio(bg)
        } else {
            $('input').css('border-color', '#f16059')
        }
        return false;
    }
})

$('.next').click(function() {
    if($('input').val() != '') {
        playSound(buttonClick)
        $('.name_modal').css('left','-200%');
        $('.intro_modal').css('left','0%');
        $('.username h2').html($('input').val())
        playAudio(bg)
    } else {
        $('input').css('border-color', '#f16059')
    }
})

function animateValue(c, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = $('.' + c)
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// ## Create a function to play our sounds
function playSound(sound) {
    if (globals.audio) {
        sound.play(); // Play sound
    }
}

function playAudio(sound) {
    sound.loop = true;
    sound.volume = 0.5;
    sound.play(); // Play sound
}