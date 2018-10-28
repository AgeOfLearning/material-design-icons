import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotListedLocationElement
 * @class IconTwotoneNotListedLocationElement
 * @extends {AoflElement}
 */
class IconTwotoneNotListedLocationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotListedLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-not-listed-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotListedLocationElement.is, IconTwotoneNotListedLocationElement);

export default IconTwotoneNotListedLocationElement;
