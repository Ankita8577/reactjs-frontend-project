import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
   


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">Enter Your Credentials</p>

            <Form  onSubmit={handleSubmit(onSubmit)}>
                 <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        id="mail"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className="text-danger">Please check the Email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        id="pass"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="text-danger">Please check the Password</p>}
                <Button type='submit' className="btn btn-info btn-block mt-4" id ="clk">Submit</Button>
            </Form>
        </div>
        </div></div></div>
    )
}