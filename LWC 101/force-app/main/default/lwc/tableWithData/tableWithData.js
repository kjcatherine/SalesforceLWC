import { LightningElement, track } from 'lwc';

export default class TableWithData extends LightningElement {
    @track data = [];

    addRow() {
        let newRow = {
            id: Date.now(),
            name: '',
            phone: '',
            accountSource: ''
        };
        this.data.push(newRow);
    }

    removeRow(event) {
        let index = event.target.dataset.index;
        this.data.splice(index, 1);
        this.data = [...this.data];
    }

    handleInputChange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        this.data[index][field] = value;
        this.data = [...this.data];
    }
}