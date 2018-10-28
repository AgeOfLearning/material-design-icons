import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanoramaVerticalElement
 * @class IconTwotonePanoramaVerticalElement
 * @extends {AoflElement}
 */
class IconTwotonePanoramaVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanoramaVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-panorama-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanoramaVerticalElement.is, IconTwotonePanoramaVerticalElement);

export default IconTwotonePanoramaVerticalElement;
