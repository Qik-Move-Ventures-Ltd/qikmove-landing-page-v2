export default function EmailIcon({ className }: { className: string }) {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H16C16.825 4 17.5 4.675 17.5 5.5V14.5C17.5 15.325 16.825 16 16 16H4C3.175 16 2.5 15.325 2.5 14.5V5.5C2.5 4.675 3.175 4 4 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 5.5L10 10.75L2.5 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
