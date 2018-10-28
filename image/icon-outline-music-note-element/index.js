import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMusicNoteElement
 * @class IconOutlineMusicNoteElement
 * @extends {AoflElement}
 */
class IconOutlineMusicNoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMusicNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-music-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMusicNoteElement.is, IconOutlineMusicNoteElement);

export default IconOutlineMusicNoteElement;
