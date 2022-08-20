import "./layout.css"

export const TwoColumnLayout = ({children, align, ...props}) => {
    return <div className="twoColumnLayout" style={{alignItems: align}} {...props}>
        {children}
    </div>
}