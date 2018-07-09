const buildProxyResponse = (statusCode = 500, body, isBase64Encoded = false) => {
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
