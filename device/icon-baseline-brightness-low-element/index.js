import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightnessLowElement
 * @class IconBaselineBrightnessLowElement
 * @extends {AoflElement}
 */
class IconBaselineBrightnessLowElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightnessLowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-low';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightnessLowElement.is, IconBaselineBrightnessLowElement);

export default IconBaselineBrightnessLowElement;
