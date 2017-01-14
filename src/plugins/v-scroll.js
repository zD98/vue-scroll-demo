;(function(){
    var vueScroll = {};
    function throttle(cb, delay){
        var last = 0;
        return function(){
            var cur = + new Date();
            var args = arguments;
            if(cur - last > delay){
                last = cur;
                cb.call(this, args)
            }
        }
    }
    function debounce(cb, time){
        let obj = {};
        obj.handle = null;
        return function(){
            var args = arguments;
            time = time || 150;
            clearTimeout(obj.handle);
            obj.handle = setTimeout(function(){
                cb.apply(this, args);
            },time);
        }
    }

    vueScroll.install = function (Vue){
        Vue.directive('scroll',{
            bind: function(el, binding){
                var value = binding.value,
                    methods = value.methods;

                var onScrolling = throttle(function(event){
                    
                    console.log('scrolling')
                    var obj = {};
                    obj.scrollY = window.scrollY;
                    var cb = methods['scrolling'];
                    if(Object.prototype.toString.call(cb) == '[object Function]'){
                        cb(obj);
                    }

                }, 150)
                var onAfterScroll = debounce(function(event){
                    console.log('after scroll')
                    var obj = {};
                    obj.scrollY = window.scrollY;
                    for(var key in methods){
                        var cb = methods['afterScroll'];
                        if(Object.prototype.toString.call(cb) == '[object Function]'){
                            cb(obj);
                        }
                    }
                })
                window.addEventListener('scroll', onScrolling);
                window.addEventListener('scroll', onAfterScroll);
                var last = 0;
                window.addEventListener('scroll', function(){
                    var now = +new Date();
                    console.log('scroll', now-last, window.scrollY);
                    last = now;
                })
            },
            update: function(){

            }
        });
    };

	if (typeof exports == 'object') {
		module.exports = vueScroll;
	} else if (typeof define == 'function' && define.amd) {
		define([], function () {
			return vueScroll
		})
	} else if (window.Vue) {
		window.vueScroll = vueScroll;
		Vue.use(vueScroll);
	}

})();
