import React, { Component } from "react";

class HargaBuah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 500 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputName: "",
      inputHarga: null,
      inputBerat: null,
      indexOfForm: -1,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHargaChange = this.handleHargaChange.bind(this);
    this.handleBeratChange = this.handleBeratChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleNameChange(event) {
    this.setState({ inputName: event.target.value });
  }
  handleHargaChange(event) {
    this.setState({ inputHarga: event.target.value });
  }
  handleBeratChange(event) {
    this.setState({ inputBerat: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.inputName.replace(/\s/g, "") !== "" &&
      this.state.inputHarga !== "" &&
      this.state.inputBerat !== ""
    ) {
      let dataHargaBuahBaru = this.state.arrDataHargaBuah;
      if (this.state.indexOfForm === -1) {
        dataHargaBuahBaru = [
          ...dataHargaBuahBaru,
          {
            nama: this.state.inputName,
            harga: this.state.inputHarga,
            berat: this.state.inputBerat,
          },
        ];
      } else {
        dataHargaBuahBaru[this.state.indexOfForm] = {
          nama: this.state.inputName,
          harga: this.state.inputHarga,
          berat: this.state.inputBerat,
        };
      }
      this.setState({
        arrDataHargaBuah: dataHargaBuahBaru,
        inputName: "",
        inputHarga: "",
        inputBerat: "",
        indexOfForm: -1,
      });
    }
  }

  handleEdit(event) {
    let index = event.target.value;
    let buahBaru = this.state.arrDataHargaBuah[index];
    console.log(buahBaru);
    this.setState({
      inputName: buahBaru.nama,
      inputHarga: buahBaru.harga,
      inputBerat: buahBaru.berat,
      indexOfForm: index,
    });
  }

  handleDelete(event) {
    let index = event.target.value;
    let buah = this.state.arrDataHargaBuah;
    let editedBuah = buah[this.state.indexOfForm];
    console.log(editedBuah);
    buah.splice(index, 1);
    if (editedBuah !== undefined) {
      var indexBaru = buah.findIndex((el) => el === editedBuah);
      this.setState({
        arrDataHargaBuah: buah,
        indexOfForm: indexBaru,
      });
    } else {
      this.setState({
        arrDataHargaBuah: buah,
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <style>
            {`div{
            padding-left:2px;
            font-family:serif;
          } table{
            border: 1px solid black;
            width: 700px;
          } th {
            background-color: #aaaaaa;
          } td {
            background-color:#ff7f50;
          } h1{margin-left: 10rem}`}
          </style>
          <h1>Tabel Harga Buah</h1>
          <table>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
            {this.state.arrDataHargaBuah.map((el, index) => {
              return (
                <tr>
                  <td>{el.nama}</td>
                  <td>{el.harga}</td>
                  <td>{el.berat / 1000 + " kg"}</td>
                  <button onClick={this.handleEdit} value={index}>
                    Edit
                  </button>
                  &nbsp;
                  <button onClick={this.handleDelete} value={index}>
                    Delete
                  </button>
                </tr>
              );
            })}
          </table>
        </div>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form style={{ marginLeft: "2rem" }} onSubmit={this.handleSubmit}>
          <label>Masukkan Nama :</label>
          <input
            style={{ marginLeft: "1rem" }}
            type="text"
            value={this.state.inputName}
            onChange={this.handleNameChange}
          />
          <br />
          <label>Masukkan Harga :</label>
          <input
            style={{ marginLeft: "1rem", marginTop: "1rem" }}
            type="text"
            value={this.state.inputHarga}
            onChange={this.handleHargaChange}
          />
          <br />
          <label>Masukkan Berat:</label>
          <input
            style={{ marginLeft: "1rem", marginTop: "1rem" }}
            type="text"
            value={this.state.inputBerat}
            onChange={this.handleBeratChange}
          />
          <br />
          <button style={{ marginTop: "1rem" }}>submit</button>
        </form>
      </>
    );
  }
}
export default HargaBuah;
