import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getdetailsproducts } from "../../redux/apiRequest";


import Details from "./components/details/Details";

function DetailsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        getdetailsproducts(dispatch, slug, navigate);
    }, []);

    return (
        <div>
            <Details />
        </div>
    );
}

export default DetailsPage;