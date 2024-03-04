import React from 'react';
import { TEInput, TERipple } from "tw-elements-react";

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can implement your sign-in logic
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };
    return (
        <section className="h-screen">
            <div className="h-full p-12">
                {/* <!-- Left column container*/}
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
                        <form>
                            {/* <!--Sign in section--> */}
                            <div className="flex flex-row items-center justify-center lg:justify-center">
                                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                            </div>

                            {/* <!-- Separator between social media sign in and email/password sign in --> */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                </p>
                            </div>

                            {/* <!-- Email input --> */}
                            <TEInput
                                type="email"
                                label="Email address"
                                size="lg"
                                className="mb-6"
                            ></TEInput>

                            {/* <!--Password input--> */}
                            <TEInput
                                type="password"
                                label="Password"
                                className="mb-6"
                                size="lg"
                            ></TEInput>

                            {/* <!-- Login button --> */}
                            <div className="text-center lg:text-center">
                                <TERipple rippleColor="light">
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Login
                                    </button>
                                </TERipple>
                            </div>
                        </form>
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-7/12 xl:w-7 /12">
                        <img src="https://img.freepik.com/free-vector/welcome-illustrated-concept-landing-page_52683-24618.jpg?t=st=1709009814~exp=1709013414~hmac=a1ec28de2bd640a8718e5fb150673e3de87ac78a06c6bc965116e5b04791466a&w=996" alt="dfd" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login