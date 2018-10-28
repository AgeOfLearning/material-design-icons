import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineZoomOutMapElement
 * @class IconBaselineZoomOutMapElement
 * @extends {AoflElement}
 */
class IconBaselineZoomOutMapElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineZoomOutMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-zoom-out-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineZoomOutMapElement.is, IconBaselineZoomOutMapElement);

export default IconBaselineZoomOutMapElement;
