document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let result = document.getElementById("result"); // текст ошибки/успеха

    if (name === "" || surname === "" || phone === "") {
        result.style.color = "red";
        result.textContent = "Пожалуйста, заполните все поля.";
        return;
    }

    let phonePattern = /^\+375\s?(25|29|33|44)\s?\d{3}\s?\d{2}\s?\d{2}$/;

    if (!phonePattern.test(phone)) {
        result.style.color = "red";
        result.textContent = "Введите корректный номер в формате +375 XX XXX XX XX";
        return;
    }

    result.style.color = "green";
    result.textContent = "Ваши данные успешно отправлены! Мы Вам перезвоним";

    let xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<order>' +
        '<name>' + name + '</name>' +
        '<surname>' + surname + '</surname>' +
        '<phone>' + phone + '</phone>' +
    '</order>';

console.log(xml);
     let blob = new Blob([xml], { type: "text/xml" }); // Blob — создаёт файл в памяти браузера
     let link = document.createElement("a");
     link.href = URL.createObjectURL(blob);
     link.download = "order.xml";
     link.click();

    document.getElementById("orderForm").reset();
});
