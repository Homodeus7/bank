import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export function useRequestForm(fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active',
    },
  });

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField('name', yup.string().trim().required('Cannot be empty.'));
  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField('phone', yup.string().trim().required('Cannot be empty.'));
  const {
    value: amount,
    errorMessage: aError,
    handleBlur: aBlur,
  } = useField(
    'amount',
    yup
      .number()
      .required('Enter amount')
      .min(0, 'The amount cannot be less than 0.')
  );
  const { value: status } = useField('status');

  const onSubmit = handleSubmit(fn);

  return {
    name,
    phone,
    amount,
    status,
    isSubmitting,
    onSubmit,
    nError,
    pError,
    aError,
    nBlur,
    pBlur,
    aBlur,
  };
}
