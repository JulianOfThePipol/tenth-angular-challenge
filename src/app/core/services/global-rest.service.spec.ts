import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GlobalRestService } from './global-rest.service';
import { getCartResponseMock, likeResponseMock, metaMock, mockProducts, productMock, userLoginMock } from 'src/app/mocks/data.mock';

describe('GlobalRestService', () => {
  let service: GlobalRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalRestService
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GlobalRestService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a correct get cart request to the proper url', () => {
    service.getCart().subscribe(
      cart => {expect(cart).toBe(getCartResponseMock)}
    )
    const req = httpTestingController.expectOne('https://trainee-program-api-staging.applaudostudios.com/api/v1/cart');
    expect(req.request.method).toEqual('GET');
    req.flush(getCartResponseMock)
  });

  it('should send a correct post for searching products with the proper url', () => {
    service.searchProducts(1,10,'ee','24').subscribe(
      products => {expect(products).toEqual(mockProducts)}
    )
    const req = httpTestingController.expectOne(`https://trainee-program-api-staging.applaudostudios.com/api/v1/products?include=master,category,image_attachment.blob&[page][size]=10&[page][number]=1&[filter][name_cont]=ee&[filter][category_id_eq]=24&sort=name asc`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts)
  });

  it('should send a correct post for getting all products with the proper url', () => {
    service.getAllProducts(1,10).subscribe(
      products => {expect(products).toEqual(mockProducts)}
    )
    const req = httpTestingController.expectOne(`https://trainee-program-api-staging.applaudostudios.com/api/v1/products?include=master,category&[page][size]=10&[page][number]=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts)
  });

  it('should send a correct post for login with the proper url', () => {
    service.login({email: 'mockEmail', password: 'mockPassword'}).subscribe(
      logindata => {expect(logindata).toEqual(userLoginMock)}
    )
    const req = httpTestingController.expectOne(`https://trainee-program-api-staging.applaudostudios.com/api/v1/users/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(userLoginMock)
  });

  it('should get single product with the proper url and data', () => {
    service.getSingleProduct('mockSlug').subscribe(
      product => {expect(product).toEqual({data: productMock, meta: metaMock})}
    )
    const req = httpTestingController.expectOne(`https://trainee-program-api-staging.applaudostudios.com/api/v1/products/mockSlug?include=master,category,image_attachment.blob`);
    expect(req.request.method).toEqual('GET');
    req.flush({data: productMock, meta: metaMock})
  });

  it('should post rates to proper url with proper data', () => {
    service.rateProduct("up", 24).subscribe(
      rateResponse => {expect(rateResponse).toEqual(likeResponseMock)}
    )
    const req = httpTestingController.expectOne(`https://trainee-program-api-staging.applaudostudios.com/api/v1/likes`)
    expect(req.request.method).toEqual('POST');
    req.flush(likeResponseMock)
  })

});
