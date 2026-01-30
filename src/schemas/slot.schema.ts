import * as z from 'zod';

import { VehicleSchema } from './vehicle.schema';

export const SlotSchema = z.object({
	id: z.uuid(),
	date: z.date(),
	//references:
	vehicleId: z.uuid(),
	vehicle: VehicleSchema.optional(),
});

export const SlotCreationSchema = SlotSchema.omit({ id: true });
export const SlotUpdateSchema = SlotSchema.partial().required({ id: true });
