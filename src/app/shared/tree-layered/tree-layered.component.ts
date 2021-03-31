import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree-layered',
  templateUrl: './tree-layered.component.html',
  styleUrls: ['./tree-layered.component.scss']
})
export class TreeLayeredComponent implements OnInit {

  @Output() allSelectedItems = new EventEmitter<any>();

  data: any = [
    {
      id: 1,
      description: "Group 1",
      categories: [
        {
          id: 1,
          description: "Category 1",
          items: [
            { id: 1, description: "G1 - C1 - Item 1" },
            { id: 2, description: "G1 - C1 - Item 2" },
            { id: 3, description: "G1 - C1 - Item 3" },
            { id: 4, description: "G1 - C1 - Item 4" },
          ]
        },
        {
          id: 2,
          description: "Category 2",
          items: [
            { id: 1, description: "G1 - C2 - Item 1" },
            { id: 2, description: "G1 - C2 - Item 2" },
            { id: 3, description: "G1 - C2 - Item 3" },
            { id: 4, description: "G1 - C2 - Item 4" },
          ]
        },
        {
          id: 3,
          description: "Category 3",
          items: [
            { id: 1, description: "G1 - C3 - Item 1" },
            { id: 2, description: "G1 - C3 - Item 2" },
            { id: 3, description: "G1 - C3 - Item 3" },
            { id: 4, description: "G1 - C3 - Item 4" },
          ]
        },
      ]
    },
    {
      id: 2,
      description: "Group 2",
      categories: [
        {
          id: 1,
          description: "Category 1",
          items: [
            { id: 1, description: "G2 - C1 - Item 1" },
            { id: 2, description: "G2 - C1 - Item 2" },
            { id: 3, description: "G2 - C1 - Item 3" },
            { id: 4, description: "G2 - C1 - Item 4" },
          ]
        },
        {
          id: 2,
          description: "Category 2",
          items: [
            { id: 1, description: "G2 - C2 - Item 1" },
            { id: 2, description: "G2 - C2 - Item 2" },
            { id: 3, description: "G2 - C2 - Item 3" },
            { id: 4, description: "G2 - C2 - Item 4" },
          ]
        },
        {
          id: 3,
          description: "Category 3",
          items: [
            { id: 1, description: "G2 - C3 - Item 1" },
            { id: 2, description: "G2 - C3 - Item 2" },
            { id: 3, description: "G2 - C3 - Item 3" },
            { id: 4, description: "G2 - C3 - Item 4" },
          ]
        },
      ]
    },
    {
      id: 3,
      description: "Group 3",
      categories: [
        {
          id: 1,
          description: "Category 1",
          items: [
            { id: 1, description: "G3 - C1 - Item 1" },
            { id: 2, description: "G3 - C1 - Item 2" },
            { id: 3, description: "G3 - C1 - Item 3" },
            { id: 4, description: "G3 - C1 - Item 4" },
          ]
        },
        {
          id: 2,
          description: "Category 2",
          items: [
            { id: 1, description: "G3 - C2 - Item 1" },
            { id: 2, description: "G3 - C2 - Item 2" },
            { id: 3, description: "G3 - C2 - Item 3" },
            { id: 4, description: "G3 - C2 - Item 4" },
          ]
        },
        {
          id: 3,
          description: "Category 3",
          items: [
            { id: 1, description: "G4 - C3 - Item 1" },
            { id: 2, description: "G4 - C3 - Item 2" },
            { id: 3, description: "G4 - C3 - Item 3" },
            { id: 4, description: "G4 - C3 - Item 4" },
          ]
        },
      ]
    },
  ]

  categories: any = [];
  items: any = [];

  selectedCategory: any = {};
  selectedItems: any = [];
  selectedTree: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onGroupChange(event) {
    let selectedGroup = parseInt(event.target.value);
    console.log(selectedGroup);
    
    this.categories = [];

    this.data.map(group => {
      if(group.id == selectedGroup) {
        group.categories.map(category => {
          this.categories.push(category);
        })
      }
    })

    console.log(this.categories);
  }

  onCategoryChange(event) {
    let selectedCategory = parseInt(event.target.value);
    console.log(selectedCategory);

    this.items = [];
    this.selectedItems = [];

    this.categories.map(category => {
      if(category.id == selectedCategory) {
        this.selectedCategory = category;
        
        category.items.map(item => {
          this.items.push(item);
        })
      }
    })

    console.log(this.items);
  }

  onItemSelect(event) {
    this.selectedItems.push(event);

    // send data back parent
    this.allSelectedItems.emit(this.selectedItems);
  }

}
