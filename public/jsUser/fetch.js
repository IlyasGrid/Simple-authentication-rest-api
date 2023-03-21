const register = async (user) => {

    await fetch('/user/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then(response=>{
      
      if(response.status !=200){
        response.text().then(text=>alert(text))
      }
    })
}

const login = async (user) => {

    await fetch('/user/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then(response => {
        if (response.redirected) {
          window.location.href = response.url;
        }
        if(response.status !=200){
          response.text().then(text=>alert(text))
        }
      })
      .catch(error => {
        console.log(error);
      });
}
export  { login, register }