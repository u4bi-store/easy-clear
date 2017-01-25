var cache_paper = (function (){
    var instance;
    
    function init(){
      return{
        
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