import { TourSchema, TourCreationSchema, TourUpdateSchema, TourStatusSchema } from 'schemas';
import { z } from 'zod';

export type TourAttributes = z.infer<typeof TourSchema>;
export type TourCreationAttributes = z.infer<typeof TourCreationSchema>;
export type TourUpdateAttributes = z.infer<typeof TourUpdateSchema>;
export type TourStatus = z.infer<typeof TourStatusSchema>;
