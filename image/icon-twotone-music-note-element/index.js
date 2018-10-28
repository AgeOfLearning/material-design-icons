import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMusicNoteElement
 * @class IconTwotoneMusicNoteElement
 * @extends {AoflElement}
 */
class IconTwotoneMusicNoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMusicNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-music-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMusicNoteElement.is, IconTwotoneMusicNoteElement);

export default IconTwotoneMusicNoteElement;
