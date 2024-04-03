const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);
  
  const Bytes = blob.size;
  
  return Bytes;
};

// Do not change the code below
//const str = prompt("Enter some string.");
alert(byteSize(str));
