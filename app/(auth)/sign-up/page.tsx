"use client"
import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validations';

const page = () => {
    return (
        <AuthForm
            types="SIGN-UP"
            schema={signUpSchema}
            defaultValueslues={{
                email: '',
                password: '',
                fullName: '',
                universityId: 0,
                universityCard: '',
            }}
            onSubmit={() => { }}
        />
    );
};

export default page;