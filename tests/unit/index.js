const chai   = require('chai');
const should = chai.should();

const buildProxyResponse = require('../../index');

describe('Unit Tests for index.js', () => {
  describe('#buildProxyResponse', () => {
    context('without parameter', () => {
      const response = buildProxyResponse();
      it('should return an object', () => {
        response.should.be.an('object');
      });
      it("should not have 'statusCode' property", () => {
        response.statusCode.should.be.equal(500);
      });
      it("should return empty string in the 'body' property", () => {
        response.body.should.be.empty;
      });
    });
    
    context("with invalid 'statusCode'", () => {
      const invalidStatusCode = undefined;
      const response = buildProxyResponse(invalidStatusCode);
      it('should return an object', () => {
        response.should.be.an('object');
      });
      it("should return 500 'statusCode'", () => {
        response.statusCode.should.be.equal(500);
      });
    });
    
    context('without body', () => {
      const anyStatusCode = 777;
      const response = buildProxyResponse(anyStatusCode);
      it('should return an empty string as the body', () => {
        response.body.should.be.empty;
      });
    });

    context('with invalid body', () => {
      const invalidBody = null;
      const response = buildProxyResponse(undefined, invalidBody);
      const stringifiedResponse = JSON.stringify(invalidBody);
      it('should return the invalid body stringified', () => {
        response.body.should.be.a('string');
        response.body.should.be.equal(stringifiedResponse);
      });
    });
  });
});
