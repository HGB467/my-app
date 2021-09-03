import React,{useState} from 'react'


export default function About() {
    const[divcol,divxol] =useState({
        color: 'white',
    })


const[btncol,btnxol] =useState({
    color: 'white',
    backgroundColor: 'black',
})

    const [state, setstate] = useState({
      color: 'black',
      backgroundColor: 'white',
    })

    const[btn,btn2] = useState("Dark Mode");

    const darkMode =()=>{
        if(state.color==='black'){setstate({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white',
        })
        btnxol({
            color: 'black',
            backgroundColor: 'white',
        })
        divxol({
            color:'black',
        })
        btn2("Light Mode");
    }
    else{setstate({
       color: 'black',
       backgroundColor: 'white',
    })
    btnxol({
        color: 'white',
        backgroundColor: 'black',
    })
    divxol({
        color:'white',
    })
    btn2("Dark Mode")
    }
}
    return (
        <div className="container my-5" style={state}>
            <div style={divcol}>h</div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" style={state} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" style={state} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" style={state} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" style={state} class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" style={state} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={state} class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<button className="btn btn-dark my-3 mx-2" style={btncol} onClick={darkMode}>Enable {btn}</button>
        </div>
    )
}
