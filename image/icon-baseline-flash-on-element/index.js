import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlashOnElement
 * @class IconBaselineFlashOnElement
 * @extends {AoflElement}
 */
class IconBaselineFlashOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlashOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flash-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlashOnElement.is, IconBaselineFlashOnElement);

export default IconBaselineFlashOnElement;
