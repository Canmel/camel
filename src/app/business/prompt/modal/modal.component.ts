import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;
  comfirm_message: string;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    this.comfirm_message = 'undefine';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  openModalWithTemplate(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    this.comfirm_message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.comfirm_message = 'Declined!';
    this.modalRef.hide();
  }
}
