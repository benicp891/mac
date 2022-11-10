var eif_setup_hcp_config = "/appl/eif/home/eifadm/script/EIFEXP/HCP_SFTP_CONFIG/eif_setup_hcp_config.ksh ";
var sftp_config = "/appl/eif/home/eifadm/script/EIFEXP/HCP_SFTP_CONFIG/eif_setup_hcp_sftp_config.ksh";
var eif_setup_hcp_job_control = "/appl/eif/home/eifadm/script/EIFEXP/HCP_SFTP_CONFIG/eif_setup_hcp_job_control.ksh";

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

    textarea = document.querySelector("#result");
        textarea.addEventListener('input', autoResize, false);
      
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }

	
function generate() {
    HcpID = document.getElementById("HcpID").value;
	sftp = "0";
	inbox = "1";
	Env = document.getElementById("Env").value;
	
    EffectiveDay = document.getElementById("EffectiveDay").value;
    

    console.log("Start generate()");
    console.log("-->"+HcpID + EffectiveDay + Env);

    //result = HcpID + EffectiveDay + Env;
    if (Env == "UAT"){
		
        var result = "";
        var result2 ="";
        for (let i = 1; i <= 1; i++) {
            //result += eif_setup_hcp_config +`-h "${HcpID}" -f "${EffectiveDay}" -s "P" "${i}" -e "${Env}"`+ "<br>";
			
			result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "P" -y "EXP";';
            //console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("output").innerHTML = result+result2;
        //console.log(result);
    }else if (Env == "PRD"){
       var result = "";
         var result2 ="";
        for (let i = 1; i <= 1; i++) {
            result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "P" -y "EXP"\n';
            result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "S" -y "EXP"\n';
			//console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("result").innerHTML = result+result2;
        document.getElementById("output").innerHTML = result+result2;
        //console.log(result);
    }
    /*
    if (HcpID.length==0 || EffectiveDay.length==0 || Env.length==0)
        console.log(" null ");
        return;
        */
    //result = `　　${HcpId}  ===  ${EffectiveDay}是怎么回事呢？${Env}\r\n`;

   

    //document.getElementById("result").value = result;
    //auto_grow(document.getElementById("result"));


}    /*
    if (HcpId.length==0 || EffectiveDay.length==0 || Env.length==0)
        return;
    result = `　　${HcpId}  ===  ${EffectiveDay}是怎么回事呢？${Env}\r\n`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
    */


