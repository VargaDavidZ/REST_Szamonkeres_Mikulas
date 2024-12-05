import { Anyag } from "@prisma/client"
import { IsDefined } from "class-validator"

export class CreateAjandekDto {
    @IsDefined()
    name: string
    @IsDefined()
    material: Anyag
    @IsDefined()
    weight: number
}
