import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGradientElement
 * @class IconBaselineGradientElement
 * @extends {AoflElement}
 */
class IconBaselineGradientElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGradientElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gradient';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGradientElement.is, IconBaselineGradientElement);

export default IconBaselineGradientElement;
