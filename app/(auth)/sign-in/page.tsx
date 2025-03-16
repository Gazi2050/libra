"use client"
import AuthForm from '@/components/AuthForm';
import { signInWithCredentials } from '@/lib/actions/auth';
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
            onSubmit={signInWithCredentials}
        />
    );
};

export default page;