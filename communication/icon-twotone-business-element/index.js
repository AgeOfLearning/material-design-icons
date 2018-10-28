import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBusinessElement
 * @class IconTwotoneBusinessElement
 * @extends {AoflElement}
 */
class IconTwotoneBusinessElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBusinessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-business';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBusinessElement.is, IconTwotoneBusinessElement);

export default IconTwotoneBusinessElement;
