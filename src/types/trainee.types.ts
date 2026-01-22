import { TraineeSchema, TraineeCreationSchema, TraineeUpdateSchema } from 'schemas';
import { z } from 'zod';

export type TraineeAttributes = z.infer<typeof TraineeSchema>;
export type TraineeCreationAttributes = z.infer<typeof TraineeCreationSchema>;
export type TraineeUpdateAttributes = z.infer<typeof TraineeUpdateSchema>;
