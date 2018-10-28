import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHighQualityElement
 * @class IconRoundHighQualityElement
 * @extends {AoflElement}
 */
class IconRoundHighQualityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHighQualityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-high-quality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHighQualityElement.is, IconRoundHighQualityElement);

export default IconRoundHighQualityElement;
