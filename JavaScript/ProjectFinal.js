// open loggin
const closeModals = document.querySelectorAll('.js-closeModal')
const loginBtn = document.querySelector('.js-login')
const modallogin = document.querySelector('.js-modal-login')
const boxLogin = document.querySelector('.box-login')
function openLogin(){
     modallogin.classList.add('open')
}

function closeLogin(){
     modallogin.classList.remove('open')
}

for (var closeModal of closeModals){
     closeModal.addEventListener('click' , closeLogin)
}

modallogin.addEventListener('click' , closeLogin)

boxLogin.addEventListener('click' , function(event){
     event.stopPropagation()
})

loginBtn.addEventListener('click' , openLogin)
// end open loggin
// button side-bar
const btnSideBar = document.querySelector('.btn-sidebar')
const sideBar = document.querySelector('.side-bar')
const section1_img = document.querySelector('#section-1 img')

function showSideBar(){
     sideBar.classList.add('side-barshow')
}

function closeSideBar(){
     sideBar.classList.remove('side-barshow')
}

btnSideBar.addEventListener('click' , showSideBar)
section1_img.addEventListener('click' , closeSideBar)


// button side-bar end

// choses btn-music
const chose1 = document.querySelector('.btn-music .btn1')
const chose2 = document.querySelector('.btn-music .btn2')
const chose3 = document.querySelector('.btn-music .btn3')
const listMusic = document.querySelector('.box-music .list-music')
const listAlbums = document.querySelector('.box-music .list-albums')
const listSingerts = document.querySelector('.box-music .list-singers')
function openChose1 () {
     chose1.classList.add('btn-purple')
     chose2.classList.remove('btn-purple')
     chose3.classList.remove('btn-purple')
     listMusic.classList.remove('bl-hidden')
     listAlbums.classList.remove('visible')
     listSingerts.classList.remove('list-singers-visible')
}

function openChose2 () {
     chose2.classList.add('btn-purple')
     chose1.classList.remove('btn-purple')
     chose3.classList.remove('btn-purple')
     listMusic.classList.add('bl-hidden')
     listAlbums.classList.add('visible')
     listSingerts.classList.remove('list-singers-visible')
}

function openChose3 () {
     chose3.classList.add('btn-purple')
     chose1.classList.remove('btn-purple')
     chose2.classList.remove('btn-purple')
     listSingerts.classList.add('list-singers-visible')
     listAlbums.classList.remove('visible')
     listMusic.classList.add('bl-hidden')
}

chose1.addEventListener('click' , openChose1)
chose2.addEventListener('click' , openChose2)
chose3.addEventListener('click' , openChose3)
// choses btn-music end
// btn-login modal
const btnLogin = document.querySelector('.box-login .btn-login')

function SignIn() {
     var user = document.getElementById("User").value
     var pass = document.getElementById("password").value
     if (user === 'DatDuc2303' && pass === 'admin2303'){
          alert("Logged in successfully")
          closeLogin()
          logInSuccess()
          return
     }
     else {
          alert("Wrong Password or User!")
     }
}

btnLogin.addEventListener('click' , SignIn)
// btn-login modal end
// show hide pass
const label_pass = document.querySelector('.label-pass')
const icon_lock = document.querySelector('.showHidePass')

function showHidePass () {
     for (var i of icon_lock.getAttribute('class').split(" ")){
          if(i ==='ti-lock'){
               icon_lock.setAttribute('class' , 'ti-unlock')
               document.getElementById('password').setAttribute('type' , 'text')
               return
          }
          else if (i === 'ti-unlock'){
               icon_lock.setAttribute('class' , 'ti-lock')
               document.getElementById('password').setAttribute('type' , 'password')
               return
          }
     }
}

label_pass.addEventListener('click' , showHidePass)
// show hide pass end


// log-in changes
function logInSuccess(){
     const user = document.querySelector('.user').outerHTML
     document.querySelector('.log-in').innerHTML = user
     document.querySelector('.user').classList.add('show')
     // load sub_user
     const user_logo = document.querySelector('.user-logo')
     const sub_user = document.querySelector('.user-settings')
     function showHideSub_user () {
               for (var i of sub_user.getAttribute('class').split(" ")){
                    if(i === 'open'){
                         sub_user.classList.remove('open')
                         break
                    }
                    else{
                         sub_user.classList.add('open')
                    }
               }
          }
     section1_img.addEventListener('click' , function (){sub_user.classList.remove('open')})
     user_logo.addEventListener('click' , showHideSub_user)

     document.querySelector('.log-out').addEventListener('click' , function() {
          document.querySelector('.log-in').innerHTML = document.querySelector('.btn-login').outerHTML
          location.reload()
     } )
     // load sub_user end
}
// log-in changes end


// sub-users  


// sub-users end

// btn-login modal en
