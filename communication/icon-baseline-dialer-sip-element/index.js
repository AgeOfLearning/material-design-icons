import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDialerSipElement
 * @class IconBaselineDialerSipElement
 * @extends {AoflElement}
 */
class IconBaselineDialerSipElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDialerSipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dialer-sip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDialerSipElement.is, IconBaselineDialerSipElement);

export default IconBaselineDialerSipElement;
