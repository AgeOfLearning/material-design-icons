import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHotTubElement
 * @class IconRoundHotTubElement
 * @extends {AoflElement}
 */
class IconRoundHotTubElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHotTubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hot-tub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHotTubElement.is, IconRoundHotTubElement);

export default IconRoundHotTubElement;
