import { Test, TestingModule } from '@nestjs/testing';
import { AjandekController } from './ajandek.controller';
import { AjandekService } from './ajandek.service';

describe('AjandekController', () => {
  let controller: AjandekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AjandekController],
      providers: [AjandekService],
    }).compile();

    controller = module.get<AjandekController>(AjandekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
