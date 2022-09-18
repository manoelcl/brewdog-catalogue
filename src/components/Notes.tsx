import React, { MouseEventHandler } from "react";
import { useRef } from "react";

import { useState } from "react";
import { getNotes } from "../helpers";

export interface NotesProps {
  id: number | undefined;
}
export interface Note {
  id: number;
  content: string;
  date: Date;
}

const Notes: React.FC<NotesProps> = ({ id }) => {
  const notes: Note[] = getNotes();
  const [edit, setEdit] = useState<boolean>(false);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  if (!id) return null;

  const clickEventHandlerSave: MouseEventHandler = () => {
    setEdit(false);
    const index = notes.findIndex((note) => note.id === id);
    const newNote: Note = {
      id: id,
      content: textRef.current?.value || "",
      date: new Date(),
    };
    if (index >= 0) {
      notes[index] = newNote;
    } else {
      notes.push(newNote);
    }
    localStorage.setItem("beerNotes", JSON.stringify(notes));
  };

  const clickEventHandlerRemove: MouseEventHandler = () => {
    setEdit(false);
    if (textRef?.current?.value) {
      textRef.current.value = "";
    }

    const index = notes.findIndex((note) => note.id === id);

    if (index >= 0) {
      notes.splice(index, 1);
    }
    localStorage.setItem("beerNotes", JSON.stringify(notes));
  };

  return (
    <div className="notes">
      <h2>📝 Notes:</h2>
      <textarea
        ref={textRef}
        defaultValue={notes.find((note) => note.id === id)?.content || ""}
        onFocus={() => setEdit(true)}
        autoComplete="off"
        placeholder="Press here to take your own notes"
      ></textarea>
      {edit ? (
        <>
          <button onClick={clickEventHandlerSave}>Save changes</button>
          <button onClick={clickEventHandlerRemove}>Remove note</button>
        </>
      ) : null}
    </div>
  );
};

export default Notes;
