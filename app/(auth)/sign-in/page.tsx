"use client"
import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validations';

const page = () => {
    return (
        <AuthForm
            types="SIGN-IN"
            schema={signInSchema}
            defaultValues={{
                email: '',
                password: '',
            }}
            onSubmit={() => { }}
        />
    );
};

export default page;