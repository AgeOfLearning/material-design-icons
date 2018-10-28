import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightnessAutoElement
 * @class IconBaselineBrightnessAutoElement
 * @extends {AoflElement}
 */
class IconBaselineBrightnessAutoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightnessAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightnessAutoElement.is, IconBaselineBrightnessAutoElement);

export default IconBaselineBrightnessAutoElement;
