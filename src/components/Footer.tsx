const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; 2025 Michael Constantino's Personal Portfolio. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/MJayConstantino"
            className="text-muted-foreground hover:text-primary mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/michael-constantino-2751b4313/"
            className="text-muted-foreground hover:text-primary mx-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mjconstantino12345@gmail.com"
            className="text-muted-foreground hover:text-primary mx-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
