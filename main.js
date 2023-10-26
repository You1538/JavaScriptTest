//店舗情報管理
let result;

// JSONファイルを開く
function readJSON(data){
    let htmldoc = "<table>";
    htmldoc += "<caption>" + data.caption + "</caption>";

    result = document.getElementById("result");

    for(let member of data.members){
        htmldoc += "<tr><td>"+ member.name + "</td><td>" + member.type+"</td></tr>"
    }

    htmldoc += "</table>"

    console.log(htmldoc);
    result.innerHTML = htmldoc;
}