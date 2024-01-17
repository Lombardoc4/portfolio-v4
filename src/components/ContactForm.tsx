import { useMemo, useState } from "react";
import { SpringBubbles } from "./Bubble";
import { Button } from "./Button";
<<<<<<< 5532f426d62f724c3b20896f5b3e3b31b9a8e7ad
import { FormError, StyledContactForm } from "../styledComponents/StyledContactForm";
=======
<<<<<<< ref
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
<<<<<<< ref
<<<<<<< ref
>>>>>>> modify file structure
import { FormError, StyledContactForm } from "../styledComponents/StyledContactForm";
=======
import { FormError, StyledContactForm } from "./StyledContactForm";
>>>>>>> contact form cors
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
=======
import { FormError, StyledContactForm } from "../styledComponents/StyledContactForm";
>>>>>>> massive update for mobile and desktop styling
=======
import { FormError, StyledContactForm } from "./styledComponents/StyledContactForm";
>>>>>>> modify file structure
>>>>>>> modify file structure
>>>>>>> modify file structure
import { AlertIcon } from "../icons";


interface ContactInfo {
    name: string,
    email: string
}

export const ContactForm = ({ closeAction }: { closeAction: () => void }) => {
    // const [confirmation, setConfirmation] = useState(false);
    const [contact, setContact] = useState<ContactInfo>();
    const closeButton = useMemo(
        () => <Button action={closeAction}>{contact ? "Close" : "Cancel"}</Button>,
        [contact]
    );

    const handleConfirmation = (contact: ContactInfo) => {
        // setConfirmation(true);
        setContact(contact);
    }

    if (contact)
        return <Confirmation closeBtn={closeButton} contact={contact} />

    return (
        // <StyledContactForm>
            <EmailForm confirm={handleConfirmation} closeBtn={closeButton} />
        // </StyledContactForm>
    );
};


const Confirmation = ({ contact, closeBtn }: { contact: ContactInfo, closeBtn: JSX.Element }) => (
    <StyledContactForm className="text-center">
        <h2 className='h1 my-1'>Chat Soon {contact.name}!</h2>
        <p>I'll response to {contact.email}</p>
        {closeBtn}
    </StyledContactForm>
);

const ErrorEl = ({ error }: { error: string }) => {
    return (
        <FormError>
            <AlertIcon/>{" "}
            {error}
        </FormError>
    );
};

interface IInput {
    id: string;
    value: string;
    label: string;
    type: string;
    error: JSX.Element;
    handleChange: (e: React.ChangeEvent) => void;
    validate: () => void;
}

const Input = ({ error, label, value, type, id, handleChange, validate }: IInput) => {
    return (
        <div style={{ display: "grid", gap: "0.5rem" }}>
            <label
                htmlFor={id}
                style={{
                    color: `var(${typeof error.type === "function" ? "--color-secondary" : "--color-black"})`,
                }}
            >
                {label}
            </label>
            <input onChange={handleChange} onBlur={validate} value={value} type={type} required name={id} id={id} />
            {error}
        </div>
    );
};

const sendEmail = async (
    email: { name: string; email: string; message: string },
    cb: ({name, email}: {name: string, email: string}) => void,
    errorCb: () => void
) => {
    try {
        const emailRes = await fetch(import.meta.env.VITE_EMAIL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": import.meta.env.VITE_API_KEY,
            },
            // mode: "no-cors",
            cache: 'no-cache',
            body: JSON.stringify(email),
        });

        console.log('email', emailRes)

        const result = await emailRes.json();
        console.log('result', result)
        const user = {
            name: email.name,
            email: result.envelope.from
        }

        emailRes.status === 200 ? cb(user) : errorCb();

    } catch (err) {
        console.log("err", err);
        errorCb();
    }
};

const EmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailForm = ({ confirm, closeBtn }: { confirm: (contact: ContactInfo) => void; closeBtn: JSX.Element }) => {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState({
        name: <></>,
        email: <></>,
        msg: <></>,
        form: <></>,
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateForm = () => {
        const errors = Object.values(error).filter((err) => {
            if (typeof err.type === "function") return true;
        });

        if (email.length === 0 && message.length === 0) {
            validateEmail();
            validateMessage();
            return false;
        }

        return errors.length === 0;
    };

    const submitForm = async (e: React.FormEvent) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Confirm no errors
        if (!validateForm()) return;

        // Update ui to show loading
        setLoading(true);

        // Send email
        sendEmail(
            { name, email, message },
            (contact: ContactInfo) => {
                setTimeout(() => {
                    confirm(contact);

                    setLoading(false);
                }, 1000);
            },
            () => {
                setError((errs) => ({
                    ...errs,
                    form: <ErrorEl error='Server issue, please email me directly @ lom13@pm.me' />,
                }));
            }
        );
    };

    const validateName = () => {
        if (name.length < 5 || !name.includes(" ")) {
            setError((errs) => ({ ...errs, name: <ErrorEl error='Please provide your full name' /> }));
        } else {
            setError((errs) => ({ ...errs, name: <></> }));
        }
    };

    const validateEmail = () => {
        if (String(email).toLowerCase().match(EmailRegex)) {
            setError((errs) => ({ ...errs, email: <></> }));
        } else {
            setError((errs) => ({ ...errs, email: <ErrorEl error='Provide proper email address' /> }));
        }
    };

    const validateMessage = () => {
        if (message.length < 40) {
            setError((errs) => ({ ...errs, msg: <ErrorEl error='Minimum of 40 characters' /> }));
        } else if (message.includes("<script") || message.includes("</script>")) {
            setError((errs) => ({ ...errs, msg: <ErrorEl error='Message is invalid' /> }));
        } else {
            setError((errs) => ({ ...errs, msg: <></> }));
        }
    };

    const changeName = (e: React.ChangeEvent) => {
        setName((e.target as HTMLInputElement).value);
        if (typeof error.email.type === "function") validateName();
    };

    const changeEmail = (e: React.ChangeEvent) => {
        setEmail((e.target as HTMLInputElement).value);
        if (typeof error.email.type === "function") validateEmail();
    };
    const changeMessage = (e: React.ChangeEvent) => {
        setMessage((e.target as HTMLInputElement).value);
        if (typeof error.msg.type === "function") validateMessage();
    };

    return (
        <StyledContactForm onSubmit={submitForm} style={{ display: "grid", gap: "0.5rem" }}>
            <p>
                Fill out the form and I'll get back to you promptly. You can also email me directly at
                <br />
                <a className="bungee" href='#'>lom13@pm.me</a>
            </p>

            <SpringBubbles />

            <Input
                value={name}
                error={error.name}
                label='Full name:'
                handleChange={changeName}
                validate={validateName}
                type='text'
                id='contact-name'
            />
            <Input
                value={email}
                error={error.email}
                label='Email:'
                handleChange={changeEmail}
                validate={validateEmail}
                type='email'
                id='contact-email'
            />

            <div style={{ display: "grid", gap: "0.5rem" }}>
                <label
                    htmlFor='contact-message'
                    style={{
                        color: `var(${typeof error.msg.type === "function" ? "--color-secondary" : "--color-black"})`,
                    }}
                >
                    Message:
                </label>
                <textarea
                    onChange={changeMessage}
                    onBlur={validateMessage}
                    value={message}
                    name='contact-message'
                    id='contact-message'
                    rows={6}
                />
                {error.msg}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                {closeBtn}
                <Button type="submit">
                    {loading ? "Sending..." : <>Send &rarr;</>}
                </Button>
                {/* <button type='submit' className='a black w-100'> */}
                {/* </button> */}
            </div>
        </StyledContactForm>
    );
};
