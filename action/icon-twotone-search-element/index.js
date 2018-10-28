import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSearchElement
 * @class IconTwotoneSearchElement
 * @extends {AoflElement}
 */
class IconTwotoneSearchElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSearchElement.is, IconTwotoneSearchElement);

export default IconTwotoneSearchElement;
