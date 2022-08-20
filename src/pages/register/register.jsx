import { FormWrapper } from "../login/components/form/form-wrapper"
import { SimpleHeader } from "../login/components/simple-header/simple-header"
import { form } from "../login/form-types"

export const Register = () => {
    return (
        <div className="register" style={{height: '100vh'}}>
            <SimpleHeader />
            <FormWrapper type={form.REGISTER} title="Join LinkedOut" />
        </div>
    )
}