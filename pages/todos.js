
/*
export async function getStaticProps(){
    const data = await fetch("http://localhost:3000/api/hello");
    const todos = await data.json();
    return{
        props: { todos },
    }
}
*/

export async function getServerSideProps() {
    const url = 'https://docs.google.com/spreadsheets/d/';
    const ssid = '1ZmD9DdysQmyirRmG6ZAp5nAl8pI4lai6yO0QWETJx3M';
    const query1 = `/gviz/tq?`;
    const endpoint1 = `${url}${ssid}${query1}`;
    const data = await fetch(endpoint1);
    const todos = await data.text();
    const temp = todos.substr(47).slice(0, -2);
    const json = JSON.parse(temp);
    const rows = json.table.rows;

    return {
        props: { rows },
    }
}

export default function Todos({ rows }) {
    return (
        <>
            <h1>Todos</h1>
            <div>
                {rows.map((rows) => (
                    <div className="py-4" key={1}>
                        <div>{rows.c[0].v}</div>
                        <div>{rows.c[1].v}</div>
                        <div>{rows.c[2].v}</div>
                    </div>
                ))}
            </div>
        </>
    )
}