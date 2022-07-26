import { Form, Formik } from "formik";
import { object, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormError from "../Form/FormError";
import FormInput from "../Form/FormInput";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const validationSchema = object({
    email: string().email().required(),
});

const ForgotPwdForm: React.FC<{
    formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
    return (
        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <FormTitle>Reset password</FormTitle>
                <FormInput type="text" name="email" />
                <FormError name="email" />
                <FormBtn type="submit">Log in</FormBtn>
                <FormTextLink onClick={() => formChangeHandler("register")}>
                    Don't have an account? Join now!
                </FormTextLink>
            </Form>
        </Formik>
    );
};

export default ForgotPwdForm;