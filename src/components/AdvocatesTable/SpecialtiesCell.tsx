import React, { useState, useEffect, useRef } from 'react';

type Props = { specialties: string[] };

export default function SpecialtiesCell({ specialties }: Props) {
  return (
    <div>
    {specialties.map((specialty, i) => (
      <div key={i}>
        <div
        className="truncate whitespace-nowrap cursor-default w-full"
        title={specialty}
        >
          {specialty}
        </div>
      </div>
    ))}
    </div>
  )
}