var eif_setup_hcp_config = "appl/eif/home/eifadm/script/EIFEXP/HCP_SFTP_CONFIG/eif_setup_hcp_config.ksh";
var eif_setup_hcp_sftp_config = "/appl/eif/home/eifadm/script/EIFEXP/HCP_SFTP_CONFIG/eif_setup_hcp_sftp_config.ksh";
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
    EffectiveDay = document.getElementById("EffectiveDay").value;
    Env = document.getElementById("Env").value;

    console.log("Start generate()");
	eif_setup_hcp_config(Env,HcpID);
	console.log("End generate()");
}
	function eif_setup_hcp_config(Env,HcpID){
	    if (Env == "UAT"){
        var result = "";
        var result2 ="";
			for (let i = 1; i <= 2; i++) {
				result += eif_setup_hcp_config +" "+`-t "NEW" -h "${HcpID}" -p "1" -i "1" -a "19000101" -d "29000101" -e "${Env}" -s "P" -y "EXP"`+"<br>";		
				//console.log("result"+[i]+" : "+result + result2)
			}    
        document.getElementById("output").innerHTML = result;
        //console.log(result);
		}else if (Env == "PRD"){
       var result = "";
         var result2 ="";
        for (let i = 0; i <= 1; i++) {
			const env = ["P", "S"];
            result += eif_setup_hcp_config +" "+`-t "NEW" -h "${HcpID}" -p "1" -i "1" -a "19000101" -d "29000101" -e "${Env}" -s "${env[i]}" -y "EXP"`+"<br>";
            //console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("output").innerHTML = result;
        //console.log(result);
    }
	}

