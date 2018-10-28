import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanoramaVerticalElement
 * @class IconOutlinePanoramaVerticalElement
 * @extends {AoflElement}
 */
class IconOutlinePanoramaVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanoramaVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-panorama-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanoramaVerticalElement.is, IconOutlinePanoramaVerticalElement);

export default IconOutlinePanoramaVerticalElement;
