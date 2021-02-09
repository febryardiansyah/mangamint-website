import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaginationComponent({ currentPage }) {
    const hasPrevious = currentPage > 1;
  return (
    <div className="mb-3" style={{
        justifyItems:'right'
    }}>
        {hasPrevious && <Button className='mr-2' variant="secondary" as={Link} to={`/all/page/${currentPage - 1}`}>Previous</Button>}
        <Button variant="secondary"as={Link} to={`/all/page/${currentPage + 1}`}>Next</Button>
    </div>
  );
}

export default PaginationComponent;
