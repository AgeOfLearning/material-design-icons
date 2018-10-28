import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBurstModeElement
 * @class IconBaselineBurstModeElement
 * @extends {AoflElement}
 */
class IconBaselineBurstModeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBurstModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-burst-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBurstModeElement.is, IconBaselineBurstModeElement);

export default IconBaselineBurstModeElement;
