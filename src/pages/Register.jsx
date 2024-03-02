import { object, string } from 'yup';
import { useFormik } from 'formik';
import Input from "../components/Input";
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const userSchema = object({
  username: string().min(3, 'At least 3').required('Required field'),
  email: string().email('Enter a valid email').required('Required field'),
  password: string().min(8, 'Password of at least 8 characters').required('Required field')
});

const Register = () => {
  const navigate = useNavigate()
  const { values, errors, touched, 
    //isValid, 
    handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: 'test@gmail.com',
      username: 'test',
      password: '12345678'
    },
    onSubmit: (values) => {
      register(values)
        .then(() => {
          navigate('/login')
        })
        .catch(err => console.error(err))
    },
    validationSchema: userSchema,
    validateOnBlur: true,
    validateOnMount: true,
  })
  return (
    <div>
      <h1 className='text-tw-primary uppercase font-bold text-3xl underline'>Register your account</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="username"
            label="User name"
            placeholder="Ex: 'manolitogafotas'"
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Ex: 'manolitogafotas@gmail.com'"
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Ex: '12345678'"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* <Input
            name="avatar"
            type="file"
            label="Add your photo"
            // value={values.avatar}
            error={touched.avatar && errors.avatar}
            onChange={(event) => {
              setFieldValue("avatar", event.currentTarget.files[0]);
            }}
            onBlur={handleBlur}
          />
          <Input
            name="biography"
            label="biography"
            placeholder="Ex: 'About me...'"
            value={values.biography}
            error={touched.biography && errors.biography}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="birthday"
            type="date"
            label="Add your birthday"
            value={values.birthday}
            error={touched.birthday && errors.birthday}
            onChange={handleChange}
            onBlur={handleBlur}
          />  */}
        </div>
        <Button extraClassName="mt-4" text="Create account"
        //  disabled={!isValid} 
        />
      </form>
    </div>
  )
}

export default Register;