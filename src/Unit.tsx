import React from "react";
import "./Unit.css"

export type Weapon = {
  name: string;
  range?: number;
  attacks?: number;
  ap?: number;
  traits: string[];
};

export type Unit = {
  name: string;
  modelCount?: number;
  quality?: number;
  defense?: number;
  tough?: number;
  points?: number;
  traits?: string[];
  weapons?: Weapon[];
  image?: string;
};

interface UnitCardProps {
  unit: Unit;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit }) => {
  return (
    <div className="card">
      {/* Unit Name and Model Count */}
      <h2 className="">
        {unit.name} [{unit.modelCount}] 
      </h2>

      {/* Image Placeholder */}
      <div className="">
        {unit.image ? (
          <img src={unit.image} alt={unit.name} className="" />
        ) : (
          <span className="">No Image</span>
        )}
      </div>

      {/* Stats Section */}
      <div className="">
        <span className="">
          Q{unit.quality}+ D{unit.defense}+ | {unit.points}pts | Tough(
          {unit.tough})
        </span>
      </div>

      {/* Traits Section */}
      <div className="">
        <h3 className="">Traits</h3>
        <ul className="">
          {unit.traits && unit.traits.length > 0 ? (
            unit.traits.map((trait, index) => (
              <li key={index} className="">
                {trait}
              </li>
            ))
          ) : (
            <li className="">No traits</li>
          )}
        </ul>
      </div>

      {/* Weapons Section */}
      <div className="">
        <h3 className="">Weapons</h3>
        <ul className="">
          {unit.weapons && unit.weapons.length > 0 && (
            unit.weapons.map((weapon, index) => (
              <li key={index} className="">
                {weapon.name} ({weapon.range}", A{weapon.attacks}, AP(
                {weapon.ap}))
              </li>
            ))
          ) 
          }
        </ul>
      </div>
    </div>
  );
};

export default UnitCard;
