const Contact = (props) => {
  return (
    <footer>
      <p>Autor : Yusuf Satria Borneo</p>
      <p>
        <a href="yusufsatriaborneo@gmail.com">yusufsatriaborneo@gmail.com</a>
      </p>
      <p>Saya : {props.fotText}</p>
      <p>Tipe : {props.footText}</p>
      <p>{props.paragraf()}</p>
    </footer>
  );
};

export default Contact;
