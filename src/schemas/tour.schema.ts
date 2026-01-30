import { SlotSchema, UserSchema } from 'schemas';
import * as z from 'zod';
import { VehicleSchema } from './vehicle.schema';

export const TourStatusSchema = z.enum(['pending', 'booked', 'done']);

export const TourSchema = z.object({
	id: z.uuid(),
	status: TourStatusSchema,
	//references:
	slotId: z.uuid(),
	slot: SlotSchema.optional(),
	vehicleId: z.uuid(),
	vehicle: VehicleSchema.optional(),
	userId: z.uuid(),
	user: UserSchema.optional(),
});

export const TourCreationSchema = TourSchema.omit({ id: true });
export const TourUpdateSchema = TourSchema.partial().required({ id: true });
