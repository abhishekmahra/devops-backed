import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './reservation.schema';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';
import { UpdatedReservationDto } from 'src/dto/update-reservation.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
    ) {}

    // Create a reservation
    async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
        const createdReservation = new this.reservationModel(createReservationDto);
        return createdReservation.save();
    }

    // Find all reservations
    async findAll(): Promise<Reservation[]> {
        return this.reservationModel.find().exec();
    }

    // Find a reservation by ID
    async findOne(id: string): Promise<Reservation> {
        const reservation = await this.reservationModel.findById(id).exec();
        if (!reservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        return reservation;
    }

    // Update a reservation
    async update(id: string, updatedReservationDto: UpdatedReservationDto): Promise<Reservation> {

        console.log("id", id, "with data: ", updatedReservationDto);
        const updatedReservation = await this.reservationModel.findByIdAndUpdate(id, updatedReservationDto, { new: true }).exec();
        if (!updatedReservation) {
            throw new NotFoundException(`Reservation with ID ${id} is not found`);
        }
        return updatedReservation;
    }

    // Delete a reservation
    async delete(id: string): Promise<void> {
        const result = await this.reservationModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException('Reservation not found');
        }
    }
}
