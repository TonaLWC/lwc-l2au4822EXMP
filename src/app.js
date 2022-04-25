import { LightningElement } from 'lwc';

export default class LightningExampleAccordionConditional extends LightningElement {
    activeSectionMessage = '';
    isDVisible = false;
    //Crea variable para mostrar el día hoy en consola
    fechaLimite = new Date().toDateString();

   

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Revisa  ' + event.detail.openSections;
    }

    handleToggleDM() {
        this.isDVisible = !this.isDVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }
}
