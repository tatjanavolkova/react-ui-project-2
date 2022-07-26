import { ErrorMessage } from "formik";
import styled from "styled-components";
import { colors } from "../../theme/theme";

const StyledError = styled(ErrorMessage)`
  display: block;
  width: 100%;
  color: ${colors.error};
  text-align: left;
`;

const FormError: React.FC<{ name: string }> = ({ name }) => (
    <StyledError name={name} component="span" />
);

export default FormError;