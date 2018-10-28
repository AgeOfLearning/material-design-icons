import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMyLocationElement
 * @class IconOutlineMyLocationElement
 * @extends {AoflElement}
 */
class IconOutlineMyLocationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMyLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-my-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMyLocationElement.is, IconOutlineMyLocationElement);

export default IconOutlineMyLocationElement;
