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
    console.log("-->"+HcpID + EffectiveDay + Env);

    //result = HcpID + EffectiveDay + Env;
    if (Env == "UAT"){
        var result = "";
        var result2 ="";
        for (let i = 1; i <= 2; i++) {
            result += `>XXX.sh -h "${HcpID}" -f "${EffectiveDay}" -s "P" "${i}" -e "${Env}"`+ "<br>";
            result2 += `>XXX.sh -h "${HcpID}" -f "${EffectiveDay}" -s "S" "${i}" -e "${Env}"`+ "<br>";
            //console.log("result"+[i]+" : "+result + result2)
        }    
        document.getElementById("output").innerHTML = result+result2;
        //console.log(result);
    }else if (Env == "PRD"){
       var result = "";
         var result2 ="";
        for (let i = 1; i <= 2; i++) {
            result  += ` >XXX.sh -h "${HcpID}" -f "${EffectiveDay}" -s "P" "${i}" -e "${Env}"\n`;
            result2 += ` >XXX.sh -h "${HcpID}" -f "${EffectiveDay}" -s "S" "${i}" -e "${Env}"\n`;
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


