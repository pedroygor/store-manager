const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

const productsModel = require('../../../src/models/products');
const connection = require('../../../src/models/db/connection');

const productsMock = require('../../mocks/products.mock');

describe('Testando a camada model para a rota "/products"', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Realizando a operação de buscar todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([productsMock.products]);

    const response = await productsModel.findAll();

    expect(response).to.be.equal(productsMock.products);

  });

  it('Realizando a operação de buscar produtos por ID', async () => {
    sinon.stub(connection, 'execute').resolves([productsMock.products[0]]);

    const response = await productsModel.findById(2);

    expect(response).to.deep.equal(productsMock.products[0]);

  });

  it('Realizando a operação de inserir produtos', async () => {
    sinon.stub(connection, 'execute').resolves([{insertId: 8}]);

    const response = await productsModel.insert(productsMock.newProduct);

    expect(response).to.equal(8);

  });
})
