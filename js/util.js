 <!--���� üũ�� ���� �Լ�-->
function isNumcheck(str) {
	for (i = 0; i < str.length; i++) {
		if (('0' <= str.charAt(i))&&(str.charAt(i) <= '9')){
				continue;
		}
		else {
				return false;
		}
	}
	return true;
}

<!--�ѱ� ����üũ�� ���� �Լ�-->
function CheckSpaces(strValue) {
	var flag=true;

	if (strValue!='') {
		for (var i=0; i < strValue.length; i++) {
			if (strValue.charAt(i) != ' ') {
				flag=false;
				break;
			}
		}
	}
	return flag;
}

<!--����� �Է°���-->
function Only_Number(obj,lan)
{
	var msg;
	var r = new RegExp(/\D/);
	if( r.test(obj.value))
	{
		if(lan == "en"){
			msg = "Input Only Number";		
		}else{
			msg = "���ڸ� �Է��� �ּ���.";
		}
		alert(msg);
		obj.value = "";
		obj.focus();
	}
}

function Only_Number(obj)
{
	var msg;
	var r = new RegExp(/\D/);
	if( r.test(obj.value))
	{
		alert("���ڸ� �Է��� �ּ���.");
		obj.value = "";
		obj.focus();
	}
}

<!--������ ���̸� üũ�ϱ� ���� �Լ�-->
function CheckLen(str,chk_len)
{
	var temp;
	
	var len = str.length;
	for(k=0;k<len;k++){
		temp = str.charAt(k);
		
		if (escape(temp).length > chk_len){
           continue;
        }
		else {
           return false;
        }
    }
    return true;	
}
<!--�˻��Ⱓ �Է°� üũ-->
function DateValidate(txtBegin_Date,txtEnd_Date)
{
	var begin_date = CheckDateFormat(txtBegin_Date.value); 
	if( begin_date == ""){
		txtBegin_Date.focus();
		return;
	}
	
	var end_date = CheckDateFormat(txtEnd_Date.value); 
	if(end_date == ""){
		txtEnd_Date.focus();
		return;
	}
	
	// ���۳�¥�� ����¥���� ū������ üũ
	if(eval(begin_date) > eval(end_date))
	{
		alert("���۳�¥�� ����¥���� �۰ų� ���ƾ��մϴ�.");
		return false;
	}
	return true;
}
function DateValidate(txtBegin_Date,txtBegin_Time,txtEnd_Date,txtEnd_Time)
{
	var begin_date = CheckDateFormat(txtBegin_Date.value); 
	if( begin_date == ""){
		txtBegin_Date.focus();
		return;
	}
	
	var begin_time = CheckTimeFormat(txtBegin_Time.value); 
	if(begin_time == ""){
		txtBegin_Time.focus();
		return;
	}

	var end_date = CheckDateFormat(txtEnd_Date.value); 
	if(end_date == ""){
		txtEnd_Date.focus();
		return;
	}
	
	var end_time = CheckTimeFormat(txtEnd_Time.value); 
	if(end_time == ""){
		txtEnd_Time.focus();
		return;
	}

	// ���۳�¥�� ����¥���� ū������ üũ
	var s_date = begin_date+begin_time;
	var e_date = end_date+end_time;

	if(eval(s_date) > eval(e_date))
	{
		alert("���۳�¥�� ����¥���� �۰ų� ���ƾ��մϴ�.");
		return false;
	}
	return true;
}

<!--��¥����üũ �Լ� -->
// 20080101 -> 2008-01-01 ������ �ٲ� �� ����
function Check_DateFormat(obj)
{
	var chk_date = obj.value;
	 
	if(chk_date.match(/\d{4}-\d{2}-\d{2}/g) == chk_date || chk_date.match(/\d{4}\d{2}\d{2}/g) == chk_date){
		if(chk_date.match(/\d{4}\d{2}\d{2}/g) == chk_date){
			return chk_date.substring(0,4)+"-"+chk_date.substring(4,6)+"-"+chk_date.substring(6);
		}else{
			return chk_date;
		}
	 }
	 else{
		alert("��¥������ ��ġ���� �ʽ��ϴ�. \r\n\r\n ex) 2008-01-01");
		obj.focus();
		return chk_date;
	}
}

<!--��¥����üũ �Լ�-->
function CheckDateFormat(chk_date)
{
	if(chk_date.match(/\d{4}-\d{2}-\d{2}/g) == chk_date || chk_date.match(/\d{4}\d{2}\d{2}/g) == chk_date){
		if(chk_date.match(/\d{4}-\d{2}-\d{2}/g) == chk_date){
			arr = new Array() ;
			arr = chk_date.split('-');
			
			ar1 = arr[0];
			ar2 = arr[1];
			ar3 = arr[2];
			chk_date = arr[0] + arr[1] + arr[2];
		}
		return chk_date;
	}else{
		alert("��¥������ ��ġ���� �ʽ��ϴ�. \r\n\r\n ex) 2008-01-01");
		return "";
	}
}

<!--�ð�����üũ �Լ� -->
// 000000 -> 00:00:00 ������ �ٲ� �� ����
function Check_TimeFormat(obj)
{
	var chk_time = obj.value;
	 
	if(chk_time.match(/\d{2}:\d{2}:\d{2}/g) == chk_time || chk_time.match(/\d{2}\d{2}\d{2}/g) == chk_time){
		if(chk_time.match(/\d{2}\d{2}\d{2}/g) == chk_time){
			return chk_time.substring(0,2)+":"+chk_time.substring(2,4)+":"+chk_time.substring(4);
		}else{
			return chk_time;
		}
	 }
	 else{
		alert("�ð������� ��ġ���� �ʽ��ϴ�. \r\n\r\n ex) 00:00:00");
		obj.focus();
		return chk_time;
	}
}

<!--�ð�����üũ �Լ�-->
function CheckTimeFormat(chk_time)
{
	if(chk_time.match(/\d{2}:\d{2}:\d{2}/g) == chk_time || chk_time.match(/\d{2}\d{2}\d{2}/g) == chk_time){
		if(chk_time.match(/\d{2}:\d{2}:\d{2}/g) == chk_time){
			arr = new Array() ;
			arr = chk_time.split(':');
			
			ar1 = arr[0];
			ar2 = arr[1];
			ar3 = arr[2];
			chk_time = arr[0] + arr[1] + arr[2];
		}
		return chk_time;
	}else{
		alert("�ð������� ��ġ���� �ʽ��ϴ�. \r\n\r\n ex) 12:00:00");
		return "";
	}
}

<!--���۳�¥, ����¥ üũ�ϱ� ���� �Լ�-->
function CheckDate(begin_date, end_date)
{
	var valid =0;
	// >>���۳�¥
	
	// null�� üũ
	if(begin_date != "")
	{
		valid += 1;
	}
	else
	{
		alert("���۳�¥�� �Է��ϼ���.");
		return false;
	}
	// ��¥���� üũ
	if(begin_date.match(/\d{4}-\d{2}-\d{2}/g) == begin_date)
	{
		if(begin_date.match(/\d{4}-\d{2}-\d{2}/g) == begin_date) // 2008-01-01 �� 20080101
		{
			arr = new Array() ;
			arr = begin_date.split('-');
			
			ar1 = arr[0];
			ar2 = arr[1];
			ar3 = arr[2];
			begin_date = arr[0] + arr[1] + arr[2];
		}
		valid += 1;
	}
	else
	{
		alert("���۳�¥������ ��ġ���� �ʽ��ϴ�. \n\r\n\r ex) 2008-01-01");
		return false;
	}
	// >>����¥
	// null�� üũ
	if(end_date != "")
	{
		valid += 1;
	}
	else
	{
		alert("����¥�� �Է��ϼ���.");
		return false;
	}
	// ��¥���� üũ
	if(end_date.match(/\d{4}-\d{2}-\d{2}/g) == end_date)
	{
		if(end_date.match(/\d{4}-\d{2}-\d{2}/g) == end_date)
		{
			arr = new Array() ;
			arr = end_date.split('-');
			
			ar1 = arr[0];
			ar2 = arr[1];
			ar3 = arr[2];
			end_date = arr[0] + arr[1] + arr[2];
		}
		valid += 1;
	}
	else
	{
		alert("����¥������ ��ġ���� �ʽ��ϴ�. \n\r\n\r ��) 2008-01-01");
		return false;
	}
	// ���۳�¥�� ����¥���� ū������ üũ
	if(begin_date <= end_date)
	{
		valid += 1;
	}
	else
	{
		alert("���۳�¥�� ����¥���� ���ų� �۾ƾ��մϴ�.");
		return false;
	}
}

function CheckTime(begin_time,begin_min,end_time,end_min)
{

	var valid = 0;
	
	// ���۽ð��� ���ð����� ū������ üũ
	//���۽ð�
	if(begin_min.length == 1 && begin_min < 10 )
	{
		alert("���� 00~59�� �Է��� �ּ���.");
		return false;
	}
	begin_time = begin_time + begin_min;
		
	//���ð�
	if(end_min.length == 1 && end_min < 10 )
	{
		alert("���� 00~59���Է��� �ּ���.");
		return false;
	}
	end_time = end_time + end_min;
	
	if(begin_time <= end_time)
	{
		valid += 1;
	}
	else
	{
		alert("���۽ð��� ���ð����� �۰ų� ���ƾ��մϴ�.");
		return false;
	}
	
	if(begin_min < 60)
	{
		valid += 1;
	}
	else
	{
		alert("���� 00~59���Է��� �ּ���.");
		return false;
	}
	if(end_min < 60)
	{
		valid += 1;
	}
	else
	{
		alert("���� 00~59���Է��� �ּ���.");
		return false;
	}
	
	if(valid > 0)
		return true;
}

function CheckYear(s_year,s_month,e_year,e_month)
{
	var valid =0;

	begin = s_year + s_month;
	end = e_year + e_month;
		
	// ���۽ð��� ���ð����� ū������ üũ
	if(begin <= end)
	{
		valid += 1;
	}
	else
	{
		alert("���۳���� ��������� �۰ų� ���ƾ��մϴ�.");
		return false;
	}
	if(valid > 0)
		return true;
}

<!--���۳�¥, ����¥ üũ�ϱ� ���� �Լ�-->
function Check_IP(obj)
{

	var ip = obj.value;
	
	if(ip.replace(" ", "") == "")
	{
		alert("IP �ּҸ� �Է��ϼ���.");
		obj.focus();
		return false;									
	} 

	if(ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){
	}
	else{
		alert("IP �ּҰ� �ùٸ��� �ʽ��ϴ�. ��) 127.0.0.1 ");
		obj.focus();
		return false;
	}
	
	return true;
}


var btallcheckbox = false;
function btcheckAllCheckbox( form, box_name ,button_name,btname1,btname2){ 
	btallcheckbox = !btallcheckbox;	
	for( var i = 0; i < form.length; i++ ){
		var e = form.elements[i];
		if(e.name == box_name) e.checked = btallcheckbox; 
	}  
	document.getElementById(button_name).src = (btallcheckbox) ? btname2 : btname1  
	return;
}


function submitMultiCheckboxForm( form, url, boxName, noSelMsg, confirmMsg ){
	var flag = checkListCheckBox( form, boxName,0);
	if(!flag){
		alert(noSelMsg);	
	}
	else{ 
		if(confirmMsg!="" && !confirm(confirmMsg)) return;   
		form.action = url;
		form.submit();
	}
}


function checkListCheckBox( form, box_name, check_limit ){
	var box_count = 0;
	var check_nums = form.elements.length;
	for( var i = 0; i < check_nums; i++ ){

		//alert(form.elements[i].name + "/" + box_name );

		if( form.elements[i].checked == true && form.elements[i].name == box_name){

			box_count++; 
		}
	} 
	
	

	if( box_count <= 0 ){
		return false; 
	}
	else{
		return true;
	}
}

//üũ������ �� �ش� OBJECT Ȱ��ȭ
function disabledToggle(chkobj,srhobj){ 
	srhobj.disabled = (chkobj.checked) ? 	false : true   
	if(!srhobj.disabled){ 
		if(srhobj.type!='select-one')srhobj.focus(); 
		srhobj.style.background="white";
	}
	else{
		srhobj.style.background="gainsboro";
	}
}		

//üũ������ �� �ش� OBJECT Ȱ��ȭ , ��Ȱ��ȭ�� �˻��� clear
function clearToggle(chkobj,srhobj){ 
	srhobj.disabled = (chkobj.checked) ? 	false : true   
	if(!srhobj.disabled){ 
		if(srhobj.type!='select-one')srhobj.focus(); 
		srhobj.style.background="white";
	}
	else{
		srhobj.style.background="gainsboro";
		srhobj.value = "";
	}
}		
 
var mailbox_win=0;
function open_window(url, width, height){
	var a = screen.width;
	var b = screen.height;
	var aleft = a/2 - 416/2;
	var atop = b/2 - 300/2;
 
	if(mailbox_win)
		if(!mailbox_win.closed) mailbox_win.close();

	mailbox_win = window.open( url, "mailbox_id", 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+aleft+', top='+atop+',screenX='+aleft+',screenY='+atop+'');
	mailbox_win.focus();
}


function open_window02(url, width, height){
	var a = screen.width;
	var b = screen.height;
	var aleft = a/2 - 416/2;
	var atop = b/2 - 300/2;
 
	if(mailbox_win)
		if(!mailbox_win.closed) mailbox_win.close();

	mailbox_win = open( url, "mailbox_id", 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+aleft+', top='+atop+',screenX='+aleft+',screenY='+atop+'');
	mailbox_win.focus();
}


var user_box = 0;
function open_UserReg(url){
	var a = screen.width;
	var b = screen.height;
	var width  = a;
	var height = b;
	var aleft = 0;
	var atop = 0;
 
	if(user_box)
		if(!user_box.closed) user_box.close();

	user_box = open( url, "box_id", 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=yes,width='+width+',height='+height+',left='+aleft+', top='+atop+',screenX='+aleft+',screenY='+atop+'');
	user_box.focus();
}



//������� üũ
function spacexf(obj){
	if (obj.value == "" || obj.value.replace(/(^ +)|( +$)/g,'') == "" ){
		obj.value = "";
		return false;
	}
	return true;
}	


// checkbox title ���� �Լ�
function spCheckboxTitleChange(obj,msgOn,msgOff,spTagId){  
	document.getElementById(spTagId).innerHTML = (eval(obj).checked) ? msgOn:msgOff;
}

<!--
function Open_Pop(url,intWidth,intHeight) { 
      window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=0,scrollbars=1") ;
}
//-->

  
//input text ���� �ڹٽ�ũ��Ʈ�� �Է±��ڼ� �����ϱ�
function ChkByte(objname,maxlength) { 

 var objstr = objname.value; // �Էµ� ���ڿ��� ���� ���� 
 var objstrlen = objstr.length; // ��ü���� 

 // �����ʱ�ȭ 
 var maxlen = maxlength; // ������ ���ڼ� �ִ�ũ�� 
 var i = 0; // for���� ��� 
 var bytesize = 0; // ����Ʈũ�� 
 var strlen = 0; // �Էµ� ���ڿ��� ũ��
 var onechar = ""; // char������ ����� �ʿ��� ���� 
 var objstr2 = ""; // ���� ���ڼ������� ������ �������ڿ�

 // �Էµ� ���ڿ��� �ѹ���Ʈ�� ���ϱ�
 for(i=0; i< objstrlen; i++) { 
  // �ѱ������� 
  onechar = objstr.charAt(i); 
  
  if (escape(onechar).length > 4) { 
   bytesize += 2;     // �ѱ��̸� 2�� ���Ѵ�. 
  } else {  
   bytesize++;      // �׹��� ���� 1�� ���Ѵ�.
  } 
  
  if(bytesize <= maxlen)  {   // ��ü ũ�Ⱑ maxlen�� ���������� 
   strlen = i + 1;     // 1�� ����
  }
 }

 // �ѹ���Ʈ���� ���� ���ڿ��� �ִ밪�� �ʰ��ϸ� 
 if(bytesize > maxlen) { 
  //alert( "���񿡼� ���� ���ڿ��� �ִ밪�� �ʰ��߽��ϴ�. \n�ʰ��� ������ �ڵ����� ���� �˴ϴ�."); 
  objstr2 = objstr.substr(0, strlen); 
  objname.value = objstr2; 
 } 
 objname.focus(); 
}  

function GetScreenTop(obj)
{
	if (obj.offsetParent == null)
	{
		return obj.clientTop; // + window.screenTop;
	}
	else
	{
		return GetScreenTop(obj.offsetParent) + obj.offsetTop;
	}
}
function GetScreenLeft(obj)
{
	if (obj.offsetParent == null)
	{
		return obj.clientLeft;// + window.screenLeft;
	}
	else
	{
		return GetScreenLeft(obj.offsetParent) + obj.offsetLeft;
	}
}				
/* -------------------------------------------------------------------------- */
/* ��� : ���ڿ��� Comma ����                                                 */
/* �Ķ���� ���� :                                                            */
/*        -  input : �Է°�                                                   */
/* -------------------------------------------------------------------------- */
function unComma(input) {
   var inputString = new String;
   var outputString = new String;
   var outputNumber = new Number;
   var counter = 0;
   if (input == '')
   {
	return 0
   }
   inputString=input;
   outputString='';
   for (counter=0;counter <inputString.length; counter++)
   {
      outputString += (inputString.charAt(counter) != ',' ?inputString.charAt(counter) : '');
   }
   outputNumber = parseFloat(outputString);
   return (outputNumber);
}

function currency(obj)
{
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		
	} else {
		alert("���ڸ� �Է��� �ּ���.");
		obj.value = "";
		obj.focus();
	}
}
function com(obj)
{
	obj.value = unComma(obj.value);
	obj.value = Comma(obj.value);
}
function Comma(input) {

  var inputString = new String;
  var outputString = new String;
  var counter = 0;
  var decimalPoint = 0;
  var end = 0;
  var modval = 0;

  inputString = input.toString();
  outputString = '';
  decimalPoint = inputString.indexOf('.', 1);

  if(decimalPoint == -1) {
     end = inputString.length - (inputString.charAt(0)=='0' ? 1:0);
     for (counter=1;counter <=inputString.length; counter++)
     {
        var modval =counter - Math.floor(counter/3)*3;
        outputString = (modval==0 && counter <end ? ',' : '') + inputString.charAt(inputString.length - counter) + outputString;
     }
  }
  else {
     end = decimalPoint - ( inputString.charAt(0)=='-' ? 1 :0);
     for (counter=1; counter <= decimalPoint ; counter++)
     {
        outputString = (counter==0  && counter <end ? ',' : '') +  inputString.charAt(decimalPoint - counter) + outputString;
     }
     for (counter=decimalPoint; counter < decimalPoint+3; counter++)
     {
        outputString += inputString.charAt(counter);
     }
 }
    return (outputString);
}