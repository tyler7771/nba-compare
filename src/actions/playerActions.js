export const getPlayer = (id) => ({
  type: "GET_PLAYER",
  id,
});

export const removePlayer = (id) => ({
  type: "REMOVE_PLAYER",
  id,
});
