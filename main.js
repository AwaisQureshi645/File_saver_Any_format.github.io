
const textarea = document.querySelector("textarea"),
    fileName = document.querySelector(".file_name"),
    select_menu = document.querySelector(".save-as select"),
    save_btn = document.querySelector(".btn");

save_btn.addEventListener("click", () => {

    const blob = new Blob([textarea.value], { type: select_menu.value });
    const fileURl = URL.createObjectURL(blob);
    const Link = document.createElement("a");
    Link.download = fileName.value;
    Link.href = fileURl;  
    Link.click();



})

select_menu.addEventListener("change", () => {

    const selectopation = select_menu.options[select_menu.selectedIndex].value

    console.log(select_menu.value);


})
