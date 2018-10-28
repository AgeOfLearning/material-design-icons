import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanoramaHorizontalElement
 * @class IconBaselinePanoramaHorizontalElement
 * @extends {AoflElement}
 */
class IconBaselinePanoramaHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanoramaHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-panorama-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanoramaHorizontalElement.is, IconBaselinePanoramaHorizontalElement);

export default IconBaselinePanoramaHorizontalElement;
