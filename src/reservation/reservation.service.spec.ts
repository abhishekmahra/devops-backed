import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './reservation.schema';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,  // Inject the Reservation model
  ) {}

  // Create a new reservation
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const createdReservation = new this.reservationModel(createReservationDto);
    return createdReservation.save();
  }

  // Get all reservations
  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }

  // Get a single reservation by id
  async findOne(id: string): Promise<Reservation> {
    const reservation = await this.reservationModel.findById(id).exec();
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  // Update a reservation by id
  async update(id: string, updateReservationDto: CreateReservationDto): Promise<Reservation> {
    const updatedReservation = await this.reservationModel.findByIdAndUpdate(id, updateReservationDto, { new: true }).exec();
    if (!updatedReservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return updatedReservation;
  }

  // Delete a reservation by id
  async delete(id: string): Promise<void> {
    const result = await this.reservationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
  }
}
