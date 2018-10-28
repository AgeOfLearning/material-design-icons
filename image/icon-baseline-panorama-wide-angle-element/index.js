import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanoramaWideAngleElement
 * @class IconBaselinePanoramaWideAngleElement
 * @extends {AoflElement}
 */
class IconBaselinePanoramaWideAngleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanoramaWideAngleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-panorama-wide-angle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanoramaWideAngleElement.is, IconBaselinePanoramaWideAngleElement);

export default IconBaselinePanoramaWideAngleElement;
