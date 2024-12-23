const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; 2023 My Portfolio. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/yourusername"
            className="text-muted-foreground hover:text-primary mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-muted-foreground hover:text-primary mx-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
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
