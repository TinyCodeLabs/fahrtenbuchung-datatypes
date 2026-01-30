import {
	UserSchema,
	UserCreationSchema,
	UserUpdateSchema,
	UserSafeSchema,
	UserRoleSchema,
} from 'schemas';
import { z } from 'zod';

export type UserAttributes = z.infer<typeof UserSchema>;
export type UserSafe = z.infer<typeof UserSafeSchema>;
export type UserCreationAttributes = z.infer<typeof UserCreationSchema>;
export type UserUpdateAttributes = z.infer<typeof UserUpdateSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
