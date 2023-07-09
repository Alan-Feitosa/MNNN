import React from 'react';

const Button = () => {
  return (
    <main>
        <div>
            <button id="add" className='bg-slate-900'>
                +
            </button>
        </div>

        <div>
            <button hidden>Deletar</button>
        </div>
    </main>

  )
}

export default Button