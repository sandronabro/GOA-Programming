const form = document.getElementById("form")
const div = document.getElementById("parent")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const firstname = form.elements.firstname.value
    const lastname = form.elements.lastname.value

    const pNode = document.createElement("p")
    const textNode = document.createTextNode(firstname + " " + lastname)

    pNode.appendChild(textNode)
    div.appendChild(pNode)
})