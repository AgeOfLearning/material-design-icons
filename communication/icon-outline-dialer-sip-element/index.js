import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDialerSipElement
 * @class IconOutlineDialerSipElement
 * @extends {AoflElement}
 */
class IconOutlineDialerSipElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDialerSipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dialer-sip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDialerSipElement.is, IconOutlineDialerSipElement);

export default IconOutlineDialerSipElement;
