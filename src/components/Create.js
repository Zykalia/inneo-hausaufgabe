import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [animation, setAnimation] = useState('');

    let interactionList = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        const interaction = {title, animation};
        interactionList.push(interaction);

        console.log(JSON.stringify(interactionList));
    }

    // TODO: für späteren Rest usecase
    const handleSubmitRest = (e) => {
        e.preventDefault();
        const interaction = {title, animation};

        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(interaction)
        }).then(() => {
            console.log('new interaction added');
        })
    }

    // Formular
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    placeholder="Enter a title ..."
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Interaction event:</label>
                <select 
                    value={animation}
                    placeholder="Select animation ..."
                    onChange={(e) => setAnimation(e.target.value)}
                    >
                        <option value="animation1">Animation 1</option>
                        <option value="animation2">Animation 2</option>
                </select>
                {/* TODO: Checkbox */}
                <label><i class="bi bi-square"></i> Loop</label>
                <button className="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create