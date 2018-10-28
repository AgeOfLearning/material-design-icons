import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlashOffElement
 * @class IconBaselineFlashOffElement
 * @extends {AoflElement}
 */
class IconBaselineFlashOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlashOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flash-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlashOffElement.is, IconBaselineFlashOffElement);

export default IconBaselineFlashOffElement;
