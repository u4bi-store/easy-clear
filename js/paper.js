var dataArray = [];

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

document.addEventListener('DOMContentLoaded', function () {
    var box, li, label, removed, checked;
    
    box = document.getElementById('box');
	box.innerHTML='인터넷 사용기록 삭제';
    
    for(var i=0; i<data.length; i++){
        li = document.createElement('li');
        ul.appendChild(li);
        
        label = document.createElement('label');
        label.innerHTML=data[i].name;
        li.appendChild(label);

        dataArray[i] = document.createElement("input");
        dataArray[i].setAttribute("type", "checkbox");
        dataArray[i].setAttribute("value", data[i].key);
        dataArray[i].checked = data[i].value;
        
        label.appendChild(dataArray[i]);
    }
    
    removed=document.getElementById('removed');
    checked=document.getElementById('checked');
});
