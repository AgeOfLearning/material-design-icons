import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallMissedOutgoingElement
 * @class IconRoundCallMissedOutgoingElement
 * @extends {AoflElement}
 */
class IconRoundCallMissedOutgoingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallMissedOutgoingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-missed-outgoing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallMissedOutgoingElement.is, IconRoundCallMissedOutgoingElement);

export default IconRoundCallMissedOutgoingElement;
