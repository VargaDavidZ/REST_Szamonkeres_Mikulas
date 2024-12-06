import { IsDecimal, isDecimal, IsDefined } from "class-validator"

export class CreateGyerekDto {
    @IsDefined()
    nev: string
    @IsDefined()
    lakcim: string
    @IsDefined()
    magatartas: boolean
    //@IsDefined()
    //ajandekId: number
}
