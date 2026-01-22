import * as z from 'zod';

export const VehicleSchema = z.object({
	id: z.uuid(),
	name: z.string(),
});

export const VehicleCreationSchema = VehicleSchema.omit({ id: true });
export const VehicleUpdateSchema = VehicleSchema.partial().required({ id: true });
