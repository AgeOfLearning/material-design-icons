import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBurstModeElement
 * @class IconOutlineBurstModeElement
 * @extends {AoflElement}
 */
class IconOutlineBurstModeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBurstModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-burst-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBurstModeElement.is, IconOutlineBurstModeElement);

export default IconOutlineBurstModeElement;
