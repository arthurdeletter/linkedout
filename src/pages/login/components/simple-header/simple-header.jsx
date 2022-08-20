import { Button } from '../../../../ui/';
import './simple-header.css';
import { useNavigate } from 'react-router-dom'; 
import { Container } from '../../../../ui';

export const SimpleHeader = () => {
    const navigate = useNavigate();
    return (
        <header className='simpleHeader'>
            <Container>
                <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png" alt="LinkedIn logo" />

                <div className="simpleHeader__tabs">
                    <Button variant='tertiary' text="Join now" onClick={() => navigate('/join')} />
                    <Button variant='secondary' text="Sign in" onClick={() => navigate('/login')} />
                </div>
            </Container>
        </header>
    )
}