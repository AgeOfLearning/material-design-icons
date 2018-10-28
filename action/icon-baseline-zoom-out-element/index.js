import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineZoomOutElement
 * @class IconBaselineZoomOutElement
 * @extends {AoflElement}
 */
class IconBaselineZoomOutElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineZoomOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-zoom-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineZoomOutElement.is, IconBaselineZoomOutElement);

export default IconBaselineZoomOutElement;
