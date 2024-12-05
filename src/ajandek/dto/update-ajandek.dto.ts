import { PartialType } from '@nestjs/mapped-types';
import { CreateAjandekDto } from './create-ajandek.dto';

export class UpdateAjandekDto extends PartialType(CreateAjandekDto) {}
