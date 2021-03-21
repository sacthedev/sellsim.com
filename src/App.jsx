import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [
        {
          price: 190,
          id: 0,
          name: "Moto G Power",
          brand: "Motorola",
          modelYear: "2021",
          storage: {
            ram: "3GB",
            capacity: "32GB",
          },
          amazonLink:
            "https://www.amazon.com/Power-Battery1-Unlocked-Motorola-Camera/dp/B08NWDMR9N/ref=psdc_2407749011_t1_B087HCYT7G?th=1",
          screenSize: "6.6 inches",
          displayType: "IPS",
          operatingSystem: "Android 10",
          cellularTechnology: "4G",
          batterySize: "5000 mAh",
          camera: {
            frontCamera: "8MP",
            rearCamera: "48MP + 12MP",
          },
          image: {
            folderName: "moto_g_power",
            total: 5,
          },
        },
        {
          price: 120,
          id: 1,
          name: "Moto E",
          brand: "Motorola",
          modelYear: "2021",
          storage: {
            ram: "2GB",
            capacity: "32GB",
          },
          amazonLink:
            "https://www.amazon.com/Power-Battery1-Unlocked-Motorola-Camera/dp/B08NWDMR9N/ref=psdc_2407749011_t1_B087HCYT7G?th=1://www.amazon.com/Moto-Unlocked-Motorola-Camera-XT2052-1/dp/B086H3HH5V/ref=psdc_2407749011_t2_B08NWDMR9N",
          screenSize: "6.6 inches",
          displayType: "LCD",
          operatingSystem: "Android 10",
          cellularTechnology: "4G",
          batterySize: "3550 mAh",
          camera: {
            frontCamera: "5MP",
            rearCamera: "13MP + 2MP",
          },
          image: {
            folderName: "moto_e",
            total: 5,
          },
        },
        {
          price: 160,
          id: 2,
          name: "Moto G Play",
          brand: "Motorola",
          modelYear: "2021",
          storage: {
            ram: "3GB",
            capacity: "32GB",
          },
          amazonLink:
            "https://www.amazon.com/Power-Battery1-Unlocked-Motorola-Camera/dp/B08NWDMR9N/ref=psdc_2407749011_t1_B087HCYT7G?th=1",
          screenSize: "6.5 inches",
          displayType: "IPS TFT LCD",
          operatingSystem: "Android 10",
          cellularTechnology: "4G",
          batterySize: "5000 mAh",
          camera: {
            frontCamera: "5MP",
            rearCamera: "13MP + 2MP",
          },
          image: {
            folderName: "moto_g_play",
            total: 5,
          },
        },
        {
          price: 180,
          id: 3,
          name: "OnePlus Nord N 100",
          brand: "OnePlus",
          modelYear: "2021",
          storage: {
            ram: "4GB",
            capacity: "64GB",
          },
          amazonLink:
            "https://www.amazon.com/Power-Battery1-Unlocked-Motorola-Camera/dp/B08NWDMR9N/ref=psdc_2407749011_t1_B087HCYT7G?th=1",
          screenSize: "6.5 inches",
          displayType: "LCD",
          operatingSystem: "Android 10",
          cellularTechnology: "4G",
          batterySize: "5000 mAh",
          camera: {
            frontCamera: "8MP",
            rearCamera: "13MP + 2MP + 2MP",
          },
          image: {
            folderName: "one_plus_nord_n_100",
            total: 5,
          },
        },
      ],
      selected: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("START componentDidMount");
    console.log("END componentDidMount");
  }
  handleClick(id) {
    console.log(id);
    this.setState({ selected: id });
  }
  render() {
    return (
      <div className="container mx-auto">
        <div className="w-full p-2 bg-black header">
          <ul className="flex justify-center">
            {this.state.phones.map((el) => {
              return (
                <li key={el.id} className="px-2">
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => this.handleClick(el.id, e)}
                      className="text-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-12 text-white stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center text-white name"> {el.name}</div>{" "}
                  {el.id === this.state.selected && (
                    <hr className="h-3 bg-pink-500 rounded-lg"></hr>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="body">
          <PhoneInfo phone={this.state.phones[this.state.selected]}></PhoneInfo>
        </div>
      </div>
    );
  }
}

function PhoneInfo(props) {
  /*
price
name
modelYear
storage
screenSize
batterySize
camera -> frontCamera & rearCamera
*/

  return (
    <div className="container mx-auto mt-2 phone-info">
      <h1 className="py-4 mb-4 text-2xl font-semibold text-center border-b-2 border-gray-300">
        {props.phone.name}
      </h1>
      <ImageArea imageObject={props.phone.image} />
      <div className="container px-4 info-text">
        <p className="p-2 text-l">
          <span className="font-semibold text-gray-500">Price </span>
          <hr></hr>
          <span className="font-mono text-xl font-bold">
            {props.phone.price * 212 + 8000} GYD
          </span>
        </p>
        <p className="p-2 font-bold text-l">
          <span className="font-semibold text-gray-500">Model Year </span>
          <hr></hr>
          {props.phone.modelYear}
        </p>
        <p className="p-2 font-bold text-l">
          <span className="font-semibold text-gray-500">Storage </span>
          <hr></hr>
          {props.phone.storage.capacity} + {props.phone.storage.ram}
        </p>
        <p className="p-2 font-bold text-l">
          <span className="font-semibold text-gray-500">Screen Size </span>
          <hr></hr>
          {props.phone.screenSize}
        </p>
        <p className="p-2 font-bold text-l">
          <span className="font-semibold text-gray-500">Camera </span>
          <hr></hr>
          <ul className="px-2">
            <li>
              {" "}
              <span className="font-semibold text-gray-500">
                Front Camera:{" "}
              </span>
              {props.phone.camera.frontCamera}
            </li>
            <li>
              <span className="font-semibold text-gray-500">Rear Camera: </span>
              {props.phone.camera.rearCamera}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

class ImageArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: props.imageObject.total,
      folderName: props.imageObject.folderName,
      imageSelected: 0,
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }
  /*
  componentWillReceiveProps(nextProps) {
    this.setState({
      n: nextProps.imageObject.total,
      folderName: nextProps.imageObject.folderName,
    });
  }*/
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState != nextProps) {
      return {
        n: nextProps.imageObject.total,
        folderName: nextProps.imageObject.folderName,
      };
    }
  }
  leftClick() {
    console.log("leftClick");
    console.log(this.state.folderName);
    this.state.imageSelected > 0
      ? this.setState({ imageSelected: this.state.imageSelected - 1 })
      : this.setState({ imageSelected: this.state.n });
  }
  rightClick() {
    console.log("rightClick");
    console.log(this.state.folderName);
    this.state.imageSelected < this.state.n
      ? this.setState({ imageSelected: this.state.imageSelected + 1 })
      : this.setState({ imageSelected: 0 });
  }
  render() {
    return (
      <div className="flex items-center justify-between pt-2 image-area-container">
        <div className="pl-2 left-button">
          <button className="w-8" onClick={this.leftClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center h-80">
          {
            <img
              src={
                "/img/" +
                this.state.folderName +
                "/" +
                this.state.imageSelected +
                ".jpg"
              }
            ></img>
          }
        </div>
        <div className="pr-2 right-button">
          <button className="w-8" onClick={this.rightClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
