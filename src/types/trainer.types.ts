import { TrainerSchema, TrainerCreationSchema, TrainerUpdateSchema } from 'schemas';
import { z } from 'zod';

export type TrainerAttributes = z.infer<typeof TrainerSchema>;
export type TrainerCreationAttributes = z.infer<typeof TrainerCreationSchema>;
export type TrainerUpdateAttributes = z.infer<typeof TrainerUpdateSchema>;
