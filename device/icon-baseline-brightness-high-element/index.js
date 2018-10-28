import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightnessHighElement
 * @class IconBaselineBrightnessHighElement
 * @extends {AoflElement}
 */
class IconBaselineBrightnessHighElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightnessHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightnessHighElement.is, IconBaselineBrightnessHighElement);

export default IconBaselineBrightnessHighElement;
