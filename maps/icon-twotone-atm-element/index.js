import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAtmElement
 * @class IconTwotoneAtmElement
 * @extends {AoflElement}
 */
class IconTwotoneAtmElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAtmElement.is, IconTwotoneAtmElement);

export default IconTwotoneAtmElement;
