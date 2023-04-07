import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CommentMovie from '../CommentMovie/CommentMovie';
import './ModalMovie.css'

export default function ModalMovie(props){
    
    const [showComment, setShowComment] = useState(false);
    const handleComment = () => setShowComment(!showComment);


    function commentState () {
        return ( showComment ? 'Cancel comment' : 'Add comment')
    }

    return (
        <>
        <Modal id= "modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <img src = {props.data.posterPath} alt = {props.data.title}/>
        <Modal.Body>{props.data.overview}</Modal.Body>
        {showComment ? <CommentMovie/> : null}
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleComment}>
           {commentState()}
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}