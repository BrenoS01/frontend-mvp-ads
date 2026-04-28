document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página (comportamento padrão)
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailCorreto = "admin@ecoserra.com";
    const senhaCorreta = "123";

    if (email === emailCorreto && password === senhaCorreta) {
        alert("Login realizado com sucesso! Bem-vindo.");
        // Redireciona para a página principal ou painel
        window.location.href = "index.html"; 
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});