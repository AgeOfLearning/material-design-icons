import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallMissedOutgoingElement
 * @class IconOutlineCallMissedOutgoingElement
 * @extends {AoflElement}
 */
class IconOutlineCallMissedOutgoingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallMissedOutgoingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-missed-outgoing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallMissedOutgoingElement.is, IconOutlineCallMissedOutgoingElement);

export default IconOutlineCallMissedOutgoingElement;
