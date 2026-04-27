function PopupEP1() {

    function showAlert() {
        alert("React Topic Selected");
    }

    function showConfirm() {
        confirm("Are you sure?");
    }

    function showPrompt() {
        prompt("Enter React Topic");
    }

    return (

        <div className="card">

            <h2>EP1 Popup Boxes</h2>

            <button onClick={showAlert}>
                Alert Popup
            </button>

            <br /><br />

            <button onClick={showConfirm}>
                Confirm Popup
            </button>

            <br /><br />

            <button onClick={showPrompt}>
                Prompt Popup
            </button>

        </div>
    );
}

export default PopupEP1;