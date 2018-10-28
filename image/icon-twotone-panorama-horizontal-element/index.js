import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanoramaHorizontalElement
 * @class IconTwotonePanoramaHorizontalElement
 * @extends {AoflElement}
 */
class IconTwotonePanoramaHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanoramaHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-panorama-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanoramaHorizontalElement.is, IconTwotonePanoramaHorizontalElement);

export default IconTwotonePanoramaHorizontalElement;
