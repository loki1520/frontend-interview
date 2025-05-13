

export const AddForm = (props) => {
    console.log('AddForm rendered');

    return (
        <form className="add-form">
            <input placeholder="Имя" />
            <input placeholder="Возраст" />
            <button >Создать</button>
        </form>
    );
};
