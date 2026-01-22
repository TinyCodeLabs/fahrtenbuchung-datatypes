import { SlotSchema, SlotCreationSchema, SlotUpdateSchema } from 'schemas';
import { z } from 'zod';

export type SlotAttributes = z.infer<typeof SlotSchema>;
export type SlotCreationAttributes = z.infer<typeof SlotCreationSchema>;
export type SlotUpdateAttributes = z.infer<typeof SlotUpdateSchema>;
