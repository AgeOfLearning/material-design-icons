import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlipToFrontElement
 * @class IconBaselineFlipToFrontElement
 * @extends {AoflElement}
 */
class IconBaselineFlipToFrontElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlipToFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flip-to-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlipToFrontElement.is, IconBaselineFlipToFrontElement);

export default IconBaselineFlipToFrontElement;
