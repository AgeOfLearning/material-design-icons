import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSendElement
 * @class IconTwotoneSendElement
 * @extends {AoflElement}
 */
class IconTwotoneSendElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-send';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSendElement.is, IconTwotoneSendElement);

export default IconTwotoneSendElement;
