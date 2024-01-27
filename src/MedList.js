import "./App.css"

export default function MedList() {
    var checkListItems=["Early morning", "Lunch", "Post-Lunch", "Evening", "BP"]
    return <div class="medlist">
        {checkListItems.map(item => <div><big>□</big> {item}</div>)}
    </div>
}