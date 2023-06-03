
const key = 'message';


if (localStorage.length) {
  const storageLoc = localStorage.getItem(key);
  console.log(storageLoc);
}
