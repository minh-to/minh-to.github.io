---
---
const regex= /height="[\d]{1,}"/gi;
window.onload = function () {
    document.querySelectorAll(".article").forEach((article) => {
        article.addEventListener("click", function (e) {
            // Get iframe, and resize it for the pop-up
            let embed = article.getElementsByClassName("embed-container")[0].innerHTML;
            let maxHeight = document.documentElement.clientHeight;
            embed = embed.replaceAll(regex, 'height=\"'+ maxHeight * 0.65 +'\"')
            let html = ``
                html += `
          <h4>${article.title}</h4>
        <div>
       ${embed}
        </div>
        `
            document.querySelector("#category-modal-title").innerText = e.target.innerText;
            document.querySelector("#category-modal-content").innerHTML = html;
            document.querySelector("#category-modal-bg").classList.toggle("open");
            document.querySelector("#category-modal").classList.toggle("open");
        });
    });

    document.querySelector("#category-modal-bg").addEventListener("click", function(){
        document.querySelector("#category-modal-title").innerText = "";
        document.querySelector("#category-modal-content").innerHTML = "";
        document.querySelector("#category-modal-bg").classList.toggle("open");
        document.querySelector("#category-modal").classList.toggle("open");
    })
};