const buildProxyResponse = (statusCode = 500, body) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body) || '',
    isBase64Encoded: false
  };
};

module.exports = buildProxyResponse;
