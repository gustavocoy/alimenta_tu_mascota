import Header from "./Header";
import Body from "./Body";

function Table (props){



    
    return (
        <div className="m-5">
        <table class="table">
            <caption>Tabla de usuarios</caption>
  <Header />
  <Body />
</table>
</div>
    );
} 

export default Table;