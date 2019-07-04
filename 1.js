<<<<<<< .mine
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+9Ik":function(t,n,r){var e=r("QtgR");"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(e,a);e.locals&&(t.exports=e.locals)},C1bL:function(t,n,r){"use strict";r.r(n);var e=r("L2JU");function a(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var i={name:"CandidateLearningHistory",validations:{},computed:function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(n){a(t,n,r[n])})}return t}({},Object(e.b)({learningHistories:function(t){return t.candidate.learningHistories}})),data:function(){return{arrLearning:[{description:""}]}},watch:{"learningHistories.data":function(t){if(this.arrLearning=[],null!=t&&_.isArray(t))for(var n=0;n<t.length;n++)this.arrLearning.push(t[n].description);this.arrLearning.push("")}},mounted:function(){this.learningHistoryGet()},methods:{learningHistoryGet:function(){this.$store.dispatch("candidate/learningHistoryGet",{})},addMore:function(){for(var t=!0,n=0;n<this.arrLearning.length;n++)if(null==this.arrLearning[n]||this.arrLearning[n].length<=0){t=!1;break}t&&this.arrLearning.push("")},onSave:function(){for(var t=[],n=0;n<this.arrLearning.length;n++){var r=this.arrLearning[n];null!=r&&r.trim().length>0&&t.push({description:r.trim()})}this.$store.dispatch("candidate/learningHistorySave",{learningHistorys:t})},onRemove:function(t){this.arrLearning.splice(t,1)}}},s=(r("XRgv"),r("KHd+")),o=Object(s.a)(i,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"ab"},[r("div",{staticClass:"head text-center"},[r("img",{staticClass:"img-fluid mb-3",attrs:{src:"/imgs-fix/about7.png"}}),t._v(" "),r("p",[t._v(" "+t._s(t.$t("jwork.academy_background")))])]),t._v(" "),r("div",{staticClass:"content px-4"},[r("div",{staticClass:"about"},[t._l(t.arrLearning,function(n,e){return r("div",{key:e,staticClass:"wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.arrLearning[e],expression:"arrLearning[w]"}],staticClass:"form-control about input-text",attrs:{placeholder:t.$t("jwork.academy_background"),type:"text"},domProps:{value:t.arrLearning[e]},on:{input:function(n){n.target.composing||t.$set(t.arrLearning,e,n.target.value)}}}),t._v(" "),null!=t.arrLearning[e]&&t.arrLearning[e].length>0?r("button",{staticClass:"close btn-circle btn-danger",attrs:{type:"button","aria-label":"Close"},on:{click:function(n){return n.preventDefault(),t.onRemove(e)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()])}),t._v(" "),r("div",{staticClass:"add",on:{click:function(n){return n.preventDefault(),t.addMore(n)}}},[r("i",{staticClass:"fas fa-plus-circle"}),t._v(" "),r("span",[t._v(t._s(t.$t("jwork.more_learning_history")))])])],2)]),t._v(" "),r("div",{staticClass:"text-center save"},[r("button",{staticClass:"btn btn-view-more",attrs:{role:"button"},on:{click:t.onSave}},[r("i",{staticClass:"fas fa-check mr-2"}),t._v("  "+t._s(t.$t("jwork.Save"))+" \n        ")])])])},[],!1,null,null,null);n.default=o.exports},QtgR:function(t,n,r){(t.exports=r("I1BE")(!1)).push([t.i,"\n.about button.btn-circle{\r\n    display: none;\n}\n.about:hover button.btn-circle{\r\n    display: block;\n}\n.wrap{\r\n    position: relative;\n}\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    margin: -15px;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 16px;\n}\r\n",""])},XRgv:function(t,n,r){"use strict";var e=r("+9Ik");r.n(e).a}}]);














































































































































































































































































































































































































































































































































































































































































































































































































































































































=======

bookmark();

function toggleNav() {
    $('#navbarSupportedContent').toggleClass('show');
}

function editCompany(){
    $('.popup-edit-company').addClass('show');
}
function CloseEditCompany(){
    $('.popup-edit-company').removeClass('show');
}  

function advSearch(){
    $('.advanced-search').toggleClass('show');
}
function showTypeJob(){
    
    $('#type .list .item .detail').toggleClass('d-none');
}
function selectLocation(){
    $('.popup-select-location').addClass('show');
}
function CloseselectLocation(){
    $('.popup-select-location').removeClass('show');
}  
// hover map

function hoverpath(){
    $('.hokkaido').hover(function () {
        $('.hokkaido').attr('fill', '#ccd82f');
        $('.hokkaido').find('.area-name').css('color', '#ccd82f');
    }, function () {
        $('.hokkaido').attr('fill', '#ecf0b7');
        $('.hokkaido').find('.area-name').css('color', '#acb357');
    });

    $('.tohoku').hover(function () {
        $('.tohoku').attr('fill', '#c6494e');
        $('.tohoku').find('.area-name').css('color', '#c6494e');
    }, function () {
        $('.tohoku').attr('fill', '#ff6b3a');
        $('.tohoku').find('.area-name').css('color', '#ff6b3a');
    });
    
    $('.kanto').hover(function () {
        $('.kanto').attr('fill', '#94deff');
        $('.kanto').find('.area-name').css('color', '#94deff');
    }, function () {
        $('.kanto').attr('fill', '#b7f0e8');
        $('.kanto').find('.area-name').css('color', '#85c5bc');
    });
    $('.chuubu').hover(function () {
        $('.chuubu').attr('fill', '#5fbcff');
        $('.chuubu').find('.area-name').css('color', '#5fbcff');
    }, function () {
        $('.chuubu').attr('fill', '#8fbcef');
        $('.chuubu').find('.area-name').css('color', '#537eaf');
    });
    $('.kansai').hover(function () {
        $('.kansai').attr('fill', '#31b53b');
        $('.kansai').find('.area-name').css('color', '#31b53b');
    }, function () {
        $('.kansai').attr('fill', 'lightgreen');
        $('.kansai').find('.area-name').css('color', '#64a764');

    });

    $('.chugoku').hover(function () {
        $('.chugoku').attr('fill', '#9796ce');
        $('.chugoku').find('.area-name').css('color', '#9796ce');
    }, function () {
        $('.chugoku').attr('fill', '#b7b6de');
        $('.chugoku').find('.area-name').css('color', '#c5c3ff');
    });
    $('.shikoku').hover(function () {
        $('.shikoku').attr('fill', '#e26d90');
        $('.shikoku').find('.area-name').css('color', '#e26d90');
    }, function () {
        $('.shikoku').attr('fill', '#63d9ff');
        $('.shikoku').find('.area-name').css('color', '#63d9ff');
    });
    $('.kyushu').hover(function () {
        $('.kyushu').attr('fill', '#9a47a9');
        $('.kyushu').find('.area-name').css('color', '#9a47a9');
    }, function () {
        $('.kyushu').attr('fill', '#ffa7b1');
        $('.kyushu').find('.area-name').css('color', '#9a787c');
    });
};


function sliderListJobHome() {
    var sliderListJob1 = new Swiper('.list-job.list-1 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-1 .next-job',
            prevEl: '.list-job.list-1 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob2 = new Swiper('.list-job.list-2 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-2 .next-job',
            prevEl: '.list-job.list-2 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob3 = new Swiper('.list-job.list-3 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-3 .next-job',
            prevEl: '.list-job.list-3 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob4 = new Swiper('.list-job.list-4 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-4 .next-job',
            prevEl: '.list-job.list-4 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob5 = new Swiper('.list-job.list-5 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-5 .next-job',
            prevEl: '.list-job.list-5 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob6 = new Swiper('.list-job.list-6 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-6 .next-job',
            prevEl: '.list-job.list-6 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob7 = new Swiper('.list-job.list-7 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-7 .next-job',
            prevEl: '.list-job.list-7 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob8 = new Swiper('.list-job.list-8 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-8 .next-job',
            prevEl: '.list-job.list-8 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob9 = new Swiper('.list-job.list-9 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-9 .next-job',
            prevEl: '.list-job.list-9 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob10 = new Swiper('.list-job.list-10 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-10 .next-job',
            prevEl: '.list-job.list-10 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
    var sliderListJob11 = new Swiper('.list-job.list-11 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.list-job.list-11 .next-job',
            prevEl: '.list-job.list-11 .prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
};

function sliderListJob1() {
    var sliderListJob = new Swiper('.list-job-carousel', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 600,
        autoplay: false,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '#next-job',
            prevEl: '#prev-job',
        },

        breakpoints: {
            // when window width is <= 320px
            567: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 10,
            },
        }
    });
};

function sliderClient() {
    var sliderClient = new Swiper('#client .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 40,
        autoplay: true,
        loop: true,
        speed: 400,


        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '#next-client',
            prevEl: '#prev-client',
        },

        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            567: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
};

//to 
function scrollBlockFilter() {
    $('.heading').click(function () {
        $(this).find('.fa-angle-down').toggleClass('fa-angle-up');
       $(this).next('.collapse').toggleClass('show');
        return false;
    });

};

//on click icon star
function bookmark() {
    $('.fa-star').click(function () {
        $(this).toggleClass('bookmark');
    })
};


function tabFilter1(obj) {
    $('.filter-banner .nav-tabs .nav-link').removeClass('active');
    $(obj).addClass('active');
    var id = $(obj).attr('href');
    $('.filter-banner .tab-pane').removeClass('active');
    $('.filter-banner' + ' ' + id).addClass('active');
};

$('.filter-banner .nav-tabs .nav-link').click(function () {
    tabFilter1(this);
    return false;
});

function tabFilter2(obj) {
    $('#tab-filter-2 .nav-tabs .nav-link').removeClass('active');
    $(obj).addClass('active');
    var id = $(obj).attr('href');
    $('#tab-filter-2 .tab-pane').removeClass('active');
    $('#tab-filter-2' + ' ' + id).addClass('active');
};

$('#tab-filter-2 .nav-tabs .nav-link').click(function () {
    tabFilter2(this);
    return false;
});

function tabInfo(obj) {
    var id = $(obj).attr('id');
    $('.candi-profile .ab').addClass('d-none');
    $('.candi-profile' +' '+'#'+id+'.ab').removeClass('d-none');
   
};

$('.candi-profile .list-info li').click(function () {
    tabInfo(this);
    return false;
});


function closePopup() {
    $('body').removeClass('show-popup-signin');
};

//popup gallery - page detail job
function popupGallery() {
    $('body').addClass('show-popup-gallery');
};
function closeGallery() {
    $('body').removeClass('show-popup-gallery');
};







function sliderGallery() {
var sliderGalleryThumb = new Swiper('.popup-gallery .thumb', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        567: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }


});
    var sliderGallery = new Swiper('.popup-gallery .slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },

        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
        },
        thumbs: {
            swiper: sliderGalleryThumb
        }
    });

}




function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


function tabListCandi(obj) {
    $('.wrap-new-candidate .list-candi .item').removeClass('active');
    $(obj).addClass('active');
    var id = $(obj).attr('href');
    $('.wrap-new-candidate ul').addClass('d-none');
    $('.wrap-new-candidate'+' '+id).removeClass('d-none');
   
};

$('.wrap-new-candidate .list-candi .item').click(function () {
    tabListCandi(this);
    return false;
});


"use strict";

//chat
var conversation = $('.conversation');
var lastSentMessages = $('.messages--sent:last-child');
var textbar = $('.text-bar__field input');
var textForm = $('#form-message');
var thumber = $('.text-bar__thumb');

var scrollTop = $(window).scrollTop();



var Message = {
	currentText: "test",
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		textForm.submit(function( event ) {
		  	event.preventDefault();
			base.createGroup();
			base.saveText();
			if(base.currentText != ''){
				base.createMessage();
				base.scrollDown();
			}
		});
	},
	saveText: function(){
		var base = this;
		base.currentText = textbar.val();
		textbar.val('');
	},
	createMessage: function(){
		var base = this;
		lastSentMessages.append($('<div/>')
								.addClass('message')
								.text(base.currentText));
	},
	createGroup: function(){
		if($('.messages:last-child').hasClass('messages--received')){
			conversation.append($('<div/>')
							.addClass('messages messages--sent'));
			lastSentMessages = $('.messages--sent:last-child');
		}
	},
	scrollDown: function(){
		var base = this;
		conversation.scrollTop(conversation[0].scrollHeight);
		conversation.stop().animate({
			scrollTop: conversation[0].scrollHeight
		}, 500);
	}
};

var Thumb = {
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		thumber.on("mousedown", function(){
			Message.createGroup();
			base.create();
			base.expand();
		});
	},
	expand: function(){
		var base = this;
		var thisThumb = lastSentMessages.find('.message:last-child');
		var size = 20;
		
		var expandInterval = setInterval(function(){ expandTimer() }, 30);
		
		function stopExpand(){
			base.stopWiggle();
			clearInterval(expandInterval);
		}
		
		var firstExpand = false;
		function expandTimer() {
			
			if(size >= 130){
				stopExpand();
				base.remove();
			}
			else{
				if(size>50){
					size += 2;
					thisThumb.removeClass('anim-wiggle');
					thisThumb.addClass('anim-wiggle-2');
				}
				else{
					size += 1;
					thisThumb.addClass()
				}
				thisThumb.width(size);
				thisThumb.height(size);
				if(firstExpand){
					conversation.scrollTop(conversation[0].scrollHeight);
				}
				else{
					Message.scrollDown();
					firstExpand = true;
				}
			}
		}
		
		thumber.on("mouseup", function(){
			stopExpand();
		});
	},
	create: function(){
		lastSentMessages.append(
			$('<div/>').addClass('message message--thumb thumb anim-wiggle')
		);
	},
	remove: function(){
		lastSentMessages.find('.message:last-child').animate({
			width: 0,
			height: 0
		}, 300);
		setTimeout(function(){
			lastSentMessages.find('.message:last-child').remove();
		}, 300);
	},
	stopWiggle: function(){
		lastSentMessages.find('.message').removeClass('anim-wiggle');
		lastSentMessages.find('.message').removeClass('anim-wiggle-2');
	}
	
}


var newMessage = Object.create(Message);
newMessage.init();

var newThumb = Object.create(Thumb);
newThumb.init();
 


function hideChat(){
    $('.chat.screen').toggleClass('hide');
}
function exitChat(){
    $('.chat.screen').toggleClass('d-none');
}

function listCandiNew(){
    $('.wrap-interview-big').addClass('d-none');
    $('.wrap-interview-big.new').removeClass('d-none');
    $('.chat.screen').removeClass('d-none');
}

function listCandiInterview(){
    $('.wrap-interview-big').addClass('d-none');
    $('.wrap-interview-big.interview').removeClass('d-none');
    $('.chat.screen').removeClass('d-none');
}


function listCandiDecline(){
    $('.wrap-interview-big').addClass('d-none');
    $('.wrap-interview-big.decline').removeClass('d-none');
    $('.chat.screen').removeClass('d-none');
}


$('.btn-dropdown').click(function(){
    $('.jw-select').removeClass('show');
    $(this).next('.jw-select').addClass('show');
   
});


  $(document).click(function(event) {
    if (!$(event.target).closest(".jw-select-d,.search-list-job").length) {
      $("body").find(".jw-select").removeClass("show");
    }
  });



function option(){
    var sa=$(this).text();
    $('button.luong').text('900円以上');
}

function showMap(){
    $(".list-rs").find(".list-row").toggleClass("list-grid");
    $(".list-rs").find(".map").toggleClass("d-none");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function popupShare(){
    $('.popup-share').addClass('d-block');
}

function closePopupShare(){
    $('.popup-share').removeClass('d-block');
}

function popupApply(){
    $('.popup-apply').addClass('d-block');
}

function closePopupApply(){
    $('.popup-apply').removeClass('d-block');
}

function comfirmApply(){
    confirm('LABOROはあなたのプロフィールと応募理由を求人者に送ります。');
}
>>>>>>> .theirs
