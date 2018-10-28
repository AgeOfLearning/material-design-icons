import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallReceivedElement
 * @class IconOutlineCallReceivedElement
 * @extends {AoflElement}
 */
class IconOutlineCallReceivedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallReceivedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-received';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallReceivedElement.is, IconOutlineCallReceivedElement);

export default IconOutlineCallReceivedElement;
