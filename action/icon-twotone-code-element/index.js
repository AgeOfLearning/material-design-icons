import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCodeElement
 * @class IconTwotoneCodeElement
 * @extends {AoflElement}
 */
class IconTwotoneCodeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCodeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-code';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCodeElement.is, IconTwotoneCodeElement);

export default IconTwotoneCodeElement;
