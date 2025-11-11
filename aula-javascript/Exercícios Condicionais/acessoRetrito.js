const usuarioCorreto = ('Vinicius');
const senhaCorreta = 12345;
const usuario = ('Vinicius');
const senha = 1234;

if(usuario === usuarioCorreto && senha === senhaCorreta) {
  console.log("Login bem-sucedido! Bem-vindo, " + usuario + "!");
}else{
  console.log("Erro: nome de usuário ou senha incorretos.");
}
