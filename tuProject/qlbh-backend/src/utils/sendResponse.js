const sendResponse = (data, statusCode, res) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

module.exports = {
  sendResponse,
};
