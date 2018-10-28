import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDialerSipElement
 * @class IconRoundDialerSipElement
 * @extends {AoflElement}
 */
class IconRoundDialerSipElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDialerSipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dialer-sip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDialerSipElement.is, IconRoundDialerSipElement);

export default IconRoundDialerSipElement;
