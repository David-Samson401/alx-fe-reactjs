function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
