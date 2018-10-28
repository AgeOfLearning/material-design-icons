import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotListedLocationElement
 * @class IconOutlineNotListedLocationElement
 * @extends {AoflElement}
 */
class IconOutlineNotListedLocationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotListedLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-not-listed-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotListedLocationElement.is, IconOutlineNotListedLocationElement);

export default IconOutlineNotListedLocationElement;
