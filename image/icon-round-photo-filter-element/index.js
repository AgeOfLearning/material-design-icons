import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoFilterElement
 * @class IconRoundPhotoFilterElement
 * @extends {AoflElement}
 */
class IconRoundPhotoFilterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoFilterElement.is, IconRoundPhotoFilterElement);

export default IconRoundPhotoFilterElement;
