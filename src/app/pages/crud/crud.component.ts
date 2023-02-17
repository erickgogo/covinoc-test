import { Component, OnInit, ViewChild } from '@angular/core';
import { Homework } from 'src/app/models/homework';
import { HomeworksService } from 'src/app/services/homeworks.service';
import { Table } from 'primeng/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  homeworks: Homework[] = [];
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    state: [false],
  });
  constructor(
    private _homeworksService: HomeworksService,
    private fb: FormBuilder,
    private _loaderService: LoaderService,
    private _toastService: ToastService
  ) {}
  ngOnInit(): void {
    this._loaderService.show();
    this._homeworksService.getAll().subscribe((homeworks: Homework[]) => {
      this.homeworks = homeworks;
      this._loaderService.hide();
    });
  }

  save() {
    console.log(this.form.value);
    this._loaderService.show();
    this._homeworksService.create(this.form.value).subscribe((data) => {
      this.homeworks.push(data)
      this._loaderService.hide();
      this._toastService.showToast('success', 'Se ha añadido la tarea');
      this.form.reset();
    });
  }
  update(homework: Homework) {
    this._loaderService.show();
    this._homeworksService.update(homework.id, homework).subscribe(() => {
      this._loaderService.hide();
      this._toastService.showToast('info', 'Se ha actualizado la tarea');
    });
  }
  delete(homework: Homework) {
    this._loaderService.show();
    this._homeworksService.delete(homework.id).subscribe(() => {
      this._loaderService.hide();
      this.homeworks = this.homeworks.filter((el) => el.id !== homework.id);
      this._toastService.showToast('warn', 'Se ha eliminado la tarea');
    });
  }

  filter(event: any) {
    this.table.filter(event.value, 'title', 'contains');
  }
}
