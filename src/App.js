import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingList: [
        {
          id: 1,
          name: "Orchid",
          image: "https://www.pillowtalk.com.au/medias/?context=bWFzdGVyfGltYWdlc3w1OTUxNzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDM4L2gzZS84OTEyNDg5NTEyOTkwLmpwZ3w0NzljZmNiYjg3NDQwZjVhOWEwOGY2YzE4MmRmMGMzZWFjYzI0Y2I4N2U3OGQwYzQzZTIzMzU4NDhhNjQ5Mzg1",
          price: "3JD",
        },
        {
          id: 2,
          name: "Lavender",
          image: "https://m.media-amazon.com/images/I/41xfQXg86SL.jpg",
          price: "5JD",
        },
        {
          id: 3,
          name: "Violet",
          image: "https://i5.walmartimages.com/asr/36d63440-4533-4c3e-bd40-2c5155e65e0c_1.67dc59f6f0766b384142bd45f64db53b.jpeg",
          price: "2JD",
        },
        {
          id: 4,
          name: "Flowers",
          image: "https://cdn.wallpapersafari.com/38/35/GdNlZr.jpg",
          price: "2JD"
        }
      ]
    };
    this.addNewThing = this.addNewThing.bind(this);
  }
  render() {
    return (
      <>
        <div className="HeaderDiv">
          <Header name="April" thingList={this.state.thingList}/>
        </div>
        <main>
          <ThingList thingList={this.state.thingList} thingCreated={thing => this.addNewThing(thing)} />
        </main>
        <Footer name="April" year="2020" />
      </>
    );
  }
  addNewThing(thing) {
    let allThing = this.state.thingList;
    let id = 5
    allThing.push({ id: id++, name: thing.name, image: thing.image, price: thing.price });
    this.setState({
      thingList: allThing
    })
  }
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      price: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <>
        <h2 className="AppAdd">Add your product</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="AppLabel">
            <input type="text" placeholder="Name" onChange={this.handleChangeName} required className="AppInputs"></input>
            <input type="text" placeholder="Image_URL" onChange={this.handleChangeImage} required className="AppInputs"></input>
            <input type="text" placeholder="Price" onChange={this.handleChangePrice} required className="AppInputs"></input>
          </label>
          <button type="submit" className="AppButton">Add item</button>
        </form>
      </>
    )
  }
  handleChangeName(event) {
    let newName = event.target.value;
    this.setState({
      name: newName
    });
  }
  handleChangeImage(event) {
    let newImage = event.target.value;
    this.setState({
      image: newImage
    });
  }
  handleChangePrice(event) {
    let newPrice = event.target.value;
    this.setState({
      price: newPrice
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onThingCreate(this.state);
  }
}

function Header(props) {
  return (
    <header className="AppHeader">
      <div className="AppDiv">
        <h1 className="App">{props.name}<span className="AppSpan">{props.thingList.length}</span></h1>
      </div>
    </header>
  )
}

function ThingList(props) {
  return (
    <>
      <div className="AppDivThings">
        <ul className="AppThings">
          {props.thingList.map(thing => <Thing item={thing} key={thing.id} />)}
        </ul>
      </div>
      <ThingForm onThingCreate={(data) => props.thingCreated(data)} />
    </>
  )
}

function Thing(props) {
  return (
    <>
      <div className="AppProducts">
        <li><img src={props.item.image}></img></li>
        <li><h2>{props.item.name}</h2></li>
        <li><p>Price: {props.item.price}</p></li>
      </div>
    </>
  )
}

function Footer(props) {
  return (
    <footer className="AppFooter">
      <p>{props.name} &sdot; All copyrights are reserved &copy; {props.year}</p>
    </footer>
  )
}

export default App;
