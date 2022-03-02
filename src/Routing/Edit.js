import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
        return (
            <>
            <div className="design">
                Student Data Edit Page {id}
            </div>
            </>
        );
    };

export default Edit;