import { useState } from "react";
import { Button } from "../../../../components/common/Button";
import { Card } from "../../../../components/common/Card";
import { Container } from "../../../../components/common/Container";
import { Navbar } from "../../../../components/navbars/Navbar";
import { ShowComponent } from "../../../../components/utils/ShowComponent";

export const ChildrenPage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Aquí se puede agregar cualquier contenido que se desee */}
      {/* Si te fijas, el componente Navbar esta
      envolviendo a varios elementos. Puedes usar esta logica para que
      varios elementos tenga una misma logica de estilos o comportamiento. */}
      <Navbar>
        <ul className="flex gap-5">
          <li>Ejemplo 1</li>
          <li>Ejemplo 2</li>
          <li>Ejemplo 3</li>
          <li>Ejemplo 4</li>
          <li>Ejemplo 5</li>
        </ul>
      </Navbar>
        {/* Si te fijas estoy usando el componente Container para mostrar las cards en forma de grid */}
      <Container columns={2} gap={4}>
        <Card>
          <h1>Card 1</h1>
          <p>Este es el contenido de la card 1</p>
        </Card>
        <Card>
          <h1>Card 2</h1>
          <p>Este es el contenido de la card 2</p>
        </Card>
        <Card>
          <h1>Card 3</h1>
          <p>Este es el contenido de la card 3</p>
        </Card>
        <Card>
          <h1>Card 4</h1>
          <p>Este es el contenido de la card 4</p>
        </Card>
        <Card>
          <h1>Card 5</h1>
          <p>Este es el contenido de la card 5</p>
        </Card>
        <Card>
          <h1>Card 6</h1>
          <p>Este es el contenido de la card 6</p>
        </Card>
      </Container>
      <Container columns={2} gap={2}>
        <Card>
          <h1>Card 1</h1>
          <p>Este es el contenido de la card 1</p>
          <Button title="Click me" onClick={() => setShow(!show)} />
        </Card>
      </Container>
        {/* Otro ejemplo de uso de un componente que recibe children */}
      <ShowComponent shouldShow={show}>
        <h1 className="text-bold text-white">Este es el contenido que se muestra si show es true</h1>
      </ShowComponent>

    </>
  );
};
