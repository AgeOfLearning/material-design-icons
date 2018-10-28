import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMyLocationElement
 * @class IconTwotoneMyLocationElement
 * @extends {AoflElement}
 */
class IconTwotoneMyLocationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMyLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-my-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMyLocationElement.is, IconTwotoneMyLocationElement);

export default IconTwotoneMyLocationElement;
