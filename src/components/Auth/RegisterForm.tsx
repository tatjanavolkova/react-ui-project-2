import { Formik, Form } from "formik";
import { object, ref, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormError from "../Form/FormError";
import FormInput from "../Form/FormInput";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const validationSchema = object({
    name: string().required(),
    surname: string().required(),
    email: string().email().required(),
    password: string().required(),
    repeatPassword: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required(),
});

const RegisterForm: React.FC<{
    formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
    return (
        <Formik
            initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                repeatPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <FormTitle>Registration</FormTitle>
                <FormInput type="text" name="name" />
                <FormError name="name" />
                <FormInput type="text" name="surname" />
                <FormError name="surname" />
                <FormInput type="text" name="email" />
                <FormError name="email" />
                <FormInput type="password" name="password" />
                <FormError name="password" />
                <FormInput type="password" name="repeatPassword" />
                <FormError name="repeatPassword" />
                <FormBtn type="submit">Sign up</FormBtn>
                <FormTextLink onClick={() => formChangeHandler("login")}>
                    Already have an account? Log in!
                </FormTextLink>
            </Form>
        </Formik>
    );
};

export default RegisterForm;