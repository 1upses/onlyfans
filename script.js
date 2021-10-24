function resolution() {
    let result;
    let width;
    let height;
    width = screen.width
    height = screen.height
    if (width > height) {
        result = false;
    } else {
        result = true;
    }
    return(result);
}

if (resolution()){
    document.getElementById("change").src = "phone.png";
}