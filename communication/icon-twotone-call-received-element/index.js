import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallReceivedElement
 * @class IconTwotoneCallReceivedElement
 * @extends {AoflElement}
 */
class IconTwotoneCallReceivedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallReceivedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-received';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallReceivedElement.is, IconTwotoneCallReceivedElement);

export default IconTwotoneCallReceivedElement;
