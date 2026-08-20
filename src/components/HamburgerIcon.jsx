import PropTypes from "prop-types";

function HamburgerIcon({ isOpen }) {
    return (
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default HamburgerIcon;

HamburgerIcon.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
