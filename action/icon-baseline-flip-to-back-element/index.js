import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlipToBackElement
 * @class IconBaselineFlipToBackElement
 * @extends {AoflElement}
 */
class IconBaselineFlipToBackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlipToBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flip-to-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlipToBackElement.is, IconBaselineFlipToBackElement);

export default IconBaselineFlipToBackElement;
