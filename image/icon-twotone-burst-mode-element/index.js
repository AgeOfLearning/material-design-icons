import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBurstModeElement
 * @class IconTwotoneBurstModeElement
 * @extends {AoflElement}
 */
class IconTwotoneBurstModeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBurstModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-burst-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBurstModeElement.is, IconTwotoneBurstModeElement);

export default IconTwotoneBurstModeElement;
