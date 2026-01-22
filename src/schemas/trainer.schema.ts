import * as z from 'zod';
import { VehicleSchema } from './vehicle.schema';

export const TrainerSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	lastname: z.string(),
	defaultVehicle: VehicleSchema.optional(),
	defaultVehicleId: z.uuid(),
});

export const TrainerCreationSchema = TrainerSchema.omit({ id: true });
export const TrainerUpdateSchema = TrainerSchema.partial().required({ id: true });
