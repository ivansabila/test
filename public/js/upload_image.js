const uploadButton = document.querySelector(".upload")
const preview = document.querySelector(".preview")

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0])
    console.log("🚀 ~ uploadButton.files[0]:", uploadButton.files[0])
    reader.onload= () => {
        preview.setAttribute("src", reader.result);
    }
}
