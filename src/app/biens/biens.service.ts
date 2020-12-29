import {Injectable} from '@angular/core';
import {BienModel} from './bien.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private biens: BienModel [] = [
    {
      id: 1,
      title: 'School',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?court',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
    {
      id: 2,
      title: 'Street',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?school',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
    {
      id: 3,
      title: 'Stadium',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?stadium',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
    {
      id: 4,
      title: 'Beyonce',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?street',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
    {
      id: 5,
      title: 'Food',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?fish',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
    {
      id: 6,
      title: 'Clothes',
      description: 'The description',
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?t-shirt',
      state: true,
      category: 'category',
      sale: true,
      createdAt: new Date(2019, 4, 5, 22, 65)
    },
  ];

  constructor() {
  }

  getAllbiens(): BienModel[] {
    return this.biens;
  }

  // tslint:disable-next-line:typedef
  getBienById(id: number) {
    return this.biens.find(
      (b) => {
        return b.id === id;
      }
    );
  }
  addBien(newBien: BienModel): void{
    this.biens.push(newBien);
  }
  updateBien(bienUpdated: BienModel): void{
    let oldBien: BienModel | undefined = this.biens.find(
      (b) => {
      return b.id === bienUpdated.id;
    });
    if (oldBien) {
      oldBien = {...bienUpdated};
    }
  }

  getLastId(): number {
    return this.biens[this.biens.length - 1] ?
      this.biens[this.biens.length - 1].id :
      this.biens[this.biens.length - 1].id = 0;
  }
  deleteBien(id: number): void{
    let i: number;
    // @ts-ignore
    i = this.getBienById(id).id - 1;
    this.biens.splice( i, 1);
  }

}

