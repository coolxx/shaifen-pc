$(function(){
    /*头部微博显示与隐藏*/
    $(".offcn_header_wb").hover(function(){
        $(".top_wb_con").show().css('zIndex',99);
    },function(){
        $(".top_wb_con").hide()
    })
    $(".offcn_header_wx").hover(function(){
        $(".top_wx_con").show().css('zIndex',99);
    },function(){
        $(".top_wx_con").hide();
    })

    $('.Scan').hover(function () {
        $(this).attr('src','images/m9.png')
    },function () {
        $(this).attr('src','images/m8.png')
    })

    $('.btn-box li').each(function (index) {
        $(this).mouseenter(function () {
            $('.btn-box li').removeClass('on').eq(index).addClass('on');
            $('.show-box').hide().eq(index).show()
        })
    })
})