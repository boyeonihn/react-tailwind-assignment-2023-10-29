'use client';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('department'));
  console.log(errors);
  return (
    <section className="bg-green-200 py-10 w-1/2 rounded-3xl text-xl border-black border-2 border-r-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl m-10">Job Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <fieldset>
          <legend className="font-semibold">
            What department do you want to work for?
          </legend>
          <div>
            <input
              className="w-5 h-5 mr-2"
              type="radio"
              id="sales"
              value="sales"
              {...register('department', {
                required: 'You must select an option',
              })}
            />
            <label htmlFor="sales">Sales</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2"
              type="radio"
              id="marketing"
              value="marketing"
              {...register('department')}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('department')}
              id="accounting"
              value="accounting"
            />
            <label htmlFor="accounting">Accounting</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('department')}
              id="customer"
              value="customer"
            />
            <label htmlFor="customer">Customer Service</label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-semibold">
            Why do you want to join this company?
          </legend>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('reason', { required: 'This field is required' })}
              value="money"
              id="money"
            />
            <label htmlFor="money">I want money!</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('reason', { required: 'This field is required' })}
              value="love"
              id="love"
            />
            <label htmlFor="love">I love this company</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('reason', { required: 'This field is required' })}
              value="learn"
              id="learn"
            />
            <label htmlFor="learn">I want to learn</label>
          </div>
          <div>
            <input
              className="w-5 h-5 mr-2 "
              type="radio"
              {...register('reason', { required: 'This field is required' })}
              value="noReason"
              id="noReason"
            />
            <label htmlFor="noReason">I don't know why</label>
          </div>
        </fieldset>
        <div className="flex flex-col">
          <label htmlFor="salary" className="font-semibold">
            Salary
          </label>
          <select
            {...register('salary')}
            className="rounded-lg focus:border-blue border-black border-2 p-2"
            name="salary"
            id="salary"
          >
            <option value="50k">50k</option>
            <option value="100k">100k</option>
            <option value="150k">150k</option>
            <option value="200k">200k</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="intro" className="font-semibold">
            Introduce yourself
          </label>
          <input
            className="rounded-lg focus:border-blue border-black border-2 p-2"
            type="text"
            id="intro"
            {...register('introduction', {
              required: 'Please introduce yourself to us!',
            })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dream" className="font-semibold">
            Tell us what your dreams are
          </label>
          <textarea
            className="rounded-lg focus:border-blue border-black border-2 p-2"
            id="dream"
            {...register('dream', {
              required: 'Please tell us your dreams.',
              minLength: {
                value: 10,
                message: 'Please write at least 10 characters',
              },
            })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="rounded-lg border-black border-2 p-2 focus:border-blue"
            type="text"
            id="email"
            {...register('email', {
              required: 'Please enter your email address',
              validate: {
                naver: (text) => text.includes('@naver.com'),
              },
            })}
          />
        </div>
        <button className="p-4 w-full font-bold border-black border-2 border-b-4 border-r-4 bg-yellow-400 rounded-xl my-5 hover:bg-purple-400">
          Give me this job
        </button>
      </form>
    </section>
  );
}
