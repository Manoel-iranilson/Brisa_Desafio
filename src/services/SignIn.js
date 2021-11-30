export default function signIn(email, senha) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Token: "tfr6uujc5r57irr75rdi7ft",
        email: email,
      });
    }, 2000);
  });
}
