var cache_paper = (function (){
    var instance;
    
    function init(){
      return{
        stat : false,
        on: function(){
          console.log('on test');
          instance.remove();
          instance.flag();
        },
        remove : function(){
          console.log('remove test');
        },
        flag : function(){
          console.log('flag test');
        }
      };
    }
    return {
      getInstance: function(){
        if(!instance)instance = init();
        return instance;
      }
    }
})();

var paper = cache_paper.getInstance();
paper.on();