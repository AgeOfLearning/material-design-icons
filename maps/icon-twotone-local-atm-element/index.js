import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalAtmElement
 * @class IconTwotoneLocalAtmElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalAtmElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalAtmElement.is, IconTwotoneLocalAtmElement);

export default IconTwotoneLocalAtmElement;
