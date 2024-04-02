const byteSize = (str) => {
  // write your code here
};
function byteSize(str) {
    const blob = new Blob([str]);
    const size = blob.size;

    return size;
}
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
