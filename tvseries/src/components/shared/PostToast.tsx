import { FC } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const PostToast: FC = () => {
  return (
    <ToastContainer position='middle-center'>
      <Toast bg='dark'>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>Uploaded!</strong>
          <small>Right now</small>
        </Toast.Header>
        <Toast.Body>Successfully uploaded!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default PostToast;
