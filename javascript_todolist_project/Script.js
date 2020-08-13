var totalItems=0;

function updateItemStatus(){
    var chId=this.id.replace('cb_','');
    var itemText=document.getElementById('item_'+chId);

    if(this.checked){
        itemText.className='checked';
    }
    else{
        itemText.className='';
    }

}

function addNewItem(list,itemText){
    totalItems++;

    var listItem=document.createElement("li");
    var checkBox=document.createElement('input');

    checkBox.type='checkBox';
    checkBox.id='cb_'+totalItems;
    checkBox.onclick=updateItemStatus;

    var span

    listItem.innerText=itemText;

    list.appendChild(listItem);

    
}

var btnNew=document.getElementById("inputText");
inputText.focus( );

inputText.onkeyup=function(event){

    if(event===13){

        var itemText=inputText.value;
    
        if(!itemText||itemText===""||itemText===" "){
            return false;
        }
        addNewItem(document.getElementById("todolist"),itemText);
        inputText.focuas();
        inputText.select();
    }

   
};


/*
function get_list(){
    if(window.event.keyCode==13){ //enter
        var input=document.getElementById("valin"); //id가 valin인 값
        var listplus=document.createElement("li"); //li 인 tag를 만든값
        listplus.innerHTML=input; // li의 태그를 만든 listplus에 id가 valin인 input이라는 값을 넣는다.
        document.getElementById("inlist").appendChild(listplus); // id 가 inlist인 곳에 listplus를 추가시킨다.
        document.getElementById("valin").value="";

        //listplus.innerHTML = "<a onclick=\'move_list(\""+input+"\");\'>"+input+"</a>";    
    
    }


}
*/
