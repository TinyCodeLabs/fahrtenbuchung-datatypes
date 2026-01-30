import * as z from 'zod';

export const UserRoleSchema = z.enum(['user', 'trainer', 'admin']);

export const UserSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	lastname: z.string(),
	role: UserRoleSchema,
	password_hash: z.string(),
});

export const UserSafeSchema = UserSchema.omit({ password_hash: true });
export const UserCreationSchema = UserSchema.omit({ id: true });
export const UserUpdateSchema = UserSchema.partial().required({ id: true });
