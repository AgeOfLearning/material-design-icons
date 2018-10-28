import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddLocationElement
 * @class IconOutlineAddLocationElement
 * @extends {AoflElement}
 */
class IconOutlineAddLocationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddLocationElement.is, IconOutlineAddLocationElement);

export default IconOutlineAddLocationElement;
