import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonPinElement
 * @class IconTwotonePersonPinElement
 * @extends {AoflElement}
 */
class IconTwotonePersonPinElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonPinElement.is, IconTwotonePersonPinElement);

export default IconTwotonePersonPinElement;
