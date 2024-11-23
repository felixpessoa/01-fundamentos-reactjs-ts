import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;

}
// export function Avatar(props) {
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    // const hasBorder = props.hasBorder !== false;
    return (
        <img 
            className={hasBorder ? styles.avatrWithBorder : styles.avatar}
            // src={props.src}
            // src={src}
            // alt={alt}
            // title={alt}
            {...props}
        />
    );  
}