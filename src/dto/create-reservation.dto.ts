import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateReservationDto {
    @IsDate()
    @IsNotEmpty()
    checkinDate: Date;
  
    @IsDate()
    @IsNotEmpty()
    checkoutDate: Date;
    
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @IsEmail()
  @IsNotEmpty()
  guestEmail: string;

  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;
}
