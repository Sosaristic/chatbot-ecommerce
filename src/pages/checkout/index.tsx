/* eslint-disable no-useless-escape */
import { BannerImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import { formatAmount } from '@/lib/helpers';
import { useCartStore } from '@/stores/useCartStore';

import { Input } from '@/components/ui/input';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import Success from '../../assets/svg/success-checkoute.svg';

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
};

const validationSchema = yup.object<typeof initialValues>({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address: yup.string().required('Address is required'),
  phone: yup.string().required('Phone number is required'),

  email: yup
    .string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email address'
    )
    .required('No email provided'),
});

const Checkout = () => {
  const { totalAmount, totalItems, clearCart } = useCartStore();
  const [step, setStep] = useState(1);

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: () => {
        setStep(2);
        clearCart();
      },
    });

  return (
    <div>
      {step === 1 && <BannerImage title="Checkout" />}

      {step === 1 ? (
        <div className="container flex flex-col gap-6 my-6 mt-10 lg:flex-row">
          <div className="px-4 py-2  overflow-hidden rounded-[1rem] lg:w-2/3 bg-white-def">
            <h2 className="text-2xl">Billing Details</h2>
            <hr className="my-4" />
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex grid flex-col grid-cols-1 gap-4 md:grid-cols-2 md:flex-row">
                <Input
                  labelText="First Name"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  errorText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : ''
                  }
                />
                <Input
                  labelText="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  errorText={
                    errors.lastName && touched.lastName ? errors.lastName : ''
                  }
                />
              </div>
              <Input
                labelText="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errorText={errors.email && touched.email ? errors.email : ''}
              />
              <Input
                labelText="address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                errorText={
                  errors.address && touched.address ? errors.address : ''
                }
              />
              <Input
                labelText="Phone Number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                errorText={errors.phone && touched.phone ? errors.phone : ''}
              />
            </form>
          </div>

          <div className="px-4 py-2 lg:w-1/3 bg-white-def flex flex-col gap-4 rounded-[1rem] h-fit">
            <h2 className="text-2xl">Summary</h2>
            <hr className="my-4" />
            <p>
              <span className="mr-2 font-bold">Total Items:</span>{' '}
              {totalItems()}
            </p>

            <p>
              <span className="mr-2 font-bold">Total:</span>
              {formatAmount(totalAmount() * 100)}
            </p>

            <Button
              className="w-full"
              type="button"
              disabled={totalItems() === 0}
              size={'lg'}
              onClick={() => handleSubmit()}
            >
              Place Order
            </Button>
          </div>
        </div>
      ) : (
        <div className="container flex flex-col items-center flex-1 gap-4 mt-12 ">
          <img src={Success} alt="" className="h-[15rem] w-[15rem]" />
          <p className="text-2xl text-green-500">Order placed successfully</p>
          <p>Order Id: 45747583833938595869</p>
          <p>Use this Id to track your order</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
