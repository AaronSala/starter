import useFetch from "./useFetch"
const Todo =()=> {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <>
            {
                data && data.map((item) => {
                    return <p key={item.id}> { item.id}  {item.title}</p>
                })
        }
        </>
      );
}

export default Todo;