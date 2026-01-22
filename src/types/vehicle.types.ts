import { VehicleSchema, VehicleCreationSchema, VehicleUpdateSchema } from 'schemas';
import { z } from 'zod';

export type VehicleAttributes = z.infer<typeof VehicleSchema>;
export type VehicleCreationAttributes = z.infer<typeof VehicleCreationSchema>;
export type VehicleUpdateAttributes = z.infer<typeof VehicleUpdateSchema>;
