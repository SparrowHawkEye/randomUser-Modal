const loadUsers = async () => {
  const url = 'https://randomuser.me/api/'
  const res = await fetch(url);
  const data = await res.json()
  displayUser(data)
}
function displayUser (data){
    const userInfo = data.results[0];
    const userContainer = document.getElementById('user-container')
    userContainer.innerHTML = "";

  const userInfoDiv = document.createElement('div')
  const lists = ["card", "mb-3", "p-5", "w-25"]
  userInfoDiv.classList.add(...lists);
  userInfoDiv.innerHTML = `
  <div class="row g-5 justify-content-center">
  
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title text-center">${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}</h5>
      <div class="card-text text-center ">
        Gender : ${(userInfo.gender)} <br />
        Country : ${(userInfo.location.country)} <br />
        City : ${(userInfo.location.city)} <br />
        Phone : ${(userInfo.phone)} <br />
        userName : "${(userInfo.login.username)}"
      </div>
    </div>
  </div>
</div>
  `
  userContainer.appendChild(userInfoDiv)
  // console.log(data.results[0]);
  // console.log(userInfoDiv);

  const modalDialog = document.getElementById('modal-dialog')
  modalDialog.innerHTML =""
  const modalContentDiv = document.createElement('div')
  modalContentDiv.classList.add('modal-content');
  
  modalContentDiv.innerHTML = `<div class="modal-header">
  <h5 class="modal-title" id="ExampleModalLabel">Picture of ${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
    data-bs-target="#staticBackdrop"
  ></button>
</div>
<div class="modal-body d-flex justify-content-center">
<img
src="${userInfo.picture.large}"
class="rounded shadow-lg"
alt="Picture of ${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}"
/>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal"
  >
    Close
  </button>
</div>
  `
  modalDialog.appendChild(modalContentDiv)
}