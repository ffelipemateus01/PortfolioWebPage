const form = document.getElementById("form");

const isEmailValid = (mail) => {
    // verifica se o email digitado é valido
    const hasSimbol = mail.includes("@");
    const parts = mail.split("@");
    return hasSimbol && parts[1] && parts[1].length > 0;
}

const isNameValid = (name) => {
    // verifica se o nome digitado é valido
    name = name.trim();
    if(name.length === 0) {
        return false;
    }
    // verifica se são apenas letras ou espaço
    return /^[A-Za-zÀ-ÿ\s]+$/.test(name);
}

const isMessageValid = (message) => {
    // verifica se mensagem digitada é valida
    return message.trim().length > 0;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;
    const errMessage = "Não foi possível enviar sua mensagem.";
    if(!isNameValid(name)){
        alert(`${errMessage} O nome digitado é inválido.`);
        return;
    }
    if (!isEmailValid(mail)) {
        alert(`${errMessage} O email digitado é inválido.`);
        return;
    }
    if(!isMessageValid(message)){
        alert(`${errMessage} A mensagem digitado é inválida.`);
        return;
    }
    const res = confirm("Após a confirmação sua mensagem será enviada. Deseja continuar?");
    if (res) {
        alert(`${name}, sua mensagem enviada com sucesso..`);
        // limpa formulário após sucesso no envio
        form.reset();
    }
});