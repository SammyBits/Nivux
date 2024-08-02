import { Card } from "../../components/common/Card";
import { Container } from "../../components/common/Container";
import { Navbar } from "../../components/navbars/Navbar";

export const ChildrenPage = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};
