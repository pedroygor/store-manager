const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

const productsModel = require('../../../src/models/products');
const productsServices = require('../../../src/services/products');
const mock = require('../../mocks/products.mock');

describe('Testando a camada services para a rota "/products"', () => {
    afterEach(() => {
    sinon.restore();
    });

  it('Realizando a operação de buscar todos os produtos', async () => {
    sinon.stub(productsModel, 'findAll').resolves(mock.products);

    const result = await productsServices.findAll();

    expect(result).to.be.deep.equal({ type: null, message: mock.products })
  })

  it('Realizando a operação de buscar produto por ID"', async () => {
    sinon.stub(productsModel, 'findAll').resolves(mock.products[0]);

    const { type, message } = await productsServices.findById(2);

    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal({"id": 2, "name": 'Traje de encolhimento'});
  })
});
