import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLinearScaleElement
 * @class IconRoundLinearScaleElement
 * @extends {AoflElement}
 */
class IconRoundLinearScaleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLinearScaleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-linear-scale';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLinearScaleElement.is, IconRoundLinearScaleElement);

export default IconRoundLinearScaleElement;
