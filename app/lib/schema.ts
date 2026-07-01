
import  {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, '2 min length'),
    email: z.string().email('Invalid email address'),
});
export type UserForm = z.infer<typeof userSchema>;