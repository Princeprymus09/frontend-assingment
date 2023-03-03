const Footer = () => {
  return (
    <footer style={styles.wrapper}>
      <div style={styles.sections}>
        <div>
          <h3>About Us</h3>
          <p style={styles.footerLinks}>About Us</p>
        </div>
        <div>
        <h3>Contact Us</h3>
          <p style={styles.footerLinks}>Telephone: 1800 121 158 158</p>
          <p style={styles.footerLinks}>Email: support@nourishstore.co.in</p>
        </div>
        <div>
          <h3>SUPPORT &amp; POLICIES</h3>
          <p style={styles.footerLinks}>Help &amp; Feedback</p>
          <p style={styles.footerLinks}>Quality Standards</p>
          <p style={styles.footerLinks}>Terms and Conditions</p>
          <p style={styles.footerLinks}>Privacy Policy</p>
        </div>
      </div>
      <div style={styles.addressWrapper}>
        <p style={styles.boldHeading}>Address</p>
        <p style={styles.footerLinks}>Telephone: 1800 121 158 158</p>
        <p style={styles.footerLinks}>Email: support@nourishstore.co.in</p>
      </div>
    </footer>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#626eae",
    padding: 40,
    width: '100%',
    color: 'white',
    marginTop: 20
  },
  sections: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerLinks: {
    marginTop: 15
  },
  boldHeading: {
    fontWeight: 'bold'
  },
  addressWrapper: {
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: 'black',
    borderTopStyle: 'solid',
    marginTop: 40,
    paddingTop: 10
  },
};

export default Footer;
