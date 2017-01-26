var cache_paper = (function (){
    var instance;
    var data = localStorage;
    
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
          
            var attribue =[
              {"since": 0},
              {
                "appcache"    :JSON.parse(data['appcache']),
                "cache"       :JSON.parse(data['cache']),
                "cookies"     :JSON.parse(data['cookies']),
                "downloads"   :JSON.parse(data['downloads']),
                "fileSystems" :JSON.parse(data['fileSystems']),
                "formData"    :JSON.parse(data['formData']),
                "history"     :JSON.parse(data['history']),
                "indexedDB"   :JSON.parse(data['indexedDB']),
                "localStorage":JSON.parse(data['localStorage']),
                "pluginData"  :JSON.parse(data['pluginData']),
                "passwords"   :JSON.parse(data['passwords']),
                "webSQL"      :JSON.parse(data['webSQL'])
              }
            ];
            chrome.browsingData.remove(attribue, instance.flag);
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