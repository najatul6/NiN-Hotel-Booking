import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          px-4
          w-full
          ${outline ? "bg-white" : "bg-deep-orange"}
          ${outline ? "border-black" : "border-deep-orange"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "py-1" : "py-3"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
              absolute
              left-4
              top-3
            "
        />
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.any,
  onClick: PropTypes.any,
  disabled:PropTypes.any,
  outline:PropTypes.any,
  small:PropTypes.any,
};

export default Button;
