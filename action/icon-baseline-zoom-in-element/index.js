import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineZoomInElement
 * @class IconBaselineZoomInElement
 * @extends {AoflElement}
 */
class IconBaselineZoomInElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineZoomInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-zoom-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineZoomInElement.is, IconBaselineZoomInElement);

export default IconBaselineZoomInElement;
