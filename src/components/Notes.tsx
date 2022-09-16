import React, { MouseEventHandler, TextareaHTMLAttributes } from "react";
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

  const clickEventHandler: MouseEventHandler = () => {
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

  return (
    <>
      {edit ? <button onClick={clickEventHandler}>Save changes</button> : null}
      <textarea
        ref={textRef}
        defaultValue={notes.find((note) => note.id === id)?.content || ""}
        onFocus={() => setEdit(true)}
        autoComplete="off"
        cols={50}
        rows={20}
      ></textarea>
    </>
  );
};

export default Notes;
