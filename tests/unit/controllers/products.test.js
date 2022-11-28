const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = chai;

chai.use(sinonChai);

const productsServices = require('../../../src/services/products');
const productsController = require('../../../src/controllers/products');
const mock = require('./mocks/products.mock')

describe('Testando a camada controller para a rota "/products"', () => {

  it('Verificando resposta da operação de buscar produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'findAll').resolves({ type: null, message: mock.products })

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.products);
  });

  it('Verificando resposta da operação de buscar produtos por ID', async () => {
    const res = {};
    const req = {
      params: { id: 2 },
    };
    const result = {
		id: 2,
		name: "Traje de encolhimento"
	};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: { name: "Traje de encolhimento" } })

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ name: "Traje de encolhimento" });
  });
})
