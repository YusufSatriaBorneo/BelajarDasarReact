const Mybutton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Click, Akan Muncul Alert</button>
    </div>
  );
};

export default Mybutton;
