import CardBS from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { db, storage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

function CardTeste({ product }) {
  //const [image, setImage] = useState();

  //async function getImage(location) {
  //  const ImageURL = await getDownloadURL(ref(storage, location));
  //  return await ImageURL;
  //}

  useEffect(() => {
    //let wasUnmounted = false;
    //getImage(product.produtoImg).then((image) => {
    //  if (wasUnmounted) return;
    //  setImage(image);
    //});
    //return () => {
    //  wasUnmounted = true;
    //};
  }, []);

  //<img class="justify-content-start" src={product.produtoImg} alt="babi" />

  return (
    <>
      <CardBS className="m-3" style={{ width: "18rem" }}>
        <CardBS
          className="justify-content-start border-0 pt-3 pb-1"
          style={{ width: "3rem" }}
        >
        </CardBS>
        {product.produtoImg ? <CardBS.Img variant="top" src={product.produtoImg} /> : "Loading"}
        <CardBS.Body>
          <CardBS.Title> {product.produtoNome} </CardBS.Title>
          <CardBS.Text>{product.produtoDesc}</CardBS.Text>
          <h3>33</h3>
          <Button href="/Produto1" variant="primary">
            Comprar
          </Button>
        </CardBS.Body>
      </CardBS>
    </>
  );
}

export default CardTeste;
