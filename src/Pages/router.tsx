import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense} from "react";
import ExtendedRouter from "../extendedRouter";
import history from "../history";
import MainLayout from "../components/MainLayout";
import Loader from "../components/Loader";
import Quiz from "./Quiz";


class Router extends React.Component {
    
    render() {
        return (
            <ExtendedRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Quiz />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </MainLayout>
                </Suspense>
            </ExtendedRouter>
        );
    }
}

export default Router;
