const validate = (title, body) => {
  return title.trim() !== '' || body.trim() !== '';
};

export { validate };