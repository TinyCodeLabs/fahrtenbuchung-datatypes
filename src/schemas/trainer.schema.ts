import * as z from 'zod';

export const TrainerSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	lastname: z.string(),
});

export const TrainerCreationSchema = TrainerSchema.omit({ id: true });
export const TrainerUpdateSchema = TrainerSchema.partial().required({ id: true });
