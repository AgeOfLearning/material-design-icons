import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDataUsageElement
 * @class IconRoundDataUsageElement
 * @extends {AoflElement}
 */
class IconRoundDataUsageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDataUsageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-data-usage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDataUsageElement.is, IconRoundDataUsageElement);

export default IconRoundDataUsageElement;
