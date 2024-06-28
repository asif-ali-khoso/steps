import React, { useState } from 'react';
import { CiLock } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import './form.css';

function Form() {
    const [currentStep, setCurrentStep] = useState(2);
    const [formData, setFormData] = useState({ name: '', email: '', number: '', textareaContent: ''});
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
                    }
                 };

    const previousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
                      }
                  };
    // Calculate the width of the progress bar based on the current step
    const progressBarWidth = `${((currentStep - 1) / 3) * 100}%`;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
                 });
            };

    const handleSubmitStep2 = (e) => {
        e.preventDefault();
        if (validateStep2()) {
            nextStep();
               }
            };

    const validateStep2 = () => {
        const errors = {};
        if (formData.name.trim() === '') {
            errors.name = 'Name is required';
        }
        if (formData.email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (formData.number.trim() === '') {
            errors.number = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(formData.number)) {
            errors.number = 'Phone Number must be 10 digits';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmitStep3 = (e) => {
        e.preventDefault();
        // Simulate form submission
        if (validateStep3()) {
            // Assuming form submission is successful
            setFormSubmitted(true);
            nextStep(); // Move to step 4
        }
    };

    const validateStep3 = () => {
        // Implement validation logic for Step 3 (if needed)
        // For now, just return true for demonstration
        return true;
    };


    return (
        <>
            <div className='nav'>
                <div className='nav_icons_btn'>
                    <IoIosArrowRoundBack style={{ marginTop: '5px' }} />
                    <button onClick={previousStep}> <a href='#!'> Go Back</a></button>
                </div>
            </div>
            <form className='form' target="_blank">
                <div className="progress-container">
                    <ul id="progressbar">
                        <li className={currentStep >= 1 ? 'active' : ''} id="step1">
                            <strong></strong>
                        </li>
                        <li className={currentStep >= 2 ? 'active' : ''} id="step2">
                            <strong></strong>
                        </li>
                        <li className={currentStep >= 3 ? 'active' : ''} id="step3">
                            <strong></strong>
                        </li>
                    </ul>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
                    </div>
                </div>
                <div className="step-container">
                    <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                        <div className='form_steps_1'>
                            <div className='container'>
                                <h2>WStep # 1</h2>
                                <p className='text-center'>What is your monthly digital marketing budget?</p>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' id='form_input_bar' readonly checked required>
                                        $1,000/mo
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' name='budget' id='form_input_bar' readonly checked required>
                                        $1,000 - $2,000
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' name='budget' id='form_input_bar' readonly checked required>
                                        $2,000 - $5,000
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' name='$5,000 - $10,000' id='form_input_bar' readonly checked required>
                                        $5,000 - $10,000
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' name='budget' id='form_input_bar' readonly checked required>
                                        $10,000 - $25,000
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <button onClick={nextStep} type='text' name='budget' id='form_input_bar' readonly checked required>
                                        $25,000 +
                                    </button>
                                </div>
                           </div>
                        </div>
                    </fieldset>
                    <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                        <div className='steps_form_2'>
                            <h2>Step # 2</h2>
                            <h2>Details</h2>
                            <p className='text-center'>We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.</p>
                            <div className='steps_nd_form'>
                                <div className='mt-5'>
                                    <label>Name</label>
                                    <input type='text' placeholder='' name='name' value={formData.name} onChange={handleInputChange} required />
                                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                                </div>
                                <div className='form-inputs'>
                                    <div className='input-group-custom' required>
                                        <label>Email</label>
                                        <input type='email' placeholder='' name='email' value={formData.email} onChange={handleInputChange} required />
                                        {formErrors.email && <span className="error">{formErrors.email}</span>}
                                    </div>
                                    <div className='input-group-custom'>
                                        <label>Phone Number</label>
                                        <input type='tel' placeholder='' name='number' value={formData.number} onChange={handleInputChange} required />
                                        {formErrors.number && <span className="error">{formErrors.number}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <label>Anything else you’d like to share?</label>
                                <textarea type='text' id='textarea' required></textarea>
                            </div>
                            <div>
                                <button className='request_btn' onClick={handleSubmitStep2}>Send Request</button>
                                <div className='Inbox_promise'>
                                    <CiLock id='Lock' />
                                    <span id='information'>We promise never to share your information or spam your inbox</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                        <div className="finish">
                            <div className='box_step'></div>
                            <div className='prposal'>
                                <h2 className="text">
                                    <strong>
                                        Your Request for a Proposal Has Been Submitted!
                                    </strong>
                                </h2>
                                <p id='sucessful'>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.</p>
                                <button id='Return_Home' onClick={previousStep}
                                >Return Home</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form>
        </>
    );
}

export default Form;
