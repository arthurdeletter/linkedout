import './form-wrapper.css'
import { Container } from "../../../../ui"
import { Form } from "./form"

export const FormWrapper = ({type, title}) => {
    return (
        <div className="formWrapper">
            <Container>
                <Form type={type} title={title} />
                <img src="https://www.popwebdesign.net/images/graphic-design/graphics/illustration.png" alt="Illustration" />
            </Container>
        </div>
    )
}