import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallReceivedElement
 * @class IconBaselineCallReceivedElement
 * @extends {AoflElement}
 */
class IconBaselineCallReceivedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallReceivedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-received';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallReceivedElement.is, IconBaselineCallReceivedElement);

export default IconBaselineCallReceivedElement;
