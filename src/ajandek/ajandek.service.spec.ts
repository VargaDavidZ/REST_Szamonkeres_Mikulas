import { Test, TestingModule } from '@nestjs/testing';
import { AjandekService } from './ajandek.service';

describe('AjandekService', () => {
  let service: AjandekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AjandekService],
    }).compile();

    service = module.get<AjandekService>(AjandekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
