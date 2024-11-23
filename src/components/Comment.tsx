import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setComments] = useState(0);

    function handleDeleteComment() {
        console.log('Deletar comentario')

        onDeleteComment(content)
    }

    // function handleLikeComment() {
    //     setComments(likeCount + 1);
    // }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/felixpessoa.png"  alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    {/* <button onClick={handleLikeComment}> */}
                    <button onClick={() => setComments(likeCount + 1)}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}