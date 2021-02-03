const orderById = (arr) => {
  return arr.sort((a, b) => {
    return a.id - b.id;
  });
};

export default orderById;
