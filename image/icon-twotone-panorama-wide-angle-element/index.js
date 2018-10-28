import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanoramaWideAngleElement
 * @class IconTwotonePanoramaWideAngleElement
 * @extends {AoflElement}
 */
class IconTwotonePanoramaWideAngleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanoramaWideAngleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-panorama-wide-angle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanoramaWideAngleElement.is, IconTwotonePanoramaWideAngleElement);

export default IconTwotonePanoramaWideAngleElement;
