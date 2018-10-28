import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMusicNoteElement
 * @class IconBaselineMusicNoteElement
 * @extends {AoflElement}
 */
class IconBaselineMusicNoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMusicNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-music-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMusicNoteElement.is, IconBaselineMusicNoteElement);

export default IconBaselineMusicNoteElement;
