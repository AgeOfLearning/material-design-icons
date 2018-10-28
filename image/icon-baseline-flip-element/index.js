import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlipElement
 * @class IconBaselineFlipElement
 * @extends {AoflElement}
 */
class IconBaselineFlipElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlipElement.is, IconBaselineFlipElement);

export default IconBaselineFlipElement;
