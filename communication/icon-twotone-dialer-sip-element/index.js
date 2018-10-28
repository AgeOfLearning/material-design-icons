import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDialerSipElement
 * @class IconTwotoneDialerSipElement
 * @extends {AoflElement}
 */
class IconTwotoneDialerSipElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDialerSipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dialer-sip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDialerSipElement.is, IconTwotoneDialerSipElement);

export default IconTwotoneDialerSipElement;
