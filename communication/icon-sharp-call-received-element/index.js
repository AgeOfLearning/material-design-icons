import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallReceivedElement
 * @class IconSharpCallReceivedElement
 * @extends {AoflElement}
 */
class IconSharpCallReceivedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallReceivedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-received';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallReceivedElement.is, IconSharpCallReceivedElement);

export default IconSharpCallReceivedElement;
