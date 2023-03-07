import { Form, Input } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Gradient from '../Components/Gradient'
import { registerUser } from '../Slices/auth.slice';
import ErrorHandler from '../utils/ErrorHandler';
import { CustomNotification } from '../utils/Notification';


const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
      email: "${label} is not a valid email!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
};

const SignUp = () => {
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState({ name: '', email: '', password: '', companyName: '', website: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const signUp = () => {
        // console.log(inputValue);
        setLoader(true);
        dispatch(registerUser(inputValue)).unwrap().then(x => {
            setLoader(false);
            CustomNotification("success", x?.msg);
            navigate("/");
        }).catch(e => {
            console.log(e, "signUp");
            const err = ErrorHandler(e);
            setLoader(false);
            CustomNotification("error", err);
        })
    };

  return (
    <div className='min-h-screen w-full bg-[#141627] flex flex-col justify-center items-center'>
        <div className="w-[534px] min-h-[430px] relative rounded-lg bg-[#41445F]/[0.31] flex flex-col items-center mt-12">
            <Gradient />
            <div className="h-[80px] w-full rounded-t-lg bg-gradient-to-r from-[#CC00FF] to-[#4A3AFF] flex justify-center items-center">
                <h1 className='text-white text-2xl font-semibold'>Welcome to D-App</h1>
            </div>
            <div className="z-10 w-full flex flex-col items-center mb-2 mt-8">
                <Form
                    className="space-y-6"
                    validateMessages={validateMessages}
                    onFinish={signUp}
                    style={{ width: '100%', display:'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className='myForm w-[65%]'>
                        <Form.Item
                        size="small"
                        name={"Name"}
                        rules={[{ required: true, min: 6 }]}
                        labelCol={{ span: 30 }}
                        wrapperCol={{ span: 30 }}
                        >
                        <div className="rounded-lg">
                            <Input
                            size="large"
                            name="name"
                            onChange={handleChange}
                            placeholder="Name"
                            style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                            />
                        </div>
                        </Form.Item>
                    </div>
                    <div className='myForm w-[65%]'>
                        <Form.Item
                            size="small"
                            name="Email"
                            rules={[{ required: true }, { type: 'email' }]}
                            labelCol={{ span: 30 }}
                            wrapperCol={{ span: 30 }}
                        >
                        <div className="rounded-lg">
                            <Input
                                size="large"
                                name="email"
                                onChange={handleChange}
                                placeholder="Email"
                                style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                                />
                        </div>
                        </Form.Item>
                    </div>
                    <div className='myForm w-[65%]'>
                        <Form.Item
                        size="small"
                        name="Password"
                        rules={[{ required: true, min: 6 }]}
                        labelCol={{ span: 30 }}
                        wrapperCol={{ span: 30 }}
                        >
                        <div className="rounded-lg">
                            <Input
                                size="large"
                                name="password"
                                type='password'
                                onChange={handleChange}
                                placeholder="Password"
                                style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                            />
                        </div>
                        </Form.Item>
                    </div>
                    <div className='myForm w-[65%]'>
                        <Form.Item
                        size="small"
                        name="Company Name"
                        rules={[{ required: true, min: 6 }]}
                        labelCol={{ span: 30 }}
                        wrapperCol={{ span: 30 }}
                        >
                        <div className="rounded-lg">
                            <Input
                                size="large"
                                name="companyName"
                                onChange={handleChange}
                                placeholder="Company Name"
                                style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                            />
                        </div>
                        </Form.Item>
                    </div>
                    <div className='myForm w-[65%]'>
                        <Form.Item
                            size="small"
                            name="Website"
                            rules={[{ required: true, min: 6 }]}
                            labelCol={{ span: 30 }}
                            wrapperCol={{ span: 30 }}
                        >
                        <div className="rounded-lg">
                            <Input
                                size="large"
                                name="website"
                                onChange={handleChange}
                                placeholder="Website"
                                style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                            />
                        </div>
                        </Form.Item>
                    </div>
                    <div className="w-[65%]" style={{ marginTop: '26px' }}>
                        <button type="submit" className='text-white z-10 cursor-pointer rounded-md py-3 min-w-[180px] w-full flex items-center justify-center bg-gradient-to-br from-[#4A3AFF] to-[#CC00FF] hover:from-[#3f31df] hover:to-[#ae3eca]'>
                            Signup
                            <span className='ml-3'>
                                <ClipLoader
                                    color={"black"}
                                    loading={loader}
                                    cssOverride={{ display: "block", margin: "0 auto", borderColor: "white" }}
                                    size={24}
                                />
                            </span>
                        </button>
                    </div>
                </Form>
            </div>
            <div className='text-white z-10 mb-8'>
                <span>Already have an account ?</span>
                <Link to={"/register"} className="font-semibold ml-2 hover:text-gray-200">Click Here</Link>
            </div>
        </div>
        <p className='mt-14 text-white text-sm'>Copyright &copy; 2023 - theonenetwork</p>
    </div>
  )
}

export default SignUp