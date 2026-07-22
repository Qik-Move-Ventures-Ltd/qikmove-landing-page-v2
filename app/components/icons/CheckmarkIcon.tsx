export default function CheckmarkIcon({ className }: { className: string }) {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 3L3 5L7 1" fill="#BDEE2B" />
        <path
          d="M1 3L3 5L7 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
