class ItemHandler {
    constructor(category, formId, inputId, displayId) {
      this.category = category;
      this.key = `${category}-data`;
      this.storage = this.getLocalStorage();
      this.form = document.getElementById(formId);
      this.input = document.getElementById(inputId);
      this.container = document.getElementById(displayId);
      this.initialize();
    }
  
    initialize() {
      this.form.addEventListener("submit", (e) => this.addEntry(e));
      this.renderAll();
    }
  
    getLocalStorage() {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    }
  
    updateLocalStorage() {
      localStorage.setItem(this.key, JSON.stringify(this.storage));
    }
  
    renderAll() {
      this.container.innerHTML = "";
      this.storage.forEach((text, idx) => {
        const isMemo = this.category === "catatan";
        const wrapper = isMemo ? document.createElement("div") : document.createElement("li");
  
        if (isMemo) {
          wrapper.classList.add("kartu-catatan");
          wrapper.innerHTML = `
            <p>${text}</p>
            <button onclick="controllers['${this.category}'].remove(${idx})">Hapus</button>
          `;
        } else {
          wrapper.innerHTML = `
            <span>${text}</span>
            <button onclick="controllers['${this.category}'].edit(${idx})">Ubah</button>
            <button onclick="controllers['${this.category}'].remove(${idx})">Hapus</button>
          `;
        }
  
        this.container.appendChild(wrapper);
      });
    }
  
    addEntry(event) {
      event.preventDefault();
      const newItem = this.input.value.trim();
      if (!newItem) return;
  
      this.storage.push(newItem);
      this.input.value = "";
      this.updateLocalStorage();
      this.renderAll();
    }
  
    edit(index) {
      const edited = prompt(`Ubah ${this.category}:`, this.storage[index]);
      if (edited !== null) {
        this.storage[index] = edited.trim();
        this.updateLocalStorage();
        this.renderAll();
      }
    }
  
    remove(index) {
      this.storage.splice(index, 1);
      this.updateLocalStorage();
      this.renderAll();
    }
  }
  
  // Objek manager yang baru
  const controllers = {
    catatan: new ItemHandler("catatan", "form-catatan", "input-catatan", "daftar-catatan"),
    kuliah: new ItemHandler("kuliah", "form-kuliah", "input-kuliah", "daftar-kuliah"),
    tugas: new ItemHandler("tugas", "form-tugas", "input-tugas", "daftar-tugas"),
    todo: new ItemHandler("todo", "form-todo", "input-todo", "daftar-todo"),
  };
  
