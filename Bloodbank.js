//GlobalVariables
var Apositive;
var Bpositive;
var Opositive;
var ABpositive;
var Anegative;
var Bnegative;
var Onegative;
var ABnegative;
var Count;
var s;
var bloodGroup;
var ReqdBottleCount;
var ApCountbg;
var BpCountbg;
var OpCountbg;
var ABpCountbg;
var AnCountbg;
var BnCountbg;
var OnCountbg;
var ABnCountbg; 
var ApCountbc;
var BpCountbc;
var OpCountbc;
var ABpCountbc;
var AnCountbc;
var BnCountbc;
var OnCountbc;
var ABnCountbc;

    //Main Function
    function processing() //left div working 
    {   
        IsEmpty(); // checking for any empty field
        settingBottleCount(); //updating bottle count
        bottlesUpdated(Apositive,Bpositive,Opositive,ABpositive,Anegative,Bnegative,Onegative,ABnegative);
    	clearedValues();
    	
    }


    function IsEmpty() {
if  ((document.getElementById('A+').value =='') || (document.getElementById('B+').value == '') ||
    (document.getElementById('O+').value == '') || (document.getElementById('AB+').value == '')||
    (document.getElementById('A-').value == '') || (document.getElementById('B-').value == '') || 
    (document.getElementById('O-').value == '') || (document.getElementById('AB-').value == '')) 
    {
    	alert("Must fill all fields");
    }
    }//IsEmpty Function Ended

    function settingBottleCount() {
    	Apositive=parseInt(document.getElementById('A+').value);
    	Bpositive=parseInt(document.getElementById('B+').value);
    	Opositive=parseInt(document.getElementById('O+').value);
    	ABpositive=parseInt(document.getElementById('AB+').value);
    	Anegative=parseInt(document.getElementById('A-').value);
    	Bnegative=parseInt(document.getElementById('B-').value);
    	Onegative=parseInt(document.getElementById('O-').value);
    	ABnegative=parseInt(document.getElementById('AB-').value);
    }//settingBottleCount Function Ended

    function bottlesUpdated (Apositive,Bpositive,Opositive,ABpositive,Anegative,Bnegative,Onegative,ABnegative) {
    		
        document.getElementById('lblA+').innerHTML=Apositive;
    	document.getElementById('lblB+').innerHTML=Bpositive;
    	document.getElementById('lblO+').innerHTML=Opositive;
    	document.getElementById('lblAB+').innerHTML=ABpositive;
    	document.getElementById('lblA-').innerHTML=Anegative;
    	document.getElementById('lblB-').innerHTML=Bnegative;
    	document.getElementById('lblO-').innerHTML=Onegative;
    	document.getElementById('lblAB-').innerHTML=ABnegative;
    }//bottlesUpdated Function Ended

    function clearedValues() {
    	document.getElementById('A+').value="";
    	document.getElementById('B+').value="";
    	document.getElementById('O+').value="";
    	document.getElementById('AB+').value="";
    	document.getElementById('A-').value="";
    	document.getElementById('B-').value="";
    	document.getElementById('O-').value="";
    	document.getElementById('AB-').value="";
    }

    //right div working 
    function settingLabels () {

    // getting bloodGroups
    ApCountbg= document.getElementById('lbl').innerText;
    BpCountbg= document.getElementById('lbl1').innerText;
    OpCountbg= document.getElementById('lbl2').innerText;
    ABpCountbg= document.getElementById('lbl3').innerText;
    AnCountbg= document.getElementById('lbl4').innerText;
    BnCountbg= document.getElementById('lbl5').innerText;
    OnCountbg= document.getElementById('lbl6').innerText;
    ABnCountbg= document.getElementById('lbl7').innerText;
    // getting BottlesCount 
    ApCountbc= parseInt(document.getElementById('lblA+').innerHTML);
    BpCountbc= parseInt(document.getElementById('lblB+').innerHTML);
    OpCountbc= parseInt(document.getElementById('lblO+').innerHTML);
    ABpCountbc= parseInt(document.getElementById('lblAB+').innerHTML);
    AnCountbc= parseInt(document.getElementById('lblA-').innerHTML);
    BnCountbc= parseInt(document.getElementById('lblB-').innerHTML);
    OnCountbc= parseInt(document.getElementById('lblO-').innerHTML);
    ABnCountbc= parseInt(document.getElementById('lblAB-').innerHTML);

    s=document.getElementById("bloodSelection");
    bloodGroup=s.options[s.selectedIndex].text;
    ReqdBottleCount=parseInt(document.getElementById('reqdBottleCount').value);

    if((bloodGroup==="A+")&&(ApCountbc>=ReqdBottleCount))
    {
       	document.getElementById('lbl').style.color = 'red';
       	DragDropEvent();
    }
    else if((bloodGroup==="B+")&&(BpCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl1').style.color = 'red';
       	DragDropEvent();
    }
    else if((bloodGroup==="O+")&&(OpCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl2').style.color = 'red';
       	DragDropEvent();
    }
    else if((bloodGroup==="AB+")&&(ABpCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl3').style.color = 'red';
       	DragDropEvent();
    }
    else if((bloodGroup==="A-")&&(AnCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl4').style.color = 'red';
        DragDropEvent();
    }
    else if((bloodGroup==="B-")&&(BnCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl5').style.color = 'red';
       	DragDropEvent();
    }
    else if((bloodGroup==="O-")&&(OnCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl6').style.color = 'red';
        DragDropEvent();
    }
    else if((bloodGroup==="AB-")&&(ABnCountbc>=ReqdBottleCount))
    {
        document.getElementById('lbl7').style.color = 'red';
       	DragDropEvent();
    }
    else
    {
        alert("Sorry, we have not available required count of bottles");
    }
    }//settingLabels Function Ended

	function DragDropEvent() {
    //setting labels
    document.getElementById('labelBloodGroup').innerHTML=bloodGroup;
    document.getElementById('labelBottleCount').innerHTML=ReqdBottleCount;

    //drag and drop event perform
    var dragme = document.getElementById('BloodGroupdragme')
    var dropzone = document.getElementById('dropzone')
    dragme.addEventListener('dragstart',function(e){
    // dropzone.innerHTML = "drop here"
    })
    dropzone.addEventListener('dragover',function(e){
        e.preventDefault()
    })

    dropzone.addEventListener('drop',function(e){
    e.preventDefault()
    var val=document.getElementById('BloodGroupdragme').innerText;
    dropzone.innerHTML = val;
    var label1=document.getElementById('labelBloodGroup').innerText;
    document.getElementById('labelBloodGroup').innerHTML="";
    document.getElementById('labelBottleCount').innerHTML="";
        
    //decrement bottle count 
    if(bloodGroup==="A+")
    {
    	console.log(ApCountbc);
        var NewCountAp=ApCountbc- ReqdBottleCount;
        document.getElementById("lblA+").innerHTML= NewCountAp;
    }
    else if(bloodGroup==="B+") 
    {
        var NewCountBp=BpCountbc- ReqdBottleCount;
        document.getElementById('lblB+').innerHTML= NewCountBp;	
    }
    else if(bloodGroup==="O+")
    {
        var NewCountOp=OpCountbc- ReqdBottleCount;
        document.getElementById('lblO+').innerHTML= NewCountOp;	
    }
    else if(bloodGroup==="AB+")
    {
        var NewCountABp=ABpCountbc- ReqdBottleCount;
        document.getElementById('lblAB+').innerHTML= NewCountABp;	
    }
    else if(bloodGroup==="A-")
    {
        var NewCountAn=AnCountbc- ReqdBottleCount;
        document.getElementById('lblA-').innerHTML= NewCountAn;	
    }
    else if(bloodGroup==="B-")
    {
        var NewCountBn=BnCountbc- ReqdBottleCount;
        document.getElementById('lblB-').innerHTML= NewCountBn;	
    }
    else if(bloodGroup==="O-")
    {
        var NewCountOn=OnCountbc- ReqdBottleCount;
        document.getElementById('lblO-').innerHTML= NewCountOn;	
    }
    else if(bloodGroup==="AB-")
    {
        var NewCountABn=ABnCountbc- ReqdBottleCount;
        document.getElementById('lblAB-').innerHTML= NewCountABn;	
    }
    else
    alert("Incorrect Selection");

    })


    document.getElementById('btndrag').disabled=true;

} //DropDown Function Ended
     
         
    
   
   