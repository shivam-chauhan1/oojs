const arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
  setTimeout(() => {
    console.log(num);
  }, index * 3000);
});
