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
    
	//console.log("Start generate()");
    //console.log("-->"+HcpID + EffectiveDay + Env);

    if (Env == "UAT"){
		
        var result = "";
        var result2 ="";
        for (let i = 1; i <= 2; i++) {
            //result += eif_setup_hcp_config +`-h "${HcpID}" -f "${EffectiveDay}" -s "P" "${i}" -e "${Env}"`+ "<br>";
			//result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "P" -y "EXP"';
			//result2 += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "S" -y "EXP"';
            //console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("output").innerHTML = result2;
        //console.log(result);
    }else if (Env == "PRD"){
       var result = "";
         var result2 ="";
        for (let i = 1; i <= 3; i++) {
            result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "P" -y "EXP"'+ "\n";
            result += eif_setup_hcp_config+"-t "+'"NEW"' +` -h "${HcpID}" -p "${sftp}" -i "${inbox}" -a `+'"19000101" -d "29000101" '+ `-e "${Env}"`+ ' -s "S" -y "EXP"'+ "\n";
			//console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("output").innerHTML = result;
        //console.log(result);
    }else if (Env != "PRD" || Env != "UAT"){
		document.getElementById("output").innerHTML = "Please input ENV";
	}
}

function reset(){
	result = "....";
	console.log(result);
	document.getElementById("output").innerHTML = result;
	document.getElementById("output1").innerHTML = result;
	document.getElementById("output2").innerHTML = result;
}
     
	  function downloadFile(){
         const link = document.createElement("a");
		 //document.getElementById("output").innerHTML = eif_setup_hcp_config;
         const content = document.getElementById("output").value;
		 console.log(content);
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "sample.txt";
         link.click();
         URL.revokeObjectURL(link.href);
      };
