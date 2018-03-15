import React from 'react';

const ChaptersList = props => {
  return (
    <select onChange={props.handleSelectedChapter}>
      {props.chapters.map(chapter => {
        return (
          <option value={chapter.id_chapter} key={chapter.id_chapter}>
            {chapter.chapter_name}
          </option>
        );
      })}
    </select>
  );
};

export default ChaptersList;
