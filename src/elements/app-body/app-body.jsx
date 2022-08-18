import { Container } from "../../ui";
import "./app-body.css";

export const AppBody = ({ children }) => {
  return (
    <div className="app__body">
      <Container>{children}</Container>
    </div>
  );
};
