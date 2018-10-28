import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCompareElement
 * @class IconRoundCompareElement
 * @extends {AoflElement}
 */
class IconRoundCompareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCompareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-compare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCompareElement.is, IconRoundCompareElement);

export default IconRoundCompareElement;
