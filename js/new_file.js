var ss0=$('<div></div>')
var ss1=$('<div></div>')
var ss2=$('<div></div>')
var jj=$('<div></div>')
var jj1=$('<div></div>')
var jj2=$('<div></div>')
$(function(){
	$(ss0).addClass('aa');
	$(ss1).addClass('aa');
	$(ss2).addClass('aa');
	$(jj).addClass('bb');
	$(jj1).addClass('bb');
	$(jj2).addClass('bb');
	$("#zz>div").eq(0).append(ss0)
	$("#zz>div").eq(1).append(ss1)
	$("#zz>div").eq(2).append(ss2)
	$("#zz>div").eq(4).append(jj)
	$("#zz>div").eq(5).append(jj1)
	$("#zz>div").eq(6).append(jj2)
})
$(".xx>div").on("click",function(){
	var a1='<p>不能这样走哦</p>'
	$('p').hide()
	var s1 = $('.xx>div').eq(0).children().attr('class');
    var s2 = $('.xx>div').eq(1).children().attr('class');
    var s3 = $('.xx>div').eq(2).children().attr('class');
    var s7 = $('.xx>div').eq(3).children().attr('class');
    var s4 = $('.xx>div').eq(4).children().attr('class');
    var s5 = $('.xx>div').eq(5).children().attr('class');
    var s6 = $('.xx>div').eq(6).children().attr('class');
    if ((s1 == 'bb' && s2 == 'bb' && s3 == 'bb') && (s4 == 'aa' && s5 == 'aa' && s6 == 'aa')) {
        if(confirm('游戏完成！重新游戏')){
        	  window.location.reload();
            } else {
                return false
        }
    }
    
    if($('.xx>div').eq(0).children().length==0){
    	if( s2 =='aa'&&s3=='aa'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if($('.xx>div').eq(6).children().length==0){
    	if( s4 =='bb'&&s5=='bb'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if($('.xx>div').eq(1).children().length==0){
    	if( s1 =='bb'&&s3=='aa'&&s7=='aa'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if($('.xx>div').eq(5).children().length==0){
    	if( s4 =='bb'&&s6=='aa'&&s7=='bb'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if($('.xx>div').eq(2).children().length==0){
    	if( s1 =='bb'&&s2=='bb'&&s7=='aa'&&s4=='aa'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if($('.xx>div').eq(4).children().length==0){
    	if( s5 =='aa'&&s6=='aa'&&s7=='bb'&&s3=='bb'){
    		if(confirm('憋死啦！重新游戏')){
    			window.location.reload();
    		}else{
    			return false;
    		}
    	}
    }
    if ($(this).children().hasClass('aa')) {
        if ($(this).next().children().length > 0 && $(this).next().next().children().length > 0) {
//          alert('buneng');
            $(this).append(a1)
            return false;
        } else if ($(this).next().children().length > 0) {
            if ($(this).index() == 5) {
                if ($(this).next().children().length > 0) {
                    return false;
                }
            } else if ($(this).index() > 5) {
                return false;
            }
            $(this).next().next().append("<div class='aa'></div>");
            $(this).children().remove();
        } else {
            if ($(this).index() == 5) {
                if ($(this).next().children().length > 0) {
                    return false;
				}
            } else if ($(this).index() > 5) {
                return false;
			}
            $(this).next().append("<div class='aa'></div>");
            $(this).children().remove();
        }
    }else if ($(this).children().hasClass('bb')) {
        if ($(this).prev().children().length > 0 && $(this).prev().prev().children().length > 0) {
            $(this).append(a1)
            return false;
		} else if ($(this).prev().children().length > 0) {
            if ($(this).index() == 1) {
                if ($(this).prev().children().length > 0) {
                   return false;
				}
            } else if ($(this).index() < 1) {
                return false;
			}
            $(this).prev().prev().append("<div class='bb'></div>");
            $(this).children().remove();
            dd = true;
        } else {
            if ($(this).index() == 1) {
                if ($(this).prev().children().length > 0) {
                    return false;
				}
            } else if ($(this).index() < 1) {
                return false;
			}
            $(this).prev().append("<div class='bb'></div>");
            $(this).children().remove();
        }
    }
    
})

