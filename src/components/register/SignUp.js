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
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Account</p>

            <Form  onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        pattern="[A-Za-z]{0,8}"
                        id ="frstname"
                        name="frstname"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p className="text-danger">Please check the First Name</p>}
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        pattern="[A-Za-z]{0,10}"
                        id ="lastname"
                        name="lastname"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p className="text-danger">Please check the Last Name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        id ="email"
                        name="email"
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
                        id="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="text-danger">Please check the Password</p>}
                <Button type='submit' className="btn btn-info btn-block mt-4" value="Submit" id="reg">Submit</Button>
            </Form>
        </div>
        </div></div></div>
    )
}