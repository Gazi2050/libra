"use client"
import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validations';

const page = () => {
    return (
        <AuthForm
            types="SIGN-IN"
            schema={signInSchema}
            defaultValueslues={{
                email: '',
                password: '',
            }}
            onSubmit={() => { }}
        />
    );
};

export default page;