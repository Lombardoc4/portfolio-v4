import { FormEvent, useMemo, useState } from "react";
import { SpringBubbles } from "./Bubble";

export const ContactForm = ({ closeAction }: { closeAction: () => void }) => {
    const [confirmation, setConfirmation] = useState(false);
    const closeButton = useMemo(
        () => (
            <button onClick={closeAction} className='a black w-100'>
                {confirmation ? "Close" : "Cancel"}
            </button>
        ),
        [confirmation]
    );

    return (
        <>
            {confirmation ? (
                <Confirmation closeBtn={closeButton} />
            ) : (
                <EmailForm confirm={() => setConfirmation(true)} closeBtn={closeButton} />
            )}
        </>
    );
};

const Confirmation = ({ closeBtn }: { closeBtn: JSX.Element }) => (
    <div style={{ textAlign: "center" }}>
        <h2 className='h1 my-1'>Chat Soon!</h2>
        {closeBtn}
    </div>
);

const ErrorEl = ({ error }: { error: string }) => {
    return (
        <div className='roboto' style={{ color: "var(--color-secondary)" }}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                fill='var(--color-secondary)'
                viewBox='0 0 16 16'
            >
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
            </svg>{" "}
            {error}
        </div>
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
                className='a'
                htmlFor='contact-email'
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
    cb: () => void,
    errorCb: () => void
) => {
    console.log(email);
    let emailRes;
    try {
        emailRes = await fetch("https://g11bcgp5ef.execute-api.us-east-1.amazonaws.com/default/PortfolioMailer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": import.meta.env.VITE_API_KEY,
            },
            mode: "no-cors",
            body: JSON.stringify(email),
        });
        console.log("emailRes", emailRes);
        const result = await emailRes.json();
        console.log("resttttttt", result);

        if (result.status === 200) {
            cb();
        } else {
            errorCb();
        }
    } catch (err) {
        console.log("err", err);
    }
};

const EmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailForm = ({ confirm, closeBtn }: { confirm: () => void; closeBtn: JSX.Element }) => {
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
            () => {
                setTimeout(() => {
                    confirm();

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
        <form onSubmit={submitForm} style={{ display: "grid", gap: "0.5rem" }}>
            <p>
                Fill out the form and I'll get back to you promptly
                <br />
                You can also email me directly at
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
                    className='a'
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
                    // minLength={50}
                />
                {error.msg}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                {closeBtn}
                <button type='submit' className='a black w-100'>
                    {loading ? "Sending..." : <>Send &rarr;</>}
                </button>
            </div>
        </form>
    );
};
