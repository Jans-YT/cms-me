import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import WelcomePic from '../asset/people-welcoming-concept-with-foliage-background_52683-23790-removebg-preview.png';

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can implement your sign-in logic
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };

    const navigate = useNavigate();

    const sub = async (e) => {
        e.preventDefault();
        try {
            navigate("/Homepage");
            alert('berhasil login');

        } catch (err) {
            console.err("salah");
        }
    }

    return (
        <section className="h-screen">
            <div className="h-full p-12">
                {/* <!-- Left column container*/}
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
                        <form method='POST' onSubmit={sub}>
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
                                type="text"
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
                                        type="submit"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Login
                                    </button>
                                </TERipple>
                            </div>
                        </form>
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:w-7/12 lg:w-7/12 xl:w-7/12 /12 sm:7/12">
                        <img src={WelcomePic} alt="welcomePic" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login