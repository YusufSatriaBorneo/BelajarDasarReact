const Footers = (props) => {
  return (
    <footer>
      <div>
        <p>Autor : Yusuf Satria Borneo</p>
        <p>
          <a href="yusufsatriaborneo@gmail.com">yusufsatriaborneo@gmail.com</a>
        </p>
        <p>Saya : {props.fotText}</p>
        <p>Tipe : {props.footText}</p>
      </div>
      <div>{props.paragraf()}</div>
    </footer>
  );
};

export default Footers;
