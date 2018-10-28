import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoElement
 * @class IconRoundPhotoElement
 * @extends {AoflElement}
 */
class IconRoundPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoElement.is, IconRoundPhotoElement);

export default IconRoundPhotoElement;
