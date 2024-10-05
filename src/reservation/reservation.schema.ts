import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop({ required: true })
  guestName: string;

  @Prop({ required: true })
  guestEmail: string;

  @Prop({ required: true })
  checkinDate: Date;

  @Prop({ required: true })
  checkoutDate: Date;

  @Prop({ required: true })
  roomNumber: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
