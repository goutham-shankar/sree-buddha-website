"use client";
import React, { useState } from "react";
import "./style.css";

export default function Page() {
  const [routenno, setroutenno] = useState(false);
  const [routetwo,setroutetwo] =useState(false);
  const [routethree, setroutethree] = useState(false);
  const [routefour, setroutefour] = useState(false);
  const [routefive, setroutefive] = useState(false);
  const [routesix, setroutesix] = useState(false);
  const [routeseven, setrouteseven] = useState(false);
  const [routeeight, setrouteeight] = useState(false);

  const toggleone = () => {
    setroutenno(!routenno);
  };

  const toggletwo = () =>{
    setroutetwo(!routetwo);
  }
  const toggleRouteThree = () => {
    setroutethree(!routethree);
  };

  const toggleRouteFour = () => {
    setroutefour(!routefour);
  };

  const toggleRouteFive = () => {
    setroutefive(!routefive);
  };

  const toggleRouteSix = () => {
    setroutesix(!routesix);
  };

  const toggleRouteSeven = () => {
    setrouteseven(!routeseven);
  };

  const toggleRouteEight = () => {
    setrouteeight(!routeeight);
  };

  return (
    <>
      <div className="container">
        <div className="title">Conveyance & Bus Routes</div>
        <br />
        <hr /><br />
        <div className="paragraph">Our college provides a reliable and well-organized bus service for day scholars. Buses are available for all major 
       locations, offering convenience and flexibility based on students needs. Whether you&apos;re traveling from nearby or 
       distant areas, our bus service ensures timely arrivals and departures.
        </div>

        <br />
        <div className="one">
        <button className="routeone" onClick={toggleone}>
          Adoor Via Noornad
        </button>
        {/* Conditionally render the overlay and content based on routenno */}
        {routenno && (
          <>
            <div className="overlay" onClick={toggleone}></div>
            <div className="routenno">
                        <div className="routeo-content">
                            <div className="btn"> 
                                <h2>Adoor Via Noornad</h2>
                                <button className="off" onClick={toggleone}>
                                Close
                            </button></div>

                                    <table class="faculty-table">
                                            <thead>
                                                <tr>
                                                <th>SI.No</th> <th>Bus Stop</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr> <td>1</td> <td>Adoor KSRTC</td>  <td>07.55</td>                </tr>
                                                <tr> <td>2</td>   <td>Yamuna Adoor</td>   <td>08.00</td>            </tr>
                                                <tr> <td>3</td>   <td>HS Junction Adoor</td>   <td>08.05</td>       </tr>
                                                <tr> <td>4</td>  <td>Thrichennamangalam Jn</td>    <td>08.07</td>   </tr>
                                                <tr> <td>5</td>   <td>14 th stone</td>    <td>08.09</td>            </tr>
                                                <tr> <td>6</td>   <td>Thengumthara</td>   <td>08.10</td>            </tr>
                                                <tr> <td>7</td>   <td>Pazhakulam</td>     <td>08.13</td>            </tr>
                                                <tr> <td>8</td>   <td>Adickattukulangara</td>    <td>08.15</td>     </tr>
                                                <tr> <td>9</td>   <td>Mamood</td>     <td>08.17</td>                </tr>
                                                <tr> <td>10</td>  <td>10 th stone</td>   <td>08.25</td>             </tr>
                                                <tr> <td>11</td>   <td>Noornad</td>     <td>08.25</td>              </tr>
                                                <tr> <td>12</td>    <td>College</td>     <td>08.45</td>             </tr>
                                            </tbody>
                                    </table>

                        </div>
            </div>
          </>
        )}
        </div>


        <div className="two">
            <button className="routeone " onClick={toggletwo}>Adoor via pandalam</button>
            {routetwo && (
                <>
                     <div className="overlay" onClick={toggletwo}></div>
                     <div className="routetwo">
                                    <div className="routeo-content">
                                                        <div className="btn"> 
                                                        <h2>Adoor via pandalam</h2>
                                                        <button className="off" onClick={toggletwo}>
                                                        Close
                                                    </button></div>
                                                    <table class="faculty-table">
                                                      <thead>
                                                          <tr><th>Sl. No.</th><th>Bus Stop</th><th>Time</th></tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>  <td>1</td>  <td>Adoor</td>  <td>07.55</td>        </tr>
                                                          <tr>  <td>2</td>  <td>Paranthal</td>   <td>08.00</td>   </tr>
                                                          <tr>  <td>3</td>  <td>Kurambala</td>   <td>08.05</td>   </tr>
                                                          <tr>  <td>4</td>  <td>Puthankavu</td>  <td>08.05</td>   </tr> 
                                                          <tr>  <td>5</td>  <td>Medical mission</td> <td>08.10</td>   </tr>
                                                          <tr>  <td>6</td>  <td>Pandalam</td>  <td>08.15</td>     </tr>
                                                          <tr>  <td>7</td>  <td>Muttar</td>  <td>08.20</td>       </tr>
                                                          <tr>  <td>8</td> <td>Kunnikuzhy</td>  <td>08.23</td>    </tr> 
                                                          <tr>  <td>9</td> <td>Arathimukku</td> <td>08.25</td>    </tr>
                                                          <tr>  <td>10</td>  <td>Mudiyoor konam</td> <td>08.30</td>   </tr>
                                                          <tr> <td>11</td> <td>College</td>  <td>08.45</td>       </tr>

                                                      </tbody>
                                                    </table>

                                    </div>
                     </div>
                
                </>
            )}
        </div>


        <div className="three">
        <button className="routeone" onClick={ toggleRouteThree}>
        Bharanikavu
        </button>
        {/* Conditionally render the overlay and content based on routenno */}
        {routethree && (
          <>
            <div className="overlay" onClick={ toggleRouteThree}></div>
            <div className="routethree">
                        <div className="routeo-content">
                            <div className="btn"> 
                                <h2>Bharanikavu</h2>
                                <button className="off" onClick={ toggleRouteThree}>
                                Close
                            </button></div>

                                    <table class="faculty-table">
                                            <thead>
                                                <tr>
                                                <th>SI.No</th> <th>Bus Stop</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr> <td>1</td> <td>Sasathamcotta</td>  <td>07.55</td>                </tr>
                                                <tr> <td>2</td>   <td>Bharanikavu</td>   <td>08.00</td>            </tr>
                                                <tr> <td>3</td>   <td>Chakkuvally</td>   <td>08.05</td>       </tr>
                                                <tr> <td>4</td>  <td>Vayyankkara</td>    <td>08.15</td>   </tr>
                                                <tr> <td>5</td>   <td>Thamarakulam</td>    <td>08.20</td>            </tr>
                                                <tr> <td>6</td>   <td>	Nediyanickal</td>   <td>08.22</td>            </tr>
                                                <tr> <td>7</td>   <td>Karunankulangara</td>     <td>08.25</td>            </tr>
                                                <tr> <td>8</td>   <td>Soornad H.S.Jn</td>    <td>08.30</td>     </tr>
                                                <tr> <td>9</td>   <td>	Charumood</td>     <td>08.30</td>                </tr>
                                                <tr> <td>10</td>  <td>Muthukatukara</td>   <td>08.30</td>             </tr>
                                                <tr> <td>11</td>   <td>Parayankulam</td>     <td>08.32</td>              </tr>
                                                <tr> <td>12</td>    <td>College</td>     <td>08.45</td>             </tr>
                                            </tbody>
                                    </table>

                        </div>
            </div>
          </>
        )}
        </div>


        <div className="four">
        <button className="routeone" onClick={ toggleRouteFour}>
        Changankulangara
        </button>
        {/* Conditionally render the overlay and content based on routenno */}
        {routefour && (
          <>
            <div className="overlay" onClick={ toggleRouteFour}></div>
            <div className="routefour">
                        <div className="routeo-content">
                            <div className="btn"> 
                                <div className="heading">Changankulangara</div>
                                <button className="off" onClick={ toggleRouteFour}>
                                Close
                            </button></div>

                                    <table class="faculty-table">
                                            <thead>
                                                <tr>
                                                <th>SI.No</th> <th>Bus Stop</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr> <td>1</td> <td>Changankulangara Block</td>  <td>07.40</td>      </tr>
                                                <tr> <td>2</td>   <td>Parabramha Hospital</td>   <td>07.45</td>      </tr>
                                                <tr> <td>3</td>   <td>Oachira</td>               <td>07.50</td>      </tr>
                                                <tr> <td>4</td>  <td>Mukkada</td>                <td>07.55</td>      </tr>
                                                <tr> <td>5</td>   <td>Meentheruvu</td>           <td>08.00</td>      </tr>
                                                <tr> <td>6</td>   <td>2nd mile stone</td>        <td>08.05</td>      </tr>
                                                <tr> <td>7</td>   <td>Para Padanilam</td>        <td>08.30</td>      </tr>
                                                <tr> <td>8</td>   <td>College</td>                  <td>08.45</td>      </tr>
                                                <tr> <td>9</td>   <td>Mukkada</td>                  <td>07.55</td>      </tr>
                                                <tr> <td>10</td>  <td>Changankulangara Block</td>   <td>07.40</td>   </tr>
                                                <tr> <td>11</td>   <td>Parabrahma Hospital</td>     <td>07.45</td>   </tr>
                                                <tr> <td>12</td>    <td>Oachira</td>                <td>07.50</td>              </tr>
                                            </tbody>
                                    </table>

                        </div>
            </div>
          </>
        )}
        </div>



        
        <div className="five">
        <button className="routeone" onClick={ toggleRouteFive}>
        Chengannur
        </button>
        {/* Conditionally render the overlay and content based on routenno */}
        {routefive && (
          <>
            <div className="overlay" onClick={ toggleRouteFive}></div>
            <div className="routethree">
                        <div className="routeo-content">
                            <div className="btn"> 
                                <h2>Chengannur</h2>
                                <button className="off" onClick={ toggleRouteFive}>
                                Close
                            </button></div>

                                    <table class="faculty-table">
                                            <thead>
                                                <tr>
                                                <th>SI.No</th> <th>Bus Stop</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr> <td>1</td> <td>Chengannur</td>       <td>07.50</td>                </tr>
                                                <tr> <td>2</td> <td>Vellavur Jn</td>      <td>07.55</td>                </tr>
                                                <tr> <td>3</td>   <td>Madathumpadi</td>   <td>08.00</td>            </tr>
                                                <tr> <td>4</td>   <td>Puliyoor</td>       <td>08.05</td>       </tr>
                                                <tr> <td>5</td>  <td>Puliyoor Ambalam</td><td>08.07</td>   </tr>
                                                <tr> <td>6</td>   <td>Kulickan Palam</td> <td>08.10</td>            </tr>
                                                <tr> <td>7</td>   <td>Paramel padi</td>   <td>08.12</td>            </tr>
                                                <tr> <td>8</td>   <td>Cheriyanad</td>     <td>08.15</td>            </tr>
                                                <tr> <td>9</td>   <td>	Kollakadavu</td>  <td>08.18</td>     </tr>
                                                <tr> <td>10</td>   <td>	Cheruvalloor</td> <td>08.22</td>                </tr>
                                                <tr> <td>11</td>  <td>Varamburu</td>      <td>08.25</td>             </tr>
                                                <tr> <td>12</td>   <td>	Venmony</td>      <td>08.30</td>              </tr>
                                                <tr> <td>13</td>    <td>College</td>      <td>08.45</td>             </tr>
                                            </tbody>
                                    </table>

                        </div>
            </div>
          </>
        )}
        </div>



        <div className="six">
        <button className="routeone" onClick={ toggleRouteSix}>
        Chettikulangara
        </button>
        {/* Conditionally render the overlay and content based on routenno */}
        {routesix && (
          <>
            <div className="overlay" onClick={ toggleRouteSix}></div>
            <div className="routesix">
                        <div className="routeo-content">
                            <div className="btn"> 
                                <div className="heading">Chettikulangara</div>
                                <button className="off" onClick={ toggleRouteSix}>
                                Close
                            </button></div>

                                    <table class="faculty-table">
                                            <thead>
                                                <tr>
                                                <th>SI.No</th> <th>Bus Stop</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr> <td>1</td> <td>Chettikulangara</td>  <td>07.55</td>                </tr>
                                                <tr> <td>2</td>   <td>Panachamood</td>   <td>08.02</td>            </tr>
                                                <tr> <td>3</td>   <td>Thattarambalam</td>   <td>08.05</td>       </tr>
                                                <tr> <td>4</td>  <td>Kandiyoor</td>    <td>08.08</td>   </tr>
                                                <tr> <td>5</td>   <td>	Pookada</td>    <td>08.10</td>            </tr>
                                                <tr> <td>6</td>   <td>Mavellikkara Private Bus stand</td>   <td>08.15</td>            </tr>
                                                <tr> <td>7</td>   <td>	College</td>     <td>08.45</td>            </tr>
                                               
                                            </tbody>
                                    </table>

                        </div>
            </div>
          </>
        )}
        </div>



        
        <div className="seven">
            <button className="routeone " onClick={toggleRouteSeven}>Elavumthitta</button>
            {routeseven && (
                <>
                     <div className="overlay" onClick={toggleRouteSeven}></div>
                     <div className="routeseven">
                                    <div className="routeo-content">
                                                        <div className="btn"> 
                                                        <h2>Elavumthitta</h2>
                                                        <button className="off" onClick={toggleRouteSeven}>
                                                        Close
                                                    </button></div>
                                                    <table class="faculty-table">
                                                      <thead>
                                                          <tr><th>Sl. No.</th><th>Bus Stop</th><th>Time</th></tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>  <td>1</td>  <td>Mutthukonam</td>  <td>07.45</td>        </tr>
                                                          <tr>  <td>2</td>  <td>Elavumthitta</td>   <td>07.50</td>   </tr>
                                                          <tr>  <td>3</td>  <td>Ramanchira</td>   <td>07.55</td>   </tr>
                                                          <tr>  <td>4</td>  <td>Ambalakaduvu</td>  <td>08.00</td>   </tr> 
                                                          <tr>  <td>5</td>  <td>Muttam</td> <td>08.00</td>   </tr>
                                                          <tr>  <td>6</td>  <td>Thumpamon</td>  <td>08.05</td>     </tr>
                                                          <tr>  <td>7</td>  <td>Pandalam</td>  <td>08.15</td>       </tr>
                                                          <tr>  <td>8</td> <td>Muttar</td>  <td>08.20</td>    </tr> 
                                                          <tr>  <td>9</td> <td>	Chittumala</td> <td>08.20</td>    </tr>
                                                          <tr>  <td>10</td>  <td>	Chakalavattam</td> <td>08.20</td>   </tr>
                                                          <tr>  <td>11</td> <td>Edappon Kurusu</td>  <td>08.25</td>       </tr>
                                                          <tr>  <td>12</td> <td>College</td>  <td>08.45</td>       </tr>
                                                      </tbody>
                                                    </table>

                                    </div>
                     </div>
                
                </>
            )}
        </div>

        <div className="eight">
            <button className="routeone " onClick={toggleRouteEight}>Haripad</button>
            {routeeight && (
                <>
                     <div className="overlay" onClick={toggleRouteEight}></div>
                     <div className="routeseven">
                                    <div className="routeo-content">
                                                        <div className="btn"> 
                                                        <h2>Haripad</h2>
                                                        <button className="off" onClick={toggleRouteEight}>
                                                        Close
                                                    </button></div>
                                                    <table class="faculty-table">
                                                      <thead>
                                                          <tr><th>Sl. No.</th><th>Bus Stop</th><th>Time</th></tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>  <td>1</td>  <td>	Mannarasala</td>  <td>07.30</td>        </tr>
                                                          <tr>  <td>2</td>  <td>Harippad Town Hall</td>   <td>07.40</td>   </tr>
                                                          <tr>  <td>3</td>  <td>Harippad Bus stop</td>  <td>07.40</td>   </tr> 
                                                          <tr>  <td>4</td>  <td>Railway</td> <td>07.45</td>   </tr>
                                                          <tr>  <td>5</td>  <td>Muttom kulam</td>  <td>07.55</td>     </tr>
                                                          <tr>  <td>6</td>  <td>College</td>  <td>08.45</td>       </tr>
                                                      </tbody>
                                                    </table>

                                    </div>
                     </div>
                
                </>
            )}
        </div>





{/* last */}
      </div>



    </>
  );
}
