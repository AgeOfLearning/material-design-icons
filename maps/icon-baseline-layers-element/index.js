import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLayersElement
 * @class IconBaselineLayersElement
 * @extends {AoflElement}
 */
class IconBaselineLayersElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLayersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-layers';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLayersElement.is, IconBaselineLayersElement);

export default IconBaselineLayersElement;
