import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallMissedOutgoingElement
 * @class IconBaselineCallMissedOutgoingElement
 * @extends {AoflElement}
 */
class IconBaselineCallMissedOutgoingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallMissedOutgoingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-missed-outgoing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallMissedOutgoingElement.is, IconBaselineCallMissedOutgoingElement);

export default IconBaselineCallMissedOutgoingElement;
