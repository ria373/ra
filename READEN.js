function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // 事前に設定されたユーザー名とパスワード
    const correctUsername = "testuser";
    const correctPassword = "password";

    if (username === correctUsername && password === correctPassword) {
        // ログイン成功
        messageDiv.textContent = "ログイン成功！";
        // ログイン後に行いたい処理（例：ページ遷移）
        window.location.href = "welcome.html"; // welcome.htmlに遷移
    } else {
        // ログイン失敗
        messageDiv.textContent = "ユーザー名またはパスワードが間違っています。";
    }
}
