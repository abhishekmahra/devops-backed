import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';
import { UpdatedReservationDto } from 'src/dto/update-reservation.dto';
import { Reservation } from './reservation.schema';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService){}

    @Post()
    async create(@Body() createReservationDto: CreateReservationDto){
        return this.reservationService.create(createReservationDto);
    }

   @Get()
   async findAll(): Promise<Reservation[]>{
    return this.reservationService.findAll();
   }

    @Get(':id')
    async findOne(@Param('id') id:string){
        return this.reservationService.findOne(id)
    }

    @Patch(':id')
    async update(
        @Param('id') id:string,
        @Body() updateReservationDto: UpdatedReservationDto):Promise<Reservation>{
          return this.reservationService.update(id,updateReservationDto);
    }

    @Delete(':id')
    async remove(@Param('id') id:string): Promise<void>{
        return this.reservationService.delete(id);
    }
}
