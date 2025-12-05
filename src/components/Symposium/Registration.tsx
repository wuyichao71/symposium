import { Button } from "antd";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="R-align">
      <Button
        color="primary"
        // size="large"
        variant="solid"
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=4I7Qo5BbM0-dFJYCO7eKYqIYeebfVcJChLShsiI9svFUOU9QOEgxNkhDTUs4QjAzT1RER0wzVkNYVC4u"
        className="R-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Registration
      </Button>
    </div>
  );
};

export default Registration;
