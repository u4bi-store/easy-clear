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
            instance.stat = !instance.stat;
          
            var attribue ={ path: 'images/icon-cache_'+instance.stat+'.png'
            };
            chrome.browserAction.setIcon(attribue); 
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
chrome.commands.onCommand.addListener(paper.on);