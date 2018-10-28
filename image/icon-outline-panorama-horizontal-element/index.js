import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanoramaHorizontalElement
 * @class IconOutlinePanoramaHorizontalElement
 * @extends {AoflElement}
 */
class IconOutlinePanoramaHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanoramaHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-panorama-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanoramaHorizontalElement.is, IconOutlinePanoramaHorizontalElement);

export default IconOutlinePanoramaHorizontalElement;
