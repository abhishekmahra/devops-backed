import { Type } from "class-transformer";
import { Mongoose } from "mongoose";

import {
    IsEmail, IsDate,IsString, IsNumber, IsOptional 
} from 'class-validator'

export class UpdatedReservationDto{
    @IsOptional()
    @IsDate()
    checkinDate?: string;
    
    @IsOptional()
    @Type(()=> Date)
    @IsDate()
    checkoutDate?: string;

    @IsOptional()
    @IsString()
    guestName?: string;

    @IsOptional()
    @IsEmail()
    guestEmail?: string;

    @IsOptional()
    @IsNumber()
    roomNumber?: number;

}

