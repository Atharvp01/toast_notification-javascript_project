const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener("click", () =>{
    createNotif();
});

function createNotif(){
    const notification = document.createElement("div");
    notification.classList.add("toast");
    container.appendChild(notification);
    notification.innerText = ("This Challenge is dope!!");
    setTimeout(() => {
        notification.remove();
    }, 3000);
};