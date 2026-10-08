import "./Button.css";

export function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`ui-button ui-button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
