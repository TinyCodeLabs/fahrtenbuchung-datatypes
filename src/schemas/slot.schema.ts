import { TraineeSchema } from 'schemas';
import * as z from 'zod';
import { TrainerSchema } from './trainer.schema';
import { VehicleSchema } from './vehicle.schema';

export const SlotSchema = z.object({
	id: z.uuid(),
	date: z.date(),
	vehicleId: z.uuid(),
	vehicle: VehicleSchema.optional(),
	trainerId: z.uuid(),
	trainer: TrainerSchema.optional(),
	traineeId: z.uuid(),
	trainee: TraineeSchema.optional(),
});

export const SlotCreationSchema = SlotSchema.omit({ id: true });
export const SlotUpdateSchema = SlotSchema.partial().required({ id: true });
