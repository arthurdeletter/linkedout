import { FormWrapper } from "./components/form/form-wrapper"
import { SimpleHeader } from "./components/simple-header/simple-header"
import {form} from './form-types';

export const LogIn = () => {
    return (
        <div className="login" style={{height: '100vh'}}>
            <SimpleHeader />
            <FormWrapper type={form.LOGIN} title="Welcome to LinkedOut" />
        </div>
    )
}