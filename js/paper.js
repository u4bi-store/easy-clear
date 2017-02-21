var data =[
    {name: "응용 프로그램 캐시" ,key: "appcache",    value: false},
    {name: "캐시된 이미지,파일" ,key: "cache",       value: false},
    {name: "쿠키"            ,key: "cookies",     value: false},
    {name: "다운로드 기록"     ,key: "downloads",   value: false},
    {name: "파일 시스템즈"     ,key: "fileSystems", value: false},
    {name: "폼 데이터"        ,key: "formData",    value: false},
    {name: "히스토리 기록"     ,key: "history",     value: false},
    {name: "indexedDB"      ,key: "indexedDB",   value: false},
    {name: "로컬스토리지"      ,key: "localStorage",value: false},
    {name: "플러그인 데이터"   ,key: "pluginData",  value: false},
    {name: "비밀번호"         ,key: "passwords",   value: false},
    {name: "webSQL"         ,key: "webSQL",      value: false}
];

var PaperController = function(data){
    this.data = data;
};

PaperController.prototype = {
    data : null,
    dataArray : [],  
    fixCheck : function(bool){
        console.log('fixCheck : '+bool);
      
        for(var i=0; i<this.data.length; i++){
          this.data[i].type = bool;
          this.dataArray[i].checked = this.data[i].type;
          
          this.save(this.data[i].key, this.data[i].type);
        }
    },
    save : function(key, value){
        console.log('save : '+key+' '+value);
        localStorage.setItem(key,value);
    }
};


document.addEventListener('DOMContentLoaded', function () {
    
    var paper = new PaperController(data);

    for(var i=0; i<data.length; i++){
        var temp = localStorage[data[i].key];
        if(temp != undefined && temp != false)paper.data[i].value = JSON.parse(temp);
    }
  
    var box, li, ul, label, removed, checked;
    
    box = document.getElementById('box');

    ul = document.createElement('ul');
    box.appendChild(ul);
    
    for(var i=0; i<paper.data.length; i++){
        li = document.createElement('li');
        ul.appendChild(li);
        
        label = document.createElement('label');
        label.innerHTML=paper.data[i].name;
        label.setAttribute("For", paper.data[i].key);
        li.appendChild(label);

        paper.dataArray[i] = document.createElement("input");
        paper.dataArray[i].setAttribute("type", "checkbox");
        paper.dataArray[i].setAttribute("value", paper.data[i].key);
        paper.dataArray[i].setAttribute("id", paper.data[i].key);
        paper.dataArray[i].checked = paper.data[i].value;
        paper.dataArray[i].onclick=function(e){
          paper.save(e.target.attributes[1].nodeValue, e.target.checked);}; 
      
        label.appendChild(paper.dataArray[i]);
    }
    
    removed=document.getElementById('removed');
    checked=document.getElementById('checked');
    removed.onclick=function(){
      paper.fixCheck(false);};
    checked.onclick=function(){
      paper.fixCheck(true);};
});
