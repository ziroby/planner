import "./App.css"

export default function MedList() {
    var checkListItems=["Early morning", "Lunch", "Post-Lunch", "Evening", "BP"]
    var index=1
    return <div className="medlist">
        {checkListItems.map(item => <div key={index++}><big>□</big> {item}</div>)}
    </div>
}