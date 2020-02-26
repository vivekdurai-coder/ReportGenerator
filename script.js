
// Basic Information Function 
function basic_info(){
    let To_Name = "Hi "+document.getElementById('to_name').value+",";
    let Report_Date = "<br>DATE: "+document.getElementById('report_date').value+" [INDIAN DATE]";
    let Report_Time = "<br>TIME: "+document.getElementById('report_from').value+" TO "+document.getElementById('report_to').value+"[PST]"
    document.getElementById("basic_information").innerHTML = To_Name+Report_Date+Report_Time;
}
// Clear Data Of Basic Information Function 
function clear_basic(){
    document.getElementById("basic_information").innerHTML = "";
}
//*************************************************************************************************************/
// Analyst Logged in Function 
function analyst_loggedin(){
    document.getElementById('Title1').removeAttribute("hidden");
    document.getElementById('login_info').removeAttribute("hidden");
    let analyst_name = document.getElementById('agent_name').value;
    let analyst_id = document.getElementById('agent_login_id').value;
    let analyst_extension = document.getElementById('agent_extension').value;
    document.getElementById('login_info').innerHTML +=  "<tr><td>"+analyst_name+"</td><td>"+analyst_id+"</td><td>"+analyst_extension+"</td></tr>";
}
// Clear Data Of Analyst Logged in Function 
function clear_loggedin(){
    document.getElementById('login_info').innerHTML = "<tr><th> AGENT NAME </th><th> LOGIN ID </th><th> EXTENSION </th></tr>";
}
//*************************************************************************************************************/
//Break Information Function 
function break_result(){
    document.getElementById('break_result').removeAttribute("hidden");
    document.getElementById('Title2').removeAttribute("hidden");
    let name = document.getElementById('break_name').value ; 
    let from = document.getElementById('break_from').value ;
    let to = document.getElementById('break_to').value ;
    let break_type = document.getElementById('break_type').value ;
    document.getElementById('break_result').innerHTML += "<tr><td>"+name+"</td><td>"+from+"-"+to+"</td><td>"+break_type+"</td></tr>";

}
// Clear Data Of Break Information 
function clear_break(){
    document.getElementById("break_result").innerHTML = "<tr><th>NAME</th><th>TIME</th><th>TYPE</th></tr>";
}
//******************************************************/
// Long Call Information Function 
function long_call(){
    document.getElementById('Title3').removeAttribute("hidden");
    document.getElementById('longcall_result').removeAttribute("hidden");
    let Tnumber = document.getElementById('TicketNumber').value ; 
    let AName = document.getElementById('Aname').value ;
    let Reason = document.getElementById('Reason').value ;
    document.getElementById('longcall_result').innerHTML +=  "<tr><td>"+Tnumber+"</td><td>"+AName+"</td><td>"+Reason+"</td></tr>";
}
// Clear Data Of Long Call Information 
function clear_Long(){
    document.getElementById("longcall_result").innerHTML = "<tr><th>TICKET NUMBER</th><th>ANALYST NAME</th><th>REASON</th></tr>";
}
//********************************************************************************************/
// Abandon Information Function 
function Abandon_Info(){
    document.getElementById('Title4').removeAttribute("hidden");
    document.getElementById('abandon_result').removeAttribute("hidden");
    let Abandon_Detail = document.getElementById("Abandon").value;
    document.getElementById('abandon_result').innerHTML = Abandon_Detail;
}
// Clear Data Of Abandon Information
function clear_Abandon(){
    document.getElementById("abandon_result").innerHTML = "";
}
//*********************************************************************************/
// Note Information Function 

function Note(){
    document.getElementById('Title0').style.display = "block";
    document.getElementById('Note_Result').removeAttribute("hidden");
    let Important_Note = document.getElementById("Note").value;
    document.getElementById('Note_Result').innerHTML = Important_Note;
}
//Clear Note Information function
function clear_Note(){
    document.getElementById('Note_Result').innerHTML = " ";
    document.getElementById('Title0').style.display = "none";
}

//*****************END***********************/
