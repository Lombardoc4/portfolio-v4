import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "../layout";
import { Clock } from "../components/Clock";
import { useEffect, useState } from "react";
import styled from "styled-components";

const configError = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <>This page doesn't exist</>;
        }

        if (error.status === 401) {
            return <>You aren't authorized to see this</>;
        }

        if (error.status === 503) {
            return <>Looks like our API is down</>;
        }

        if (error.status === 418) {
            return <>🫖</>;
        }
    }

    return <>Something went wrong</>;
};

export const ErrorPage = () => {
    const error = useRouteError();

    const errorEl = configError(error);

    return <ErrorLayout>{errorEl}</ErrorLayout>;
};

const ErrorLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <StyledLayout className='bungee container'>
                <div className='copy'>
                    <h1 className='my-4'>{children}</h1>
                </div>

                <div className='clock-container'>
                    <Clock />
                </div>

                <div className='copy'>
                    <DigitalClock />
                </div>
            </StyledLayout>
        </Layout>
    );
};

const StyledLayout = styled.main`
    overflow: hidden;
    position: relative;

    .copy {
        margin-block: 2rem;
        text-align: center;
    }

    .clock-container {
        min-height: 50lvh;
        display: flex;
        place-items: center;
        place-content: center;
    }
`;

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeInterval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return <h2>{time}</h2>;
};
