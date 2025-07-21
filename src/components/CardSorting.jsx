// src/components/CardSorting.jsx

import React, { useState, useRef, useEffect } from "react";
import { FaUndoAlt } from "react-icons/fa";
import {
  DndContext,
  useDraggable,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const DraggableNote = ({ id, x, y, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const finalX = x + (transform?.x ?? 0);
  const finalY = y + (transform?.y ?? 0);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: `translate(${finalX}px, ${finalY}px)`,
        position: "absolute",
        width: "70px",
        height: "70px",
        backgroundColor: "#facc30",
        padding: "0.25rem",
        borderRadius: "6px",
        cursor: "grab",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 10,
        fontSize: "0.75rem",
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
};

const CardSorting = () => {
  const defaultNotes = [
    { id: "note-1", x: 40, y: 80, label: "Proximity" },
    { id: "note-2", x: 155, y: 135, label: "Contact" },
    { id: "note-3", x: 140, y: 70, label: "Groom" },
    { id: "note-4", x: 70, y: 130, label: "Play" },
    { id: "note-5", x: 90, y: 90, label: "Inactive" },
    { id: "note-6", x: 110, y: 140, label: "Manipulate" },
    { id: "note-7", x: 130, y: 30, label: "Locomote" },
    { id: "note-8", x: 80, y: 50, label: "Abnormal" },
  ];

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("cardSortingNotes");
    return saved ? JSON.parse(saved) : defaultNotes;
  });

  const containerRef = useRef(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, delta } = event;

    const updatedNotes = notes.map((note) => {
      if (note.id !== active.id) return note;

      const newX = note.x + delta.x;
      const newY = note.y + delta.y;

      const box = containerRef.current;
      const noteW = 70;
      const noteH = 70;

      if (
        newX < 0 ||
        newY < 0 ||
        newX + noteW > box.offsetWidth ||
        newY + noteH > box.offsetHeight
      ) {
        return note; // snap back
      }

      return { ...note, x: newX, y: newY };
    });

    setNotes(updatedNotes);
    localStorage.setItem("cardSortingNotes", JSON.stringify(updatedNotes));
  };

  const handleReset = () => {
    setNotes(defaultNotes);
    localStorage.removeItem("cardSortingNotes");
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div
        ref={containerRef}
        className="relative w-full h-[260px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-md border border-white/10"
      >
        {/* Reset Button on Top-Right */}
        <button
          onClick={handleReset}
          className="bg-red-900 hover:bg-green-400 absolute top-2 right-2 text-white text-xs p-2 rounded-full z-20 flex items-center justify-centertransition-colors"
          title="Reset Notes"
        >
          <FaUndoAlt size={16} />
        </button>

        {/* Draggable Notes */}
        {notes.map((note) => (
          <DraggableNote key={note.id} {...note} />
        ))}
      </div>
    </DndContext>
  );
};

export default CardSorting;
