export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground bg-background">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} SAASITUP. All rights reserved.</p>
      </div>
    </footer>
  );
}
