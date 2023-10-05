
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const BussinesCard = async () => {

    const session = await getServerSession(authOptions);
    
    <div className='card'>
      <div className='card-back'>
        <div className='line-numbers'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className='variable'>const </span>
          <span className='function'>aboutMe </span>
          <span className='operator'>= </span>
          <span>{'{'}</span>
          <div className='indent'>
            {' '}
            <span className='property'>NOMBRE</span>
            <span className='operator'>: </span>
            <span className='string'>'{session?.user.username}'</span>
            <span>,</span>
          </div>
          <div className='indent'>
            {' '}
            <span className='property'>cargo</span>
            <span className='operator'>: </span>
            <span className='string'>ANALISTA DE PLATAFORMA</span>
            <span>,</span>
          </div>
          <div className='indent'>
            {' '}
            <span className='property'>contact</span>
            <span className='operator'>: </span>
            <span>{'{'}</span>
            <div className='indent'>
              {' '}
              <span className='property'>email</span>
              <span className='operator'>: </span>
              <span className='string'>'{session?.user.email}'</span>
              <span>,</span>
            </div>
            <div className='indent'>
              <span className='property'>website</span>
              <span className='operator'>:</span>
              <span className='string'>www.megamassive.net</span>
            </div>
            <span>{'}'}</span>
          </div>
          <span>{'}'}</span>
        </code>
      </div>
      <div className='card-front'>
        <img className='h-[15rem] w-[30rem]' src="" />
      </div>
    </div>

};

export default BussinesCard;

