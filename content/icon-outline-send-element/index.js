import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSendElement
 * @class IconOutlineSendElement
 * @extends {AoflElement}
 */
class IconOutlineSendElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-send';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSendElement.is, IconOutlineSendElement);

export default IconOutlineSendElement;
