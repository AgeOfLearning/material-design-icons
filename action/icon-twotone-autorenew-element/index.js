import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAutorenewElement
 * @class IconTwotoneAutorenewElement
 * @extends {AoflElement}
 */
class IconTwotoneAutorenewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAutorenewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-autorenew';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAutorenewElement.is, IconTwotoneAutorenewElement);

export default IconTwotoneAutorenewElement;
