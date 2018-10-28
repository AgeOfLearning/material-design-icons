import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStreetviewElement
 * @class IconTwotoneStreetviewElement
 * @extends {AoflElement}
 */
class IconTwotoneStreetviewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStreetviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-streetview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStreetviewElement.is, IconTwotoneStreetviewElement);

export default IconTwotoneStreetviewElement;
