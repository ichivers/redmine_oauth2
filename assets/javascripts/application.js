window.addEventListener('load', () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let sso = params.sso;
  if(sso){
    console.log('sso')
    const loginForm = document.getElementById("login-form")
    loginForm.style.visibility = "hidden"
    const loginButton = document.getElementsByClassName("button-login")
    loginButton[0].style.visibility = "hidden"
    console.log('loginButton ', loginButton)
    loginButton[0].click()
  } else {
    console.log('no sso')
  }
})