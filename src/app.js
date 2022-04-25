import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    activeSectionMessage = '';
    isDVisible = false;
    //Crea variable para mostrar el día hoy en consola
    fechaLimite = Date.now();
    hoy = new Date(this.fechaLimite);
    hoy =  hoy.toDateString();
   

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
