import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVignetteElement
 * @class IconBaselineVignetteElement
 * @extends {AoflElement}
 */
class IconBaselineVignetteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVignetteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vignette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVignetteElement.is, IconBaselineVignetteElement);

export default IconBaselineVignetteElement;
