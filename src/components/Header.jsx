import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <p>
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
        </p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  )
}

export default Header
