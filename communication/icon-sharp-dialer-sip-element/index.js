import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDialerSipElement
 * @class IconSharpDialerSipElement
 * @extends {AoflElement}
 */
class IconSharpDialerSipElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDialerSipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dialer-sip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDialerSipElement.is, IconSharpDialerSipElement);

export default IconSharpDialerSipElement;
