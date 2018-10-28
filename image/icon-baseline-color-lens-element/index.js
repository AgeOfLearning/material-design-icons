import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineColorLensElement
 * @class IconBaselineColorLensElement
 * @extends {AoflElement}
 */
class IconBaselineColorLensElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineColorLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-color-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineColorLensElement.is, IconBaselineColorLensElement);

export default IconBaselineColorLensElement;
