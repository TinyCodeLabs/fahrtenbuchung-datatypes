import * as z from 'zod';

export const TraineeSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	lastname: z.string(),
});

export const TraineeCreationSchema = TraineeSchema.omit({ id: true });
export const TraineeUpdateSchema = TraineeSchema.partial().required({ id: true });
