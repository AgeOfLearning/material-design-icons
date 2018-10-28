import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoFilterElement
 * @class IconOutlinePhotoFilterElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoFilterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoFilterElement.is, IconOutlinePhotoFilterElement);

export default IconOutlinePhotoFilterElement;
