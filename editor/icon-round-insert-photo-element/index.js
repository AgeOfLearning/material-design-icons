import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertPhotoElement
 * @class IconRoundInsertPhotoElement
 * @extends {AoflElement}
 */
class IconRoundInsertPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertPhotoElement.is, IconRoundInsertPhotoElement);

export default IconRoundInsertPhotoElement;
