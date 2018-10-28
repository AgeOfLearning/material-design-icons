import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallMissedOutgoingElement
 * @class IconSharpCallMissedOutgoingElement
 * @extends {AoflElement}
 */
class IconSharpCallMissedOutgoingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallMissedOutgoingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-missed-outgoing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallMissedOutgoingElement.is, IconSharpCallMissedOutgoingElement);

export default IconSharpCallMissedOutgoingElement;
