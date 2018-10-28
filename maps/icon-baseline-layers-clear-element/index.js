import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLayersClearElement
 * @class IconBaselineLayersClearElement
 * @extends {AoflElement}
 */
class IconBaselineLayersClearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLayersClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-layers-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLayersClearElement.is, IconBaselineLayersClearElement);

export default IconBaselineLayersClearElement;
