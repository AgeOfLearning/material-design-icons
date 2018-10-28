import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallMissedOutgoingElement
 * @class IconTwotoneCallMissedOutgoingElement
 * @extends {AoflElement}
 */
class IconTwotoneCallMissedOutgoingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallMissedOutgoingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-missed-outgoing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallMissedOutgoingElement.is, IconTwotoneCallMissedOutgoingElement);

export default IconTwotoneCallMissedOutgoingElement;
