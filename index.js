const buildProxyResponse = (body, statusCode = 500, isBase64Encoded = false) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body) || '',
    isBase64Encoded
  };
};

module.exports = buildProxyResponse;
