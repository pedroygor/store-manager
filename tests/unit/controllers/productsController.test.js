const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = chai;

chai.use(sinonChai);

const productsServices = require('../../../src/services/products');
const productController = require('../../../src/controllers/products');
const mock = require('../../mocks/products.mock')

describe('Testando a camada controller para a rota "/products"', () => {

  it('Verificando resposta da operação de buscar produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'findAll').resolves({ type: null, message: mock.products })

    await productController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.products);
  });

  // it('Cadastrando produtoo', async () => {
  //   const res = {};
  //   const req = {
  //     body: mock.newProduct,
  //   };

  //   const newProductMock = { id: 1, ...mock.newProduct }

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   sinon
  //     .stub(productsServices, 'insert')
  //     .resolves({ type: null, message:  newProductMock });

  //   await productsController.insertProduct(req, res);

  //   expect(res.status).to.have.been.calledWith(201);
  //   expect(res.json).to.have.been.calledWith(newProductMock);
  // })

  it('Verificando resposta da operação de buscar produtos por ID', async () => {
    sinon.stub(productsServices, 'findById').resolves({type: null, message: mock.products[0]});

    const req = { params: { id: 2 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.products[0]);

  });

   afterEach(sinon.restore);
})
