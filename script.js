function resolution() {
    let result;
    let width;
    let height;
    width = screen.width
    height = screen.height
    if (width > height) {
        result = "ordinateur";
    } else {
        result = "téléphone";
    }
    alert(result);
}