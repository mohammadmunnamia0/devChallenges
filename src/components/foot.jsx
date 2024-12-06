const Foot = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <p className="items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav>
      </footer>
    </div>
  );
};

export default Foot;
