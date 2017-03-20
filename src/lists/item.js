import {h} from 'preact';
import timeFormat from '../core/time.js';

import styles from './item.css';

const Comments = ({entity: {descendants, id}}) => {
  const commentText = descendants > 1 ? `${descendants} comments` : 'discuss';

  return <span> | <a href={`/item/${id}`} class={styles.link}>{commentText}</a></span>;
}

export default function ListItem({index, entity}) {
  const {url, title, score, by, time} = entity;
  return (
    <article class={styles.article}>
      <span class={styles.index}>{index}</span>
      <div class={styles.metadata}>
        <h2><a href={url} class={styles.outboundLink}>{title}</a></h2>
        <p>{score} points by <a href={`/user/${by}`} class={styles.link}>{by}</a> {timeFormat(time)} ago<Comments entity={entity} /></p>
      </div>
    </article>
  );
}

