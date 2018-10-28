import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddAPhotoElement
 * @class IconRoundAddAPhotoElement
 * @extends {AoflElement}
 */
class IconRoundAddAPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddAPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-a-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddAPhotoElement.is, IconRoundAddAPhotoElement);

export default IconRoundAddAPhotoElement;
