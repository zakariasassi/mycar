import React from 'react'
import './pickcar.css'
import one from '../../assets/1.jpg'
import t from '../../assets/2.jpg'
import th from '../../assets/3.jpg'
import fo from '../../assets/4.jpg'
import fi from '../../assets/5.jpg'
import six from '../../assets/6.jpg'


import Cars from '../../helpers/cars'
function pickcar() {


 { console.log(Cars[0].title)}

  return (

  <>
 
  <div className='cars'>


  <div className="card">
  <div className="card-header top" >
    تأجير سيارات
  </div>
  <div className="card-body">

    <p className="card-text topp">يمكنك اختبار السيارة و الاتصال بصاحب السيارة لتأجيرها</p>



    

  </div>
</div>

<br></br>
<br></br>

<div className='row'>

<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={six} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">شيفرولية سبارك أو مشابهة</h5>
    
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={fi} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">كيا بيجاس أو مشابهة</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={fo} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">كيا ريو أو مشابهة</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={th} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary"style={{ dir:'ltr' }}>  218 92 56565656 <span style={{ Fontweight: '600' }}>استئجار</span> </a>
  </div>
</div>

<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={one} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={t} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={six} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={th} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className="col" style={{width:"18rem"}} >
  <img className="card-img-top" src={fo} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={fi} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>


<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={th} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>

<div className=" col" style={{width:"18rem"}} >
  <img className="card-img-top" src={t} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">سيارة تيوتا بريفيا</h5>
    <p className="card-text">السيارة خالية من العيوب سيرفز تام  25 حصان</p>
    <h6>السعر لـ 1 يوم</h6>
    <p className='price'>147.20 DL</p>
    <div className="avilapulty"></div>
    <a href="#" className="btn btn-primary">218 92 56565656</a>
  </div>
</div>
  </div>
  </div>
  </>
  )
}

export default pickcar