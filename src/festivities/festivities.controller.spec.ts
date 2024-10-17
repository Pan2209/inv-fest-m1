import { Test, TestingModule } from '@nestjs/testing';
import { festivitiesController } from './festivities.controller';

describe('FestivitiesController', () => {
  let controller: festivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [festivitiesController],
    }).compile();

    controller = module.get<festivitiesController>(festivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
