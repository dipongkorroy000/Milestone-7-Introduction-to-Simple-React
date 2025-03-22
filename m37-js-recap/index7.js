function addLocalStorage() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    // localStorage.setItem("name", name);
    // localStorage.setItem("id", id);

    const data = { id, name };
    const dataType = JSON.stringify(data);
    // console.log(data);
    localStorage.setItem(id, dataType);
}

const localStorageClear = () => {
    localStorage.clear();
}

// const getItem = localStorage.getItem('Id'); // id is 
// const convert = JSON.parse(getItem);
// console.log(convert);